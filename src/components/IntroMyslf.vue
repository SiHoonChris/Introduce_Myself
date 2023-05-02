<template>
  <div class="cont-disp">
    <div class="property-container">
      <div class="info-topic">
        <span>팀플레이에 최적화.</span>
      </div>
      <div class="info-detail">
        <div class="basic-info">
          <div class="images">
            <img :src="SiHoonChris">
          </div>
          <ul class="infos">
            <li>
              <span>이름</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>이시훈</span>
            </li>
            <li>
              <span>주소지</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>서울특별시 강북구</span>
            </li>
            <li>
              <span>생년월일</span>&nbsp;
              <span>1997년 4월 26일 (만 {{age}}세)</span>
            </li>
            <li>
              <span>이메일</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>chrisleegpock@gmail.com</span>
            </li>
            <li>
              <span>학력</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>상명대학교(경제금융학부)</span>
            </li>
            <li>
              <button class="github">
                <span @click="newTab('https://github.com/SiHoonChris')">
                  깃허브로 이동하기
                </span>
              </button>
            </li>
          </ul>
        </div>
      <div class="properties">
        <div class="strength">
          <ul>
            <li class="flip-card" v-for="(property, i) in strength" :key='i' 
            @mouseover="changeImg(property.pic)" @mouseout="changeImg(SiHoonChris)">
              <div class="card-inner">
                <div class="flip-front">
                  <div><img :src="property.src"></div>
                  <span>{{property.def}}</span>
                </div>
                <div class="flip-back">
                  <span>{{property.exp}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      SiHoonChris: require("@/assets/images/sihoonchris1.jpg"),
      strength: [
        { 
          src: require("@/assets/properties/communication.png"),
          def: '명확한 의사소통',
          pic: require("@/assets/images/sihoonchris2.jpg"),
          exp: '군대는 소통이 생명'
        },
        { 
          src: require("@/assets/properties/battery.png"), 
          def: '강한 체력',
          pic: require("@/assets/images/sihoonchris5.jpg"),
          exp: '체력 없는 정신력은 허상'
        },
        { 
          src: require("@/assets/properties/adaptation.png"), 
          def: '빠른 적응',
          pic: require("@/assets/images/sihoonchris3.jpg"),
          exp: '어디든, 누구든'
        },
        { 
          src: require("@/assets/properties/globe.png"), 
          def: '영어',
          pic: require("@/assets/images/sihoonchris4.jpg"),
          exp: '웹 상의 정보 중 56%가 영어로 작성됨'
        }
      ],
      age: 0,
      appear: null
    }
  },
  created(){
    const today = new Date()
    const birth = new Date(1997, 4, 26)

    this.age = today.getFullYear() - birth.getFullYear();
    const m = (today.getMonth() + 1) - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {this.age--}
  },
  mounted(){
    this.appear = setTimeout(()=>{
      const title = document.querySelector(".property-container")
      title.style.transform="translateY(-50%)"
      title.style.transition = "1.0s ease-out"
    }, 1000)
  },
  beforeUnmount(){
    clearTimeout(this.appear)
  },
  methods:{
    newTab(url){open(url)},
    changeImg(img){document.querySelector('.images img').src=img}
  }
}
</script>

<style scoped>
  .cont-disp {
    width: 1168px;
    height: 578px;
    display: flex;
    overflow: hidden;
    opacity: 0;
  }
  .property-container {
    width: 100%;
    height: 200%;
  }
  .info-topic {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-topic span {
    font-weight: bold;
    font-size: 68px;
  }
  .info-detail {
    display: flex;
    width: 100%;
    height: 50%;
  }
  li {
    list-style-type: none;
  }
  .basic-info {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .images {
    width: 286px;
    height: 368px;
    margin: auto;
  }
  .images img {
    width: 100%;
    height: 100%;
  }
  .infos {
    width: 286px;
    padding: 0;
    margin: auto;
  }
  .infos li {
    margin: 2px 0;
  }
  .infos li:not(:last-child) span {
    font-size: 16px;
    color: grey;
  }
  .github {
    background: none;
    border: none;
    padding: 0;
  }
  .github span {
    color: blue;
    font-size: 16px;
  }
  .github span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .github:after {
    content: " >";
    font-size: 16px;
    color: blue;
  }
  .properties {
    width: 70%;
    height: 100%;
  }
  .strength {
    width: 100%;
    height: 100%;
  }
  .strength ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-top: 16px;
    padding: 0;
    justify-content: left;
  }
  .flip-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    perspective: 1000px;
  }
  .flip-card span {
    font-size: 24px;
  }
  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-card:hover .card-inner {
    transform: rotateY(180deg);
  }
  .flip-front, .flip-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .flip-front {
    color: black;
  }
  .flip-front div {
    width: 60px;
    height: 60px;
  }
  .flip-front div img {
    width: 100%;
    height: 100%;
  }
  .flip-back {
    background: #f2f2f2;
    color: black;
    transform: rotateY(180deg);
  }
  .flip-back span {
    font-size: 20px;
  }
</style>
