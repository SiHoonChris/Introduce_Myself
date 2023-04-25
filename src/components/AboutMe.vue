<template>
  <div class="cont-disp">
    <div class="profile">
      <img :src="sihoonchris">
    </div>
    <div class="brief">
      <h4>{{$translate(this.$route.params.lang + ".introduce")}}</h4>
      <ul>
        <li>
          <span>{{$translate(this.$route.params.lang + ".birthdate1")}}</span>&nbsp;
          <span>{{$translate(this.$route.params.lang + ".birthdate2")}}</span>
        </li>
        <li>
          <span>{{$translate(this.$route.params.lang + ".contact")}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>chrisleegpock@gmail.com</span>
        </li>
        <li>
          <a class="github" href="https://github.com/SiHoonChris">
            {{$translate(this.$route.params.lang + ".github")}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sihoonchris: require('@/assets/images/sihoonchris3.jpg')
    }
  },
  mounted(){
    const contentViewer = document.querySelector(".cont-disp")
    setTimeout(()=>{
      contentViewer.style.opacity="1"
      contentViewer.style.transition="opacity 0.4s"
    }, 0)
  },
  methods:{}
}
</script>

<style scoped>
  .cont-disp {
    width: 76vw;
    height: 81vh;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:0;
  }
  .profile {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
  }
  .profile img {
    display: block;
    width: 100%;
  }
  .brief {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
  }
  .brief h4 {
    padding-left: 1vw;
    margin-top: 12vh;
  }
  .cont-disp ul {
    padding-left: 1vw;
    margin-bottom: 5vh;
  }
  .cont-disp ul li {
    list-style-type: none;
    font-size: 20px;
  }
  .github:hover {
    color:blue;
  }
</style>