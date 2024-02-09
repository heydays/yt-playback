<script setup>
import {toRef} from "vue";
import {decodeHTML} from "entities";

const props = defineProps({
  data: Object
})

const properties = toRef(props, 'data')
</script>

<template>
  <ul v-if="properties.length">
    <li v-for="(item, index) in properties" :key="index" class="fav-list-item">
      <RouterLink :to="{path: `/video/${item?.id?.videoId}`}" class="link">
      <div>
        <img :src="item.snippet.thumbnails?.default.url" alt="" width="120px" height="80px">
      </div>
      <h3 class="fav-title">
        {{ decodeHTML(item.snippet?.title) }}
      </h3>
      </RouterLink>
    </li>
  </ul>
  <h3 v-else>
    No Favorites yet.
  </h3>
</template>

<style scoped>
.fav-list-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 3px solid #FC6736;
  border-radius: 8px;
}

.fav-title {
  font-size: 18px;
  color: #0C2D57;
}

.link {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  gap: 8px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
}
</style>