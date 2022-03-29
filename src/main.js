import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus, { i18n } from './plugins/element'
import './styles/reset.css'

const app = createApp(App)
installElementPlus(app)
app.use(i18n).mount('#app')
