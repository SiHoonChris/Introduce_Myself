<template>
  <div class="cont-disp">
    <div>
      <span>{{$translate(this.$route.params.lang + ".ts_techstack")}}</span>
      <span>{{$translate(this.$route.params.lang + ".ts_development")}}</span>
    </div>
    <img v-for="(skill, i) in tech" :key="i" :src="skill.src" :alt="skill.alt" :style="skill.style">
  </div>
</template>

<script>
export default {
  data() {
    return {
      tech: [
        { src: require('@/assets/tech/html5-img.png'),     alt: 'FE-HTML5',      style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/css3-img.png'),      alt: 'FE-CSS3',       style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/js-img.png'),        alt: 'FE-JavsScript', style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/jquery-img.png'),    alt: 'FE-jQuery',     style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/vue-img.png'),       alt: 'FE-Vue3',       style: "width: 85px; height: 80px;" },
        { src: require('@/assets/tech/bootstrap-img.png'), alt: 'FE-Bootstrap',  style: "width: 85px; height: 80px;" },
        { src: require('@/assets/tech/java-img.png'),      alt: 'BE-Java',       style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/spring-img.png'),    alt: 'BE-Spring',     style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/python-img.png'),    alt: 'BE-Python',     style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/mysql-img.png'),     alt: 'BE-MySQL',      style: "width: 85px; height: 85px;" },
        { src: require('@/assets/tech/node-img.png'),      alt: 'BE-NodeJs',     style: "width: 80px; height: 85px;" }
      ]
    }
  },
  mounted() {
    this.randomLoc()
    setTimeout(() => {
      this.locSetter()
    }, 400)
    setTimeout(() => {
      const title = document.querySelector(".cont-disp div")
      title.style.left = "20%"
      title.style.transition = "2s ease-out"
    }, 400)
    setTimeout(() => {
      const title = document.querySelector(".cont-disp div span:last-child")
      title.style.opacity = 1
      title.style.transition = "1.4s ease-out"
    }, 3000)
  },
  methods: {
    randomLoc() {
      const skills = document.querySelectorAll(".cont-disp img")
      for(const skill of skills){
        skill.style.top  = Math.random()*490+"px"
        skill.style.left = Math.random()*1070+"px"
      }
    },
    locSetter() {
      const skills = document.querySelectorAll(".cont-disp img")
      let feHLoc = 460
      let beHLoc = 460
      for(const skill of skills) {
        if(skill.alt.startsWith('FE')){
          skill.style.top = "90px"
          skill.style.left = feHLoc+"px"
          skill.style.transition = "2s ease-out"
          feHLoc += Number(skill.style.width.slice(0,2))+10
        }
        else {
          skill.style.top = "400px"
          skill.style.left = beHLoc+"px"
          skill.style.transition = "2s ease-out"
          beHLoc += Number(skill.style.width.slice(0,2))+16
        }
      }
    }
  }
}
</script>

<style scoped>
  .cont-disp {
    width: 1168px;
    height: 578px;
    position: relative;
    opacity: 0;
  }
  .cont-disp div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }
  .cont-disp div span:first-child {
    display: block;
    font-size: 64px;
    font-weight: bold;
  }
  .cont-disp div span:last-child {
    display: block;
    opacity: 0;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: grey;
  }
  img {
    display: block;
    position: absolute;
    z-index: 1;
  }
</style>