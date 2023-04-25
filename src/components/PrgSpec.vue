<template>
  <div class="cont-disp">
    <ul>
      <li>About This Portfolio</li>
      <li>Author : Si-Hoon Lee</li>
      <li>Tech Stack : Mongo DB, Express.js, Vue.js(Vue3), Node.js, EC2</li>
      <li>Duration : 2023.04.20 ~ 2023.04.XX</li>
      <li>E-mail : chrisleegpock@gmail.com</li>
      <li>GitHub : https://github.com/SiHoonChris/Introduce_Myself (Private)</li>
      <li>Visitors : ? (from May 1st., 2023)</li>
    </ul>
  </div>
</template>

<style scoped>
  .cont-disp{
    width: 76vw;
    height: 81vh;
    position: relative;
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