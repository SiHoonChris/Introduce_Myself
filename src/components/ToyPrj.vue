<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-spec">
        <span>{{$translate(this.$route.params.lang + ".tp_knowing")}}</span>
        <span>{{$translate(this.$route.params.lang + ".tp_apply")}}</span>
        <span>{{$translate(this.$route.params.lang + ".tp_check")}}</span>
        <div>
          <button>
            <span @click="newTab('https://drive.google.com/file/d/1-6I5erTevVCM-WdDDc_9Y42yfUw6Fv-r/view?usp=sharing')">
              {{$translate(this.$route.params.lang + ".download")}}
            </span>
          </button>
          <button>
            <span @click="move(-50)">{{$translate(this.$route.params.lang + ".learnMore")}}</span>
          </button>
        </div>
      </div>
      <div class="project-python">
        <div class="prj-cont" v-for="(info, i) in pythonPrj" :key="i">
          <img class="prj-cont-img" :src="info.src" :alt="info.alt">
          <div class="prj-cont-txt">
            <p>{{info.alt}}</p>
            <p>{{info.dur}}</p>
            <p>{{info.lan}}</p>
          </div>
        </div>
      </div>
      <div class="project-java">
        <div class="sep">
          <div class="prj-cont" v-for="(info, i) in javaPrj1" :key="i">
            <img class="prj-cont-img" :src="info.src" :alt="info.alt">
            <div class="prj-cont-txt">
              <p>{{info.alt}}</p>
              <p>{{info.dur}}</p>
              <p>{{info.lan}}</p>
            </div>
          </div>
        </div>
        <div class="sep">
          <div class="prj-cont">
            <img class="prj-cont-img" :src="javaPrj2.src" :alt="javaPrj2.alt">
            <div class="prj-cont-txt">
              <p>{{javaPrj2.alt}}</p>
              <p>{{javaPrj2.dur}}</p>
              <p>{{javaPrj2.lan}}</p>
            </div>
          </div>
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
      pythonPrj:[
        { 
          src: require('@/assets/toy-prj/tpReportDownloader.png'),
          alt: '재무제표 스크래퍼', 
          dur: '2022.07.16 ~ 2022.07.25',
          lan: 'Python (Selenium, BeautifulSoup4)'
        },
        {
          src: require('@/assets/toy-prj/tpChart.png'),
          alt: '주식 보조지표',
          dur: '2022.08.28 ~ 2022.10.10',
          lan: 'Python (Pandas, Matplotlib)'
        },  
      ],
      javaPrj1: [
        { 
          src: require('@/assets/toy-prj/tpBlackJack.png'),
          alt: '블랙잭',
          dur: '2022.10.19 ~ 2022.10.27',  
          lan: 'Java'
        },
        { 
          src: require('@/assets/toy-prj/tpPortfolioAuto.gif'),
          alt: '투자 포트폴리오 구성 자동화',
          dur: '2022.12.16 ~ 2023.01.29',
          lan: 'Java, SQL, JSP, CSS, JavaScript'
        }
      ],
      javaPrj2: { 
        src: require('@/assets/toy-prj/tpMineSweeper.gif'),
        alt: '지뢰찾기',
        dur: '2022.10.28 ~ 2022.11.13',
        lan: 'Java (AWT, Swing)'
      },
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
  .sep {
    width:50%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .sep:last-child {
    justify-content: center;
  }
  .prj-cont {
    position: relative;
    width: 472px;
    height: 264px;
    margin: 7.136px auto;
  }
  .sep:last-child .prj-cont {
    width: 300px;
    height: 360px;
    margin: 7.136px auto;
  }
  .prj-cont-img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .prj-cont-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .prj-cont-txt p:nth-child(1) {
    margin: 0;
    font-weight: bold;
    font-size: 28px;
  }
  .prj-cont-txt p:nth-child(2) {
    margin: 1px auto;
    font-weight: bold;
    font-size: 15px;
  }
  .prj-cont-txt p:nth-child(3) {
    font-weight: bold;
  }
  img:hover {
    opacity: 0.25;
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
