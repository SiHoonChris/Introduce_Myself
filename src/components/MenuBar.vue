<template>
  <div class="menu-area" @mouseenter="activateMenu(0, 0.8, 0)" @mouseleave="activateMenu(98, 1.3, 0)">
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
    this.activateMenu(0, 1.3, 1400)
    this.activateMenu(98, 1.5, 3500)
  },
  methods: {
    activateMenu(length, speed, delay){
      const menu = document.querySelector(".menu-area")
      setTimeout(() => {
        menu.style.paddingTop=length+"px"
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
    width: 100%;
    height: 92.8px;
    padding-top: 98px;
  }
  .menu-bar {
    background : lightgrey;
    width: 40%;
    height: 85.625px;
    border-radius: 24px;
    margin: 0 auto;
  }
  .menu-content {
    width: 100%;
    height: 100%;
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
    margin-right: 15.36px;
  }
  .menu-content img {
    width: 71.35px;
    height: 71.35px;
    cursor: pointer;
  }
</style>