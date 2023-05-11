import mitt from 'mitt'

const methods = {
    openUrl(url) { open(url) },
    move(range) {
      const disp = document.querySelector(".project-container")
      disp.style.transform="translateX("+range+"%)"
      disp.style.transition="0.6s linear"
    }
}
const emitter = mitt();

export default {
  install(Vue) {
    Vue.config.globalProperties.$open = methods.openUrl
    Vue.config.globalProperties.$move = methods.move
    Vue.config.globalProperties.$emitter = emitter
  }
}