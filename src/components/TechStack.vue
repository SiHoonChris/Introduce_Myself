<template>
  <div class="cont-disp" @mousemove="mouseTracker">
    <span>기술 스택</span>
    <img :src="vueimg">
    <img :src="pythonimg">
    <img :src="javaimg">
    <img :src="html5img">
    <img :src="css3img">
    <img :src="jsimg">
    <img :src="jqueryimg">
    <img :src="mysqlimg">
    <img :src="springimg">
    <img :src="bootstrapimg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      vueimg: require('@/assets/tech/vue-img.png'),
      pythonimg: require('@/assets/tech/python-img.png'),
      javaimg: require('@/assets/tech/java-img.png'),
      html5img: require('@/assets/tech/html5-img.png'),
      css3img: require('@/assets/tech/css3-img.png'),
      jsimg: require('@/assets/tech/js-img.png'),
      jqueryimg: require('@/assets/tech/jquery-img.png'),
      mysqlimg: require('@/assets/tech/mysql-img.png'),
      springimg: require('@/assets/tech/spring-img.png'),
      bootstrapimg: require('@/assets/tech/bootstrap-img.png'),
    }
  },
  mounted(){
    this.randomLoc()
  },
  methods:{
    mouseTracker(evt){
      console.log(evt.clientX + " , " + evt.clientY)
    },
    randomLoc(){
      const skills = document.querySelectorAll(".cont-disp img")
      for(const skill of skills){
        let h = Math.random()*70 // h: 3vh~84vh??  
        let w = Math.random()*70 // w: 12vw ~ 82vw??
        skill.style.top=h+"vh"
        skill.style.left=w+"vw"
      }
    }
  }
}
</script>

<style scoped>
  .cont-disp {
    width: 76vw;
    height: 81vh;
    border: 1px solid red;
    position: relative;
  }
  .cont-disp span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    z-index: 0;
  }
  img {
    display:block;
    width: 12vh;
    height: 12vh;
    position: absolute;
    z-index: 1;
  }
</style>