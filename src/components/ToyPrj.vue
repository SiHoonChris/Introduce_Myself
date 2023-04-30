<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-spec">
        <span>아는 것만으로는 부족해요.</span>
        <span>직접 해봐야죠.</span>
        <span>저의 토이 프로젝트들을 확인해보세요.</span>
        <div>
          <button>
            <span @click="newTab('https://drive.google.com/file/d/1-6I5erTevVCM-WdDDc_9Y42yfUw6Fv-r/view?usp=sharing')">
              안내 자료(PDF) 다운로드
            </span>
          </button>
          <button>
            <span @click="move(-50)">더 알아보기</span>
          </button>
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
      <input type="radio" v-bind:value="0" v-model="range">
      <input type="radio" v-bind:value="-50" v-model="range">
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
  .project-spec {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
