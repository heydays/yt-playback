import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useLastSearchListStore = defineStore('lastSearchList', () => {
  const lastSearchListContainer = reactive({
    list: []
  })

  function emptyLastSearchList() {
    lastSearchListContainer.list = []
  }
  function addLastSearchResultsToList(arr) {
    emptyLastSearchList()
    lastSearchListContainer.list.push(arr)
  }

  return { lastSearchListContainer, addLastSearchResultsToList, emptyLastSearchList }
},{
  persist: true
})