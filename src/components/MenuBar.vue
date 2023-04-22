<template>
  <div class="menu-area" @mouseenter="activateMenu(0, 1.0, 0)" @mouseleave="activateMenu(13.4, 1.6, 0)">
    <div class="menu-bar">
      <div class="menu-content">
        <ul>
          <li>
            <img :src="healthicon" @click="tester"><!-- 정보 : 생년월일, 연락처, 깃허브 등 -->
          </li>
          <li>
            <img :src="memoicon"><!-- 자기소개 : 자기 정의, 장점 등 --> 
          </li>
          <li>
            <img :src="remindericon"><!-- 기술스택 --> 
          </li>
          <li>
            <img :src="imageicon"><!-- 개인 프로젝트 -->
          </li>
          <li>
            <img :src="itunesicon"><!-- 팀 프로젝트 1 -->
          </li>
          <li>
            <img :src="appstoreicon"><!-- 팀 프로젝트 2 -->
          </li>
          <li>
            <img :src="settingicon"><!-- 포트폴리오 스펙 -->
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
      healthicon: require("@/assets/health-icon.png"),
      memoicon: require("@/assets/memo-icon.png"),
      remindericon: require("@/assets/reminder-icon.png"),
      imageicon: require("@/assets/image-icon.png"),
      itunesicon: require("@/assets/itunes-icon.png"),
      appstoreicon: require("@/assets/appstore-icon.png"),
      settingicon: require("@/assets/setting-icon.png")
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
    tester(){
      alert('asfg')
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