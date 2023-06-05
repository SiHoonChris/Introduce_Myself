<template>
  <div class="lang_selec">
    <router-link :to="{name:'Main', params:{lang: country}}" @click="setNum">{{greeting}}</router-link>
    <span>{{explain}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      greeting: '인사',
      country:  '국가',
      explain: '설명',
      langs: [
        {country:'ko', greeting:'안녕하세요', explain:'클릭하여 내용 보기'},
        {country:'en', greeting:'Hello'    , explain:'Click to watch'},
        {country:'jp', greeting:'こんにちは', explain:'クリックして見る'}
      ],
      fn_langSetter: null
    }
  },
  created(){
    this.greeting=this.langs[Number(this.num)].greeting
    this.country=this.langs[Number(this.num)].country
    this.explain=this.langs[Number(this.num)].explain
  },
  mounted(){
    this.langSetter()
  },
  beforeUnmount(){
    clearInterval(this.fn_langSetter)
  },
  methods: {
    langSetter(){
      const langSetter = document.querySelector( "div.lang_selec" )
      langSetter.style.opacity = "0"
      this.changer(langSetter)
      this.fn_langSetter = setInterval(() => {
        this.num++
        if ( this.num > this.langs.length - 1 ) this.num = 0
        this.country = this.langs[Number(this.num)].country
        this.greeting = this.langs[Number(this.num)].greeting
        this.explain = this.langs[Number(this.num)].explain
        this.changer(langSetter)
      }, 3000)
    },
    changer(langSetter){
      setTimeout(() => {
        langSetter.style.opacity = "1"
        langSetter.style.transition = "opacity 1.7s"
      }, 0)
      setTimeout(() => {
        langSetter.style.opacity = "0"
        langSetter.style.transition = "opacity 1.3s"
      }, 1700)
    },
    setNum() {
      this.$axios.post('/cnt')
      .then((res) => res.data === 0 ? console.log('ERROR') : console.log('good'))
      .catch((err) => { err.message.indexOf('Network Error') > -1 && alert('Error') })
    }
  }
}
</script>

<style>
.lang_selec {
  display:flex;
  flex-direction: column;
}
.lang_selec span {
  text-align: center;
}
a {
  font-size: 9vmin;
  font-weight: bold;
  text-decoration: none;
  color: black;
}
</style>
