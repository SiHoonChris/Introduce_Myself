<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-cover">
        <img :src="home">
        <img :src="login">
      </div>
      <div class="project-spec">
        <span>처음 해본 팀 프로젝트,</span>
        <span>코드그린.</span>
        <span>식품 쇼핑몰 제작</span>
        <div>
          <button>
            <span @click="newTab('https://drive.google.com/file/d/1btKj_HO3NPZwv54J7_pmTwdggicE1MnC/view?usp=sharing')">
              안내 자료(PDF) 다운로드
            </span>
          </button>
          <button>
            <span @click="move(-50)">더 알아보기</span>
          </button>
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
      <input type="radio" v-bind:value="0" v-model="range">
      <input type="radio" v-bind:value="-50" v-model="range">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home: require('@/assets/team-prj1/tp1home.png'),
      login: require('@/assets/team-prj1/tp1login.png'),
      prod: require('@/assets/team-prj1/tp1product.png'),
      range: 0
    }
  },
  watch:{
    range(){this.move(this.range)}
  },
  methods:{
    newTab(url){open(url)},
    move(range){
      this.range=range
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
    width: 472px;
    height: 265px;
    margin: 7.136px auto;
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
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
  }
  .project-spec div button:first-child {
    width: 190px;
    height: 30px;
    border: none;
    border-radius: 26px;
    background: blue;
    cursor: pointer;
  }
  .project-spec div button:first-child span {
    color:white;
    font-size: 14px;
    font-weight: bold;
  }
  .project-spec div button:last-child {
    background: none;
    border: none;
    padding: 0;
  }
  .project-spec div button:last-child span {
    color:blue;
    font-size: 18px;
  }
  .project-spec div button:last-child span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .project-spec div button:last-child::after {
    content: ' >';
    color: blue;
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
    height: 285px;
  }
  .image-container div {
    width: 368px;
    height: 285px;
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
    align-items: flex-end;
    justify-content: center;
  }
  input[type="radio"] {
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid lightgrey;
    border-radius: 50%;
    background: lightgrey;
  }
  input[type="radio"]:checked {
    border: 1px solid darkgrey;
    background: darkgrey;
  }
</style>