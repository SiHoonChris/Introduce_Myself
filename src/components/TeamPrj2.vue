<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-cover">
        <!-- 개선2) 1) 클릭하면 새탭에서 이미지 보이게 하기, 마우스 커서 - 포인터, 또는 2) 무신사 페이지로 이동 - 비교할 수 있도록 -->
        <img v-for="(page, i) in covers" :key="i" :src="page.src" :alt="page.alt">
      </div>
      <div class="project-spec">
        <span>두 번째 팀 프로젝트,</span>
        <span>입고살자.</span>
        <span>의류 쇼핑몰 제작</span>
        <div>
          <button>
            <span @click="newTab('https://drive.google.com/file/d/1A7Bt8dyhOv3ehiml0F_t9fM6VY5doTDS/view?usp=sharing')">
              안내 자료(PDF) 다운로드
            </span>
          </button>
          <button>
            <span @click="move(-50)">더 알아보기</span>
          </button>
        </div>
      </div>
      <div class="project-preview">
        <ul class="preview"><!-- 개선3) 사진에 마우스 hover하면 회색 바탕에 덮어쓰고 설명 보이기 -->
          <li v-for="(page, i) in previews" :key="i"><div><img :src="page.src" :alt="page.alt"></div></li>
        </ul>
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
      covers:[
        {src:require('@/assets/team-prj2/tp2home.png'),     alt:'홈페이지 입니다.'       },
        {src:require('@/assets/team-prj2/tp2login.png'),    alt:'로그인 페이지 입니다.'  },  
      ],
      previews: [
        {src:require('@/assets/team-prj2/tp2products.png'), alt:'상품페이지 입니다.'     },
        {src:require('@/assets/team-prj2/tp2detail.png'),   alt:'상품 상세 페이지 입니다.'},
        {src:require('@/assets/team-prj2/tp2cart.png'),     alt:'장바구니 페이지 입니다.' },
        {src:require('@/assets/team-prj2/tp2payment.png'),  alt:'장바구니 페이지 입니다.' }
      ], 
      range: 0
    }
  },
  watch:{
    range(){this.move(this.range)}
  },
  methods:{
    newTab(url){
      window.open(url)
    },
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
    position: absolute;
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
    font-size: 20px;
    font-weight: bold;
    color: grey;
    text-align: center;
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
    width: 50%;
    height: 100%;
  }
  ul.preview {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  ul.preview li {
    display:flex;
    justify-content: center;
    align-items: flex-start;
    list-style-type: none;
    width: 50%;
    height: 50%;
    margin: 0;
  }
  ul.preview li div {
    width:90%;
    height:90%;
  }
  ul.preview li div img {
    height: 100%;
    width: 100%;
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