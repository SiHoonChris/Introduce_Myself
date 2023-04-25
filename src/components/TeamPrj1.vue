<template>
  <div class="cont-disp">
    <div class="project-container" @click="move">
      <div class="project-cover" style="width:25%; height: 100%; background:red;"></div>
      <div class="project-spec" style="width:25%; height: 100%; background:green;">
        <ul>
          <li>프로젝트명 : 코드그린</li>
          <li>설명 : 유기농 식품 쇼핑몰 제작</li>
          <li>작업 기간 : 2023.02.10~2023.03.20</li>
          <li>작업 인원 : 7명</li>
          <li>언어 & 개발 환경
            <ul>
              <li>Front : HTML5 , CSS3 , JavaScript (ES6), Bootstrap5 , jQuery , Vue.js (Vue3)</li>
              <li>Back : Java , SQL, JSP , Spring (Legacy) , MyBatis</li>
              <li>DB & Server : MySQL 8.0 (AWS), Apache Tomcat 9.0 , Node.js</li>
              <li>Tool : STS, VS Code</li>
              <li>OS : Windows, Mac</li>
            </ul>
          </li>
          <li>나의 역할
            <ul>
              <li>1. Vue3를 활용한 SPA 제작</li>
              <li>2. 로그인/회원가입 기능 구현</li>
              <li>3. 상품 데이터 추출/전시</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="project-preview" style="width:50%; height: 100%; background:blue;">
        <h2>프로젝트 미리보기</h2>
        <img :src="home" style="width:10vw; heigth: 10vh;">
        <img :src="login" style="width:10vw; heigth: 10vh;">
        <img :src="prod" style="width:10vw; heigth: 10vh;">
      </div>
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
      home: require('@/assets/team-prj1/tp1home.png'),
      login: require('@/assets/team-prj1/tp1login.png'),
      prod: require('@/assets/team-prj1/tp1product.png')
    }
  },
  methods:{
    move(range){
      const disp = document.querySelector(".project-container")
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
  .project-container {
    width: 200%;
    height: 100%;
    z-index: 0;
    display: flex;
    position: absolute
  }
  .btns {
    z-index: 1;
    top:95%;
    width: 100%;
    height: 5%;
    position: absolute;
    display: flex;
    align-items: end;
    justify-content: center;
  }
  li {
    font-size: 10px;
  }
  .btns svg {
    cursor: pointer;
  }
</style>