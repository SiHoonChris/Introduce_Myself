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
  },
  en: {
    best:'What Else?',
    new: "The New & Potential.",
  },
  jp: {
    best:'このやろう いいね。',
    new: "新たと潜在力",
  }
}

createApp(App).use(store).use(router).use(i18nPlugin, i18nStrings).use(mitt).mixin(mixins).mount('#app')
