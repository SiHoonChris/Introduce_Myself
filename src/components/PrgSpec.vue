<template>
  <div class="cont-disp">
    <ul>
      <li>About This Portfolio</li>
      <li>Author : Si-Hoon Lee</li>
      <li>Tech Stack : MySQL, Express.js, Vue.js(Vue3), Node.js, EC2</li> <!--MongoDB로 바꿀 예정-->
      <li>Duration : 2023.04.20 ~ 2023.05.XX</li>
      <li>E-mail : chrisleegpock@gmail.com</li>
      <li>GitHub : https://github.com/SiHoonChris/Introduce_Myself</li>
      <li>Visitors : {{num}} (since {{since}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      num: '0',
      since: 'date'
    }
  },
  created(){ this.getNum() },
  methods: {
    getNum() {
      this.$axios.get('/num')
      .then((res) => {
          this.num = res.data['num']
          this.since = res.data['since']
        }
      )
      .catch((err) => { if (err.message.indexOf('Network Error') > -1) {alert('Error')} })
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
  ul{
    position: absolute;
    width: 60%;
    margin: 0;
    left: 40%;
    top: 50%;
  }
  li {
    list-style-type: none;
    font-size: 60px;
    font-weight: bold;
  }
  li:not(:first-child) {
    font-size: 20px;
  }
</style>