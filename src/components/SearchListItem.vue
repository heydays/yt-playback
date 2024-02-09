<script setup>
import {toRef} from "vue";
import {useFavoritesStore} from "@/stores/favorites.js";
import {RouterLink} from "vue-router";
import {decodeHTML} from "entities";

const props = defineProps({
  data: Object
})

const property = toRef(props, 'data')
const {addFavorite} = useFavoritesStore()

</script>
<template>
  <li>
    <RouterLink :to="{path: `/video/${property?.id?.videoId}`}" @click="e => e.stopPropagation" class="columns">
    <div class="column">
      <img :src="property.snippet?.thumbnails.default.url" width="200">
    </div>
    <div class="column">
      <h3 class="subtitle">
        {{ decodeHTML(property.snippet?.title) }}
      </h3>
      <h4>
        Id: {{property?.id?.videoId}}
      </h4>
      <p class="content">
        {{property.snippet?.description}}
      </p>
      <p class="content">
        {{property.snippet?.channelTitle}}
      </p>
      <p>
        {{property.snippet?.publishTime}}
      </p>
    </div>
    <span class="material-symbols-outlined is-icon" @click.prevent.stop="addFavorite(property)">favorite</span>
    </RouterLink>
  </li>
</template>

<style scoped>
li a {
  position: relative;
  display: flex;
  padding: 8px;
  border: 3px solid rgba(37, 42, 52, 0.25);
  border-radius: 8px;
  color: rgb(37, 42, 52);
  list-style: none;
  gap: 16px;
  z-index: 0;
}

a:hover {
  background: rgba(37, 42, 52, 0.5);
}

.is-icon {
  position: absolute;
  right: -8px;
  top: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  color: rgb(234, 234, 234);
  background: rgb(37, 42, 52);
  border: 3px solid transparent;
  border-radius: 16px;
  z-index: 100;
}

.is-icon:hover {
  background: rgb(234, 234, 234);
  border-color: rgb(37, 42, 52);
  color: rgb(37, 42, 52);
}

.columns {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>