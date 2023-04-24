<template><!-- 팀 프로젝트 1 -->
  <div class="cont-disp">
    <div class="about-project" @click="move">
      <h1 style="margin:0;">팀 프로젝트 1 - 코드그린 존나 고생 했던 플젝</h1>
    </div>
    <div class="btns">
      <svg @click="move(0)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>&nbsp;
      <svg @click="move(-50)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    move(range){
      const disp = document.querySelector(".about-project")
      disp.style.transform="translateX("+range+"%)"
      disp.style.transition="0.6s linear"
    }
  }
}
</script>

<style scoped>
  .cont-disp {
    width: 76vw;
    height: 81vh;
    border: 1px solid red;
    overflow: hidden;
    position: relative
  }
  .about-project {
    width: 200%;
    height: 100%;
    background: lightgrey;
    z-index: 0;
    position: absolute
  }
  .btns {
    z-index: 1;
    top:95%;
    width: 100%;
    height: 5%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>