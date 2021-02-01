import { createApp } from 'vue'
import { VueCookieNext } from 'vue-cookie-next'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(router).use(store).use(VueCookieNext).mount('#app')

// set default config
VueCookieNext.config({ expire: '7d' })