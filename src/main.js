import { createApp } from 'vue'
import App from './AboutMe.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
  ko: {start: "아래 메뉴바를 확인"},
  en: {start: "Check the menu-bar below"},
  jp: {start: "下のメニューバーをチェック"}
}

createApp(App).use(store).use(router).use(i18nPlugin, i18nStrings).mount('#app')
