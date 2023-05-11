import { createApp } from 'vue'
import App from './MyPortfolio.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import global from './global'
import axios from 'axios'
import i18nPlugin from './plugins/i18n'
import i18nStrings from './store/index'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(store).use(router).use(i18nPlugin, i18nStrings.state.lang).use(global).mixin(mixins).mount('#app')
