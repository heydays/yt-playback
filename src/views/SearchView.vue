<script setup>
import {ref, reactive} from "vue";
import {watchDebounced} from "@vueuse/core"
import SearchList from "@/components/SearchList.vue";
import FavoritesList from "@/components/FavoritesList.vue";
import {useFavoritesStore} from "@/stores/favorites.js";
import {useLastSearchListStore} from "@/stores/lastSearchList.js";

const searchInput = ref('')
let resultData = reactive({
  list: []
})
const {favoritesContainer} = useFavoritesStore()

const {lastSearchListContainer, addLastSearchResultsToList, emptyLastSearchList} = useLastSearchListStore()

async function callYtApi(searchQuery, resultsPerPage, pageToken) {
  let url = `https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YT_API_KEY}&type=video&part=snippet&q=${searchQuery}`

  if (resultsPerPage) {
    url = `${url}&maxResults=${resultsPerPage}`;
  }
  if (pageToken) {
    url = `${url}&pageToken=${pageToken}`;
  }

  const response = await fetch(url)
    .catch((error) => {
      console.log('Error!:', error)
    })

  return await response.json()
}

function checkLastSearchResults() {
  if (lastSearchListContainer.list) {
    resultData.list = []
    resultData.list.push(lastSearchListContainer.list[0])
  }
}

async function mainSearch() {
  const data = await callYtApi(searchInput.value, 50);
  emptyLastSearchList()
  resultData.list = []
  resultData.list.push(data.items)
  addLastSearchResultsToList(resultData.list[0])
}

checkLastSearchResults()

watchDebounced(searchInput, () => {
  mainSearch()
}, { debounce: 15000, maxWait: 5000 })

</script>

<template>
  <div class="tile">
    <article class="tile is-child is-70% is-first">
      <h1 class="title">Search for Video</h1>
      <div class="searchPreview">
        <span class="material-symbols-outlined search-icon">search</span>
        <input id="search" type="text" v-model="searchInput" class="input">
      </div>
      <div>
        <h2 class="subtitle">Search Results for: "{{searchInput}}"</h2>
        <SearchList :results="resultData.list" />
      </div>
    </article>

    <article id="favs" class="tile is-child is-30% is-right">
      <p class="title">Favorites</p>
      <ul>
        <!-- Content -->
        <FavoritesList :data="favoritesContainer" />
      </ul>
    </article>
  </div>
</template>

<style>
.tile {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 16px;
  padding: 12px;
  gap: 8px;

  @media screen  and (min-width: 768px) {
    flex-direction: row;
  }
}

.tile.is-child {
  flex-direction: column;
  gap: 12px;
}

.tile.is-30\% {
  width: 100%;

  @media screen  and (min-width: 768px) {
    width: 30%;
  }
}

.tile.is-70\% {
  width: 100%;

  @media screen  and (min-width: 768px) {
    width: 70%;
  }
}

.tile.is-first {
  background: rgb(234, 234, 234);
  color: rgb(37, 42, 52);
}
.tile.is-right {
  background: rgb(255, 46, 99);
  color: rgb(234, 234, 234);
}

input {
  display: block;
  width: 100%;
  height: 48px;
  padding: 4px 4px 4px 36px;
  font-size: 24px;
  line-height: 32px;
  border-radius: 8px;
  border: 3px solid rgb(255, 46, 99);
  color: rgb(37, 42, 52);
  background: rgb(255, 46, 99);
}

.searchPreview {
  position: relative;
  display: flex;
  align-items: center;
}

.searchPreview .search-icon {
  position: absolute;
  top: 12px;
  left: 12px;
  height: 24px;
  width: 24px;
  margin-right: 8px;
  color: rgb(37, 42, 52);
}
</style>