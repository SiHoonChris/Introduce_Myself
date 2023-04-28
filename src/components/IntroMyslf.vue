<template>
  <div class="cont-disp">
    <div class="property-container">
      <div class="info-topic">
        <span>팀플레이에 최적화.</span>
      </div>
      <div class="info-detail">
        <div class="basic-info">
          <div class="images">
            <img :src="SiHoonChris1">
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
              <span>{{$translate(this.$route.params.lang + ".birthdate1")}}</span>&nbsp;
              <span>{{$translate(this.$route.params.lang + ".birthdate2")}}</span>
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
              <a class="github" href="https://github.com/SiHoonChris">
                <span>깃허브로 이동하기</span>
              </a>
            </li>
          </ul>
        </div>
      <div class="properties"><!--마우스 올리면 카드처럼 뒤집어지면서 세부내용-->
        <div class="strength">
          <ul>
            <li @mouseover="changeImg(SiHoonChris2)" @mouseout="changeImg(SiHoonChris1)">
              <div class="front">
                <div><img :src="communication"></div>
                <span>명확한 의사소통</span>
              </div>
              <div class="back" style="display:none;">
                <span>팀의 정확히 니즈를 파악, 효율적으로 작업 내용을 공유</span>
              </div>
            </li>
            <li @mouseover="changeImg(SiHoonChris3)" @mouseout="changeImg(SiHoonChris1)">
              <div class="front">
                <div><img :src="adaptation"></div>
                <span>빠른 적응</span>
              </div>
              <div class="back" style="display:none;">
                <span>어떤 팀에서든 빠르게 적응</span>
              </div>
            </li>
            <li @mouseover="changeImg(SiHoonChris4)" @mouseout="changeImg(SiHoonChris1)">
              <div class="front">
                <div><img :src="globe"></div>
                <span>영어</span>
              </div>
              <div class="back" style="display:none;">
                <span>언어별 웹사이트 정보량 영어가 56%</span>
              </div>
            </li>
            <li @mouseover="changeImg(SiHoonChris5)" @mouseout="changeImg(SiHoonChris1)">
              <div class="front">
                <div><img :src="battery"></div>
                <span>강한 체력</span>
              </div>
              <div class="back" style="display:none;">
                <span>체력이 없다면 정신력은 듣기 좋은 구호일 뿐이죠. 체력과 이를 통해 구현된 승부욕</span>
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
      SiHoonChris1: require("@/assets/images/sihoonchris1.jpg"),
      SiHoonChris2: require("@/assets/images/sihoonchris2.jpg"),
      SiHoonChris3: require("@/assets/images/sihoonchris3.jpg"),
      SiHoonChris4: require("@/assets/images/sihoonchris4.jpg"),
      SiHoonChris5: require("@/assets/images/sihoonchris5.jpg"),
      battery: require("@/assets/properties/battery.png"),
      globe: require("@/assets/properties/globe.png"),
      communication: require("@/assets/properties/communication.png"),
      adaptation: require("@/assets/properties/adaptation.png")
    }
  },
  mounted(){
    setTimeout(()=>{
      const title = document.querySelector(".property-container")
      title.style.transform="translateY(-50%)"
      title.style.transition = "1.0s ease-out"
    }, 1200)
  },
  methods:{
    changeImg(img){
      document.querySelector('.images img').src=img
    }
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
    color: blue;
  }
  .github:hover {
    text-decoration: underline;
    transform: rotateY(0.5turn);
  }
  .github span:after {
    content: ">";
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
    margin:0;
    padding:0;
    justify-content:left
  }
  .strength ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
  }
  .strength ul li:hover{
    background: lightgrey;
  }
  .front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .front div {
    width: 60px;
    height: 60px;
  }
  .front div img {
    width: 100%;
    height: 100%;
  }
  .strength ul li span {
    font-size: 20px;
  }



  
</style>
