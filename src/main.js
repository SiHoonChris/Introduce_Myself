import { createApp } from 'vue'
import App from './MyPortfolio.vue'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'
import mitt from './mitt'
import mixins from './mixins'

const i18nStrings = {
  ko: {
    start: "새로움을 경험하세요",
    birthdate1: '생년월일',
    birthdate2: "1997년 4월 26일",
    contact: '연락처',
    github: '깃허브',
    introduce: '최고의 팀플레이어, 이시훈입니다.'
  },
  en: {
    start: "Experience New",
    birthdate1: 'Birth Date',
    birthdate2: "Apr. 26th, 1997",
    contact: 'Contact',
    github: 'GitHub',
    introduce: "Best Team Player, SiHoon Lee"
  },
  jp: {
    start: "新しい経験",
    birthdate1: '生年月日',
    birthdate2: "1997年 4月 26日",
    contact: '連絡先',
    github: 'ギットハブ',
    introduce: '最高のチームプレーヤー、李時熏です。'
  }
}

createApp(App).use(store).use(router).use(i18nPlugin, i18nStrings).use(mitt).mixin(mixins).mount('#app')
