import './assets/main.css'
import App from './App.vue'
import router from './router'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {VueFire} from 'vuefire'
import {firebaseApp} from './firebase'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(VueFire, {
  firebaseApp
})

app.mount('#app')
