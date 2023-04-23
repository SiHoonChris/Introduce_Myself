<template>
  <div class="menu-area" @mouseenter="activateMenu(0, 1.0, 0)" @mouseleave="activateMenu(13.4, 1.6, 0)">
    <div class="menu-bar">
      <div class="menu-content">
        <ul>
          <li><img :src="healthicon"   @click="showContents('AM')"></li>
          <li><img :src="memoicon"     @click="showContents('IM')"></li>
          <li><img :src="remindericon" @click="showContents('TS')"></li>
          <li><img :src="imageicon"    @click="showContents('ToyPrj')"></li>
          <li><img :src="itunesicon"   @click="showContents('TPrj1')"></li>
          <li><img :src="appstoreicon" @click="showContents('TPrj2')"></li>
          <li><img :src="settingicon"  @click="showContents('Spec')"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      healthicon:   require("@/assets/icons/health-icon.png"),
      memoicon:     require("@/assets/icons/memo-icon.png"),
      remindericon: require("@/assets/icons/reminder-icon.png"),
      imageicon:    require("@/assets/icons/image-icon.png"),
      itunesicon:   require("@/assets/icons/itunes-icon.png"),
      appstoreicon: require("@/assets/icons/appstore-icon.png"),
      settingicon:  require("@/assets/icons/setting-icon.png")
    }
  },
  mounted(){
    this.activateMenu(0, 1.4, 1600)
    this.activateMenu(13.4, 1.6, 3200)
  },
  methods: { // menu-bar 영역이 줄어도, menu-area 영역은 유지되도록 수정
    activateMenu(length, speed, delay){
      const menu = document.querySelector(".menu-bar")
      setTimeout(()=>{
        menu.style.marginTop=length+"vh"
        menu.style.transition=speed+"s ease-in-out"
      }, delay)
    },
    showContents(word){
      this.$emitter.emit('sc', word)
    }
  }
}
</script>

<style scoped>
  .menu-area {
    width: 100vw;
    height: 13vh;
  }
  .menu-bar {
    background : lightgrey;
    width: 40vw;
    height: 12vh;
    border-radius: 24px;
    margin: 16vh auto;
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