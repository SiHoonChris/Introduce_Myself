<template><!--여기 뿐만 아니라 전반적인 멘트를 다 애플 카피라이트스럽게-->
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-spec">
        <span>아는 것만으로는 부족해요.</span>
        <span>직접 해봐야죠.</span>
        <span>저의 토이 프로젝트들을 확인해보세요.</span>
        <div>
          <button>안내 자료(PDF) 다운로드</button>
          <span><a href="https://drive.google.com/file/d/1-6I5erTevVCM-WdDDc_9Y42yfUw6Fv-r/view?usp=sharing">더 알아보기</a></span>
        </div>
      </div>
      <div class="project-python">
        <img v-for="(prg, i) in pythonPrj" :key="i" :src="prg.src" :alt="prg.alt" style="width:30vw; height:40vh;">
      </div>
      <div class="project-java">
        <img v-for="(prg, i) in javaPrj" :key="i" :src="prg.src" :alt="prg.alt" style="width:30vw; height:40vh;">
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
      pythonPrj:[
        { src:require('@/assets/toy-prj/tpReportDownloader.png'), alt:'재무제표 다운로더' },
        { src:require('@/assets/toy-prj/tpChart.png'),            alt:'주식 보조지표'    },  
      ],
      javaPrj: [
        { src:require('@/assets/toy-prj/tpBlackJack.png'),     alt:'블랙잭'                },
        { src:require('@/assets/toy-prj/tpMineSweeper.gif'),   alt:'지뢰찾기'              },
        { src:require('@/assets/toy-prj/tpPortfolioAuto.gif'), alt:'투자 포트폴리오 자동화' }
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
  .project-cover img {
    display: block;
    height: 46%;
    margin: 1vh auto;
  }
  .project-python {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    height: 100%;
  }
  .project-java {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
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
