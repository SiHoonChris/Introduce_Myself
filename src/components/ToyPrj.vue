<template><!--여기 뿐만 아니라 전반적인 멘트를 다 애플 카피라이트스럽게-->
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-explain">
        <div>
          <span style="display:block ;border:1px solid green;">아는 것만으로는 부족하죠</span>
          <span style="display:block ;border:1px solid green;">저는 직접 활용해봅니다.</span>
          <span style="display:block ;border:1px solid green;">제가 만든 토이프로젝트들을 확인해보세요.</span>
          <button style="background: blue; border:none; border-radius: 10px; color: white;">안내 PDF 다운로드</button>
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
  .project-explain {
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-direction: column;
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
