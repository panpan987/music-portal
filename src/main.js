/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Axios网络请求
import axios from "axios"

const app = createApp(App)
// 将axios挂载到全局
app.config.globalProperties.$axios = axios

registerPlugins(app)

app.mount('#app')
