<template>
  <div class="cont-disp">
    <div class="property-container">
      <div class="info-topic">
        <span>{{$translate(this.$route.params.lang + ".im_teamplay")}}</span>
      </div>
      <div class="info-detail">
        <div class="basic-info">
          <div class="images">
            <img :src="SiHoonChris">
          </div>
          <ul class="infos">
            <li>
              <div>{{$translate(this.$route.params.lang + ".im_name1")}}</div>
              <div>{{$translate(this.$route.params.lang + ".im_name2")}}</div>
            </li>
            <li>
              <div>{{$translate(this.$route.params.lang + ".im_address1")}}</div>
              <div>{{$translate(this.$route.params.lang + ".im_address2")}}</div>
            </li>
            <li>
              <div>{{$translate(this.$route.params.lang + ".im_birth1")}}</div>
              <div>{{$translate(this.$route.params.lang + ".im_birth2")}}{{age}}{{$translate(this.$route.params.lang + ".im_birth2_sub")}}</div>
            </li>
            <li>
              <div>{{$translate(this.$route.params.lang + ".im_email1")}}</div>
              <div>chrisleegpock@gmail.com</div>
            </li>
            <li>
              <div>{{$translate(this.$route.params.lang + ".im_education1")}}</div>
              <div>{{$translate(this.$route.params.lang + ".im_education2")}}</div>
            </li>
            <li>
              <button class="github">
                <span @click="newTab('https://github.com/SiHoonChris')">
                  {{$translate(this.$route.params.lang + ".im_github1")}}
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
          exp: '신속정확한 보고와 명확한 지시. 장교로 군복무를 했던 경험은 의사소통 능력을 향상시켰습니다.'
        },
        { 
          src: require("@/assets/properties/battery.png"), 
          def: '강한 체력',
          pic: require("@/assets/images/sihoonchris5.jpg"),
          exp: '어려움 앞에서 포기하지 않고 끊임없이 도전할 수 있는 건 강한 체력 덕분이죠.'
        },
        { 
          src: require("@/assets/properties/adaptation.png"), 
          def: '빠른 적응',
          pic: require("@/assets/images/sihoonchris3.jpg"),
          exp: '모르는 것을 숨기지 않고 물어보는 용기. 새로움을 적극적으로 받아들이는 수용성.'
        },
        { 
          src: require("@/assets/properties/globe.png"), 
          def: '영어',
          pic: require("@/assets/images/sihoonchris4.jpg"),
          exp: '인터넷 상의 정보들 중 약 56%가 영어로 작성된 것을 알고 계신가요? 이제 영어는 필수입니다.'
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
    padding-top: 16.6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .images {
    width: 286px;
    height: 368px;
    margin: 0 auto;
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
    display: flex;
  }
  .infos li:not(:last-child) div {
    font-size: 16px;
    color: grey;
  }
  .infos li:not(:last-child) div:first-child {
    width: 80px;
  }
  .infos li:not(:last-child) div:last-child {
    width: 206px;
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
    text-align: center;
    padding: 5%;
  }
</style>
