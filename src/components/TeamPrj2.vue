<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-cover">
        <!-- 개선2) 1) 클릭하면 새탭에서 이미지 보이게 하기, 마우스 커서 - 포인터, 또는 2) 무신사 페이지로 이동 - 비교할 수 있도록 -->
        <img v-for="(page, i) in covers" :key="i" :src="page.src" :alt="page.alt">
      </div>
      <div class="project-spec">
        <ul class="inclusive">
          <li>입고살자</li> <!-- 개선7) 입고살자 내어쓰기 조금만 -->
          <li>프로젝트 설명 : ‘무신사’를 레퍼런스로 한 의류 쇼핑몰 제작</li>
          <li>작업 기간 : 2023.03.22~2023.04.18</li>
          <li>작업 인원 : 7명</li>
          <li>언어 & 개발 환경
            <ul>
              <li>Front : HTML5, CSS3, JavaScript (ES6), Bootstrap5, jQuery, Vue.js (Vue3)</li>
              <li>Back : Java, JSP , Spring (Legacy), SQL, MyBatis</li>
              <li>DB & Server : MySQL 8.0 (AWS), Apache Tomcat 9.0 , Node.js</li>
              <li>Tool : STS, VS Code</li>
              <li>OS : Windows 10, 11</li>
            </ul>
          </li>
          <li>나의 역할
            <ul>
              <li>1. 소비자 페이지(SPA) 제작(mixin 활용)</li>
              <li>2. 로그인 기능 구현</li>
              <li>3. 카카오 API를 활용한 로그인 기능 구현</li>
              <li>4. 카테고리별 상품 데이터 연결/출력</li>
              <li>5. 상품 검색기능 구현</li>
              <li>6. 장바구니 등록/조회 기능 구현</li>
              <li>7. 상품 구매 후기 CRUD 구현</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="project-preview">
        <ul class="preview"><!-- 개선3) 사진에 마우스 hover하면 회색 바탕에 덮어쓰고 설명 보이기 -->
          <li v-for="(page, i) in previews" :key="i"><div><img :src="page.src" :alt="page.alt"></div></li>
        </ul>
      </div>
    </div>
    <div class="btns"> <!-- click 하면 darkgrey, radio button으로 바꾼다??-->
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
      covers:[
        {src:require('@/assets/team-prj2/tp2home.png'),     alt:'홈페이지 입니다.'       },
        {src:require('@/assets/team-prj2/tp2login.png'),    alt:'로그인 페이지 입니다.'  },  
      ],
      previews: [
        {src:require('@/assets/team-prj2/tp2products.png'), alt:'상품페이지 입니다.'     },
        {src:require('@/assets/team-prj2/tp2detail.png'),   alt:'상품 상세 페이지 입니다.'},
        {src:require('@/assets/team-prj2/tp2cart.png'),     alt:'장바구니 페이지 입니다.' },
        {src:require('@/assets/team-prj2/tp2payment.png'),  alt:'장바구니 페이지 입니다.' }
      ] 
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
    margin: 1vh auto;
  }
  .project-spec {
    width: 25%;
    height: 100%;
  }
  ul {
    padding-left: 1vw;
  }
  ul.inclusive{
    margin-top: 1%;
  }
  ul.inclusive > li {
    padding-bottom: 1%;
  }
  ul.inclusive > li:first-child {
    font-size: 60px;
  }
  li {
    font-size: 18px;
    list-style-type: none;
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
    align-items: start;
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
    align-items: end;
    justify-content: center;
  }
  .btns svg {
    cursor: pointer;
  }
</style>