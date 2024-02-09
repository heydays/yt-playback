<script setup>
import SearchListItem from "@/components/SearchListItem.vue";
import {toRef} from "vue";

const props = defineProps({
  results: Object
})

const properties = toRef(props, 'results');
</script>
<template>
  <ul>
    <li class="content" v-if="!properties[0]">
      Waiting for interaction ...
    </li>
    <SearchListItem v-else v-for="(result, index) in properties[0]" :key="index" :data="result"/>
  </ul>
</template>

<style>
ul {
  display: flex;
  flex-direction: column;

  gap: 16px;
  margin: 0;
  padding: 0;
}
</style>