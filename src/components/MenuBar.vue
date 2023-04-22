<template>
  <div class="menu-area" @mouseenter="activateMenu" @mouseleave="deactivateMenu(9.8, 1.6, 200)">
    <div class="menu-bar"></div>
  </div>
</template>

<script>
export default {
  data () { 
    return {
      
    }
  },
  mounted(){
    this.deactivateMenu(9.8, 1.6, 1000)
  },
  methods: { // menu-bar 영역이 줄어도, menu-area 영역은 유지되도록 수정
    activateMenu(){
      const menu = document.querySelector(".menu-bar")
      menu.style.marginTop="0vh"
      menu.style.transition="1.0s ease-in-out"
    },
    deactivateMenu(length, speed, delay){
      const menu = document.querySelector(".menu-bar")
      setTimeout(()=>{
        menu.style.marginTop=length+"vh"
        menu.style.transition=speed+"s ease-in-out"
      }, delay)
    }
  }
}
</script>

<style scoped>
  .menu-area {
    width: 100vw;
    height: 10vh;
  }
  .menu-bar {
    background : grey;
    opacity : 0.1;
    width: 50vw;
    height: 10vh;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid black;
    margin: 0 auto;
  }
</style>