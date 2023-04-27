<template>
  <div class="cont-disp" style="display:flex;">
    <div class="copywrite" style="width: 30%; height: 100%; border:1px solid red;">
      <div style="width:20vw; height:40vh;">
        <img :src="SiHoonChris1" style="width:100%; height:100%;">
      </div>
      <ul>
        <li style="font-size:20px;">
          <span>{{$translate(this.$route.params.lang + ".birthdate1")}}</span>&nbsp;
          <span>{{$translate(this.$route.params.lang + ".birthdate2")}}</span>
        </li>
        <li style="font-size:20px;">
          <span>{{$translate(this.$route.params.lang + ".contact")}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>chrisleegpock@gmail.com</span>
        </li>
        <li style="font-size:20px;">
          <a class="github" href="https://github.com/SiHoonChris">
            <button>{{$translate(this.$route.params.lang + ".github")}}</button>
          </a>
        </li>
      </ul>
    </div>
    <div class="props" style="width: 70%; height: 100%; border:1px solid green;"><!--마우스 올리면 카드처럼 뒤집어지면서 세부내용-->
      <div class="whoIAM" style="border:1px solid orange; height: 10%;">
        <span>차별화된 기능들</span>
      </div>
      <div class="GoodAt" style="border:1px solid blue; height: 90%;">
        <ul style="display:flex; flex-wrap: wrap; width: 100%; height: 100%; margin:0; padding:0; justify-content:left">
          <li style="display:block; width: 50%; height: 50%; border:1px solid black;">의사소통</li><!-- 명확한 의사소통 능력은 팀의 정확히 니즈를 파악, 효율적 업무내용 공유-->
          <li style="display:block; width: 50%; height: 50%; border:1px solid black;">적응력</li><!--빠른 적응력 : 어느 팀이든, 어떤 환경이든 빠르게 적응합니다.-->
          <li style="display:block; width: 50%; height: 50%; border:1px solid black;">영어</li><!--언어별 웹사이트 정보량 영어가 56%, "Stackover Flow", "W3Schools", "MDN"에서 정보를 얻을 수 있다-->
          <li style="display:block; width: 50%; height: 50%; border:1px solid black;">체력</li><!--체력이 없다면 정신력은 듣기 좋은 구호일 뿐이죠. 체력과 이를 통해 구현된 승부욕-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      SiHoonChris1: require("@/assets/images/sihoonchris1.jpg")
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .cont-disp {
    width: 76vw;
    height: 81vh;
    opacity: 0;
  }
  li {
    list-style-type: none;
  }
</style>