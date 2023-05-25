import { createApp } from 'vue'
import './style.less'
import router from './router'
import store from './store'
import App from './App.vue'
import 'element-plus/es/components/message/style/css'

const app = createApp(App)
app.use(router).use(store).mount('#app')
