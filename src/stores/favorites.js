import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favoritesContainer = ref([])

  function addFavorite(data) {
    favoritesContainer.value.push(data)
  }

  return { favoritesContainer, addFavorite }
},{
  persist: true
})
