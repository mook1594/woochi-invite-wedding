import '@/Core/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './Core/router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(pinia);
app.mount('#app')
