<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-cover">
        <img :src="home">
        <img :src="login">
      </div>
      <div class="project-spec">
        <span>첫 번째 팀 프로젝트,</span>
        <span>코드그린.</span>
        <span>식품 쇼핑몰 제작</span>
        <div>
          <button>안내 자료(PDF) 다운로드</button>
          <span><a href="https://drive.google.com/file/d/1btKj_HO3NPZwv54J7_pmTwdggicE1MnC/view?usp=sharing">더 알아보기</a></span>
        </div>
      </div>
      <div class="project-preview">
        <div class="image-container">
          <div><img :src="home"></div>
          <div><img :src="login"></div>
          <div><img :src="prod"></div>
        </div>
      </div>
    </div>
    <div class="btns">
      <svg @click="move(0)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="darkgrey" class="bi bi-circle-fill" viewBox="0 0 16 16">
        <circle cx="8" cy="8" r="8"/>
      </svg>&nbsp;
      <svg @click="move(-50)" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="lightgrey" class="bi bi-circle-fill" viewBox="0 0 16 16">
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
    width: 1168px;
    height: 578px;
    overflow: hidden;
    position: relative;
    opacity: 0;
  }
  .project-container {
    width: 200%;
    height: 100%;
    z-index: 0;
    display: flex;
    position: absolute
  }
  .project-cover {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .project-cover img {
    display: block;
    height: 46%;
    margin: 1vh auto;
  }
  .project-spec {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width: 25%;
    height: 100%;
  }
  .project-spec span:nth-child(1) {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .project-spec span:nth-child(2) {
    font-size: 70px;
    font-weight: bold;
    text-align: center;
  }
  .project-spec span:nth-child(3) {
    font-size:20px;
    font-weight:bold;
    color:grey;
    text-align:center;
  }
  .project-spec div {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .project-spec div button {
    width: 190px;
    height: 30px;
    border: none;
    border-radius: 26px;
    background: blue;
    color: white;
    font-size: 14px;
    font-weight:bold;
  }
  .project-spec div span {
    font-size: 18px !important;
  }
  .project-spec div span a {
    color:blue;
    font-size: 18px;
  }
  .project-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .image-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40vh;
  }
  .image-container div {
    width: 24vw;
    height: 40vh;
  }
  .image-container div img {
    width: 100%;
    height: 100%;
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
  .btns svg {
    cursor: pointer;
  }
</style>