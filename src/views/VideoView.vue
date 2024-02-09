<script setup>
import {ref, toRef, onMounted, onUnmounted} from 'vue'
import YouTube from 'vue3-youtube'
import {watchDebounced} from "@vueuse/core";

const props = defineProps({
  videoId: String
})

const ytId = toRef(props, 'videoId')
const inputId = ref()
const youtube = ref()
const speed = ref(100)
let widthValue = ref(620)
let heightValue = ref(347)


function onPlaybackChange(speedRate) {
  youtube.value?.setPlaybackRate(speedRate.value / 100)
}

function onIdChange() {
  if(inputId.value) {
    return inputId.value
  } else {
    return ytId.value
  }
}
function onReady() {
  youtube.value?.setVolume(50)
  youtube.value?.pauseVideo()
}

function updateChanges() {
  onPlaybackChange(speed)
}

function calculateRatio() {
  if(document.body.clientWidth < 520) {
    translateWidthToHeight(320)
  }
  if(document.body.clientWidth > 520 && document.body.clientWidth < 768) {
    translateWidthToHeight(520)
  }
  if(document.body.clientWidth > 768) {
    translateWidthToHeight(620)
  }
}

function translateWidthToHeight(val) {
  widthValue.value = val
  heightValue.value = Math.round(widthValue.value * 0.56)
  updateIframeSizes(widthValue.value, heightValue.value)
}

function updateIframeSizes(width, height) {
  document.querySelector('.my-4 iframe').style.width = width + 'px'
  document.querySelector('.my-4 iframe').style.height = height + 'px'
}

onMounted(() => {
  window.addEventListener('resize', () => calculateRatio())
})

</script>

<template>
  <div class="back">
    <span class="material-symbols-outlined">chevron_left</span>
    <RouterLink :to="{path: '/'}" class="back_link">back to home</RouterLink>
  </div>
  <div class="tile columns">
    <div class="tile is-child is-first column">
      <h1 class="title">Video: {{ytId}}</h1>
      <div class="hero">
        <h2 class="subtitle">Speed:</h2>
        <div class="searchPreview">
          <span class="material-symbols-outlined search-icon">search</span>
          <input type="text" v-model="speed" class="input"/>
        </div>
        <span class="has-text-primary-dark"><strong>New Speed:</strong> {{ speed ? speed : '100' }} <strong>%</strong></span>
      </div>
      <div class="hero is-light">
        <h2 class="subtitle">Video Id:</h2>
        <input type="text" v-model="inputId" :placeholder="ytId" class="input"/> <span class="has-text-primary-dark"><strong>VideoId:</strong> {{ videoId }}</span>
      </div>
      <div class="container">
        <button @click="updateChanges" class="button is-primary my-2 has-text-weight-bold">Update Changes</button>
      </div>
    </div>
    <div class="tile is-child column">
      <YouTube
        :src="`https://www.youtube.com/watch?v=${onIdChange()}`"
        :width="widthValue"
        :height="heightValue"
        @ready="onReady"
        @state-change="updateChanges"
        @playback-rate-change="onPlaybackChange"
        ref="youtube"
        class="my-4"/>
    </div>
  </div>
</template>

<style>
.back {
  display: flex;
  align-items: center;
  margin: 0 0 32px;
  color: rgb(255, 46, 99);
}
.back_link {
  color: rgb(255, 46, 99);
}
.back_link:hover {
  background: none;
  text-decoration: underline;
}

.button {
  color: #fff;
  background: #6A2C70;
  border: none;
  font-size: 18px;
  font-weight: 900;
  padding: 16px 24px;
  border-radius: 16px;
  margin-top: 16px;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
}

.button:hover {
  color: #6A2C70;
  background: #fff;
  border-bottom: 3px solid;
}
</style>
