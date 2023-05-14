<template>
  <div class="menu-area" @mouseenter="activateMenu(0, 1.0, 0)" @mouseleave="activateMenu(14, 1.2, 200)">
    <div class="menu-bar">
      <div class="menu-content">
        <ul>
          <li v-for="(icon, i) in icons" :key="i">
            <img :src="icon.src" @click="showContents(icon.keyword)">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      icons:[
        { src: require("@/assets/icons/health-icon.png"),   keyword:'AM'     },
        { src: require("@/assets/icons/memo-icon.png"),     keyword:'IM'     },
        { src: require("@/assets/icons/reminder-icon.png"), keyword:'TS'     },
        { src: require("@/assets/icons/image-icon.png"),    keyword:'ToyPrj' },
        { src: require("@/assets/icons/itunes-icon.png"),   keyword:'TPrj1'  },
        { src: require("@/assets/icons/appstore-icon.png"), keyword:'TPrj2'  },
        { src: require("@/assets/icons/setting-icon.png"),  keyword:'Spec'   }
      ]
    }
  },
  mounted(){
    this.activateMenu(0, 1.2, 1400)
    this.activateMenu(14, 1.4, 3500)
  },
  methods: {
    activateMenu(length, speed, delay){
      const menu = document.querySelector(".menu-area")
      setTimeout(() => {
        menu.style.paddingTop=length+"vh"
        menu.style.transition=speed+"s ease-in-out"
      }, delay)
    },
    showContents(word) {
      this.$emitter.emit('sc', word)
    }
  }
}
</script>

<style scoped>
  .menu-area {
    width: 100vw;
    height: 14vh;
    padding-top: 14vh;
  }
  .menu-bar {
    background : lightgrey;
    width: 40vw;
    height: 12vh;
    border-radius: 1.6vw;
    margin: 0 auto;
  }
  .menu-content {
    width: 40vw;
    height: 12vh;
    background: none;
    overflow: hidden;
  }
  .menu-content > ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  .menu-content > ul li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-content > ul li:not(:last-child) {
    margin-right: 1vw;
  }
  .menu-content img {
    width: 10vh;
    height: 10vh;
    cursor: pointer;
  }
</style>