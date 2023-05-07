<template>
  <div class="lang_selec">
    <router-link :to="{name:'Main', params:{lang: country}}" @click="setNum">{{greeting}}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      greeting: '인사',
      country:  '국가',
      langs: [
        {country:'ko', greeting:'안녕하세요'},
        {country:'en', greeting:'Hello'    },
        {country:'jp', greeting:'こんにちは'},
        {country:'cn', greeting:'테스트용'},
      ],
      fn_langSetter: null
    }
  },
  created(){
    this.greeting=this.langs[Number(this.num)].greeting
    this.country=this.langs[Number(this.num)].country
  },
  mounted(){
    this.langSetter()
  },
  beforeUnmount(){
    clearInterval(this.fn_langSetter)
  },
  methods: {
    langSetter(){
      const langSetter = document.querySelector("div.lang_selec a")
      langSetter.style.opacity = "0"
      this.changer(langSetter)
      this.fn_langSetter = setInterval(()=>{
        this.num++
        if(this.num > this.langs.length-1) this.num=0
        this.country=this.langs[Number(this.num)].country
        this.greeting=this.langs[Number(this.num)].greeting
        this.changer(langSetter)
      }, 3000)
    },
    changer(langSetter){
      setTimeout(()=>{
        langSetter.style.opacity = "1"
        langSetter.style.transition = "opacity 1.7s"
      }, 0)
      setTimeout(()=>{
        langSetter.style.opacity = "0"
        langSetter.style.transition = "opacity 1.3s"
      }, 1700)
    },
    setNum() {
      this.$axios.post('/cnt')
      .then((res) => res.data === 0 ? console.log('ERROR') : console.log('good'))
      .catch((err) => { if (err.message.indexOf('Network Error') > -1) {alert('Error')} })
    }
  }
}
</script>

<style>
.lang_selec {
  font-size: 60px;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
}
</style>
