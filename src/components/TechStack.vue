<template><!-- 개선5) 무질서하게 어지럽혀져 있다가, 완전히 fade-in 끝나고 제자리에 정렬 -->
  <div class="cont-disp">
    <span>기술 스택</span><!-- 개선6) 위치 이동 후 서브 메시지 출력 : 현재도 기술 개발을 위해 노력중입니다. -->
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
    const contentViewer = document.querySelector(".cont-disp")
    setTimeout(()=>{
      contentViewer.style.opacity="1"
      contentViewer.style.transition="opacity 0.4s"
    }, 0)
    this.randomLoc()
  },
  methods:{
    randomLoc(){
      const skills = document.querySelectorAll(".cont-disp img")
      for(const skill of skills){
        skill.style.top = Math.random()*70+"vh"
        skill.style.left = Math.random()*70+"vw"
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