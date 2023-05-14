<template>
  <div class="cont-disp">
    <div class="project-container">
      <div class="project-cover">
        <img v-for="(page, i) in covers" :key="i" :src="page.src" :alt="page.alt">
      </div>
      <div class="project-spec">
        <span>{{$translate(this.$route.params.lang + ".tp1_first")}}</span>
        <span>{{$translate(this.$route.params.lang + ".tp1_project")}}</span>
        <span>{{$translate(this.$route.params.lang + ".tp1_definition")}}</span>
        <div>
          <button>
            <span @click="$open('https://drive.google.com/file/d/1btKj_HO3NPZwv54J7_pmTwdggicE1MnC/view?usp=sharing')">
              {{$translate(this.$route.params.lang + ".download")}}
            </span>
          </button>
          <button>
            <span @click="this.range = -50">{{$translate(this.$route.params.lang + ".learnMore")}}</span>
          </button>
        </div>
      </div>
      <div class="project-preview">
        <div class="img-container1">
          <ul><li v-for="(step, i) in signup" :key="i"><img :src="step.src" :alt="step.alt"></li></ul>
        </div>
        <div class="img-container2">
          <ul>
            <li><img :src="prod"></li>
            <li>
              <span>
                <span>{{$translate(this.$route.params.lang + ".tp1_explanation1")}}</span>
                <span @mouseenter="emphasis('0px 3px 4px -4px green')" @mouseleave="emphasis('none')" style="color:black;">JSP</span>
                <span>{{$translate(this.$route.params.lang + ".tp1_explanation2")}}</span>
              </span>
            </li>
          </ul>
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
  data() {
    return {
      covers: [
        { src: require('@/assets/team-prj1/tp1home.png') ,   alt: '홈페이지 입니다.'      },
        { src: require('@/assets/team-prj1/tp1login.png') ,  alt: '로그인 페이지 입니다.' },  
      ],
      signup: [
        { src: require('@/assets/team-prj1/signup1.png') ,   alt: '회원가입' },
        { src: require('@/assets/team-prj1/signup2.png') ,   alt: '약관동의' },
        { src: require('@/assets/team-prj1/signup3.png') ,   alt: '정보입력' },
        { src: require('@/assets/team-prj1/signup4.png') ,   alt: '가입완료' },
      ],
      prod: require('@/assets/team-prj1/tp1product.png'),
      range: 0
    }
  },
  watch: {
    range() { this.$move(this.range) }
  },
  methods: {
    emphasis(color) {
      const signupBlock = document.querySelectorAll('.img-container1 ul li')
      for(const i of signupBlock) {i.style.boxShadow=color}
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
    width: 66.1435vmin;
    height: 37.1357vmin;
    margin: 1vmin auto;
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
    font-size: 5.605vmin;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .project-spec span:nth-child(2) {
    font-size: 9.81vmin;
    font-weight: bold;
    text-align: center;
  }
  .project-spec span:nth-child(3) {
    font-size: 2.803vmin;
    font-weight: bold;
    color: grey;
    text-align: center;
  }
  .project-spec div {
    width: 44.86vmin;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.204vmin;
  }
  .project-spec div button:first-child {
    width: 26.626vmin;
    height: 4.204vmin;
    border: none;
    border-radius: 3.6135vmin;
    background: blue;
    cursor: pointer;
  }
  .project-spec div button:first-child span {
    color:white;
    font-size: 1.96vmin;
    font-weight: bold;
  }
  .project-spec div button:last-child {
    background: none;
    border: none;
    padding: 0;
  }
  .project-spec div button:last-child span {
    color:blue;
    font-size: 2.52vmin;
  }
  .project-spec div button:last-child span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .project-spec div button:last-child::after {
    content: ' >';
    color: blue;
    font-size: 2.52vmin;
  }
  .project-preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  .img-container1, .img-container2 {
    width: 100%;
    height: 50%;
  }
  ul {
    display: flex;
    justify-content: space-between;
    margin: 1vmin auto;
    padding: 0;
    width: 90%;
  }
  .img-container1 ul li {
    width: 33.6323vmin;
    height: 36.435vmin;
    list-style-type: none;
  }
  .img-container1 ul li img {
    width: 100%;
    height: 100%;
  } 
  .img-container2 ul li {
    width: 66.1435vmin;
    height: 37.1357vmin;
    list-style-type: none;
  }
  .img-container2 ul li img {
    width: 100%;
    height: 100%;
  }
  .img-container2 ul li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-container2 ul li:last-child span {
    color: grey;
    font-weight: bold;
    width: 70%;
    font-size: 4.765vmin;
  }
  .btns {
    z-index: 1;
    top: 95%;
    width: 100%;
    height: 5%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  input[type="radio"] {
    appearance: none;
    width: 1.7vmin;
    height: 1.7vmin;
    border: 1px solid lightgrey;
    border-radius: 50%;
    background: lightgrey;
  }
  input[type="radio"]:checked {
    border: 1px solid darkgrey;
    background: darkgrey;
  }
</style>