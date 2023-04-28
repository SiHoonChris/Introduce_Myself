import { createApp } from 'vue'
import App from './MyPortfolio.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'
import mitt from './mitt'
import mixins from './mixins'

const i18nStrings = {
  ko: {
    best:'쓸만한 녀석 하나 나왔다.',
    new: "새로움과 잠재력.",
    birthdate1: '생년월일',
    birthdate2: "1997년 4월 26일",
    contact: '연락처',
    github: '깃허브',
  },
  en: {
    best:'What Else?',
    new: "The New & Potential.",
    birthdate1: 'Birth Date',
    birthdate2: "Apr. 26th, 1997",
    contact: 'Contact',
    github: 'GitHub',
  },
  jp: {
    best:'このやろう いいね。',
    new: "新たと潜在力",
    birthdate1: '生年月日',
    birthdate2: "1997年 4月 26日",
    contact: '連絡先',
    github: 'ギットハブ',
  }
}

createApp(App).use(store).use(router).use(i18nPlugin, i18nStrings).use(mitt).mixin(mixins).mount('#app')
