<template><!--Avoid Mouse-->
  <div class="cont-disp">
    <div style="border: 1px solid red; height:50%; display: flex; align-items: center; justify-content: center;">
      <h1>기술 스택</h1>
    </div>
    <div style="border: 1px solid blue; height:50%;">
      <img :src="vueimg" style="width:10vh; height:10vh;">
      <img :src="pythonimg" style="width:10vh; height:10vh;">
      <img :src="javaimg" style="width:12vh; height:12vh;">
      <img :src="html5img" style="width:12vh; height:11vh;">
      <img :src="css3img" style="width:9vh; height:11vh;">
      <img :src="jsimg" style="width:9vh; height:11vh;">
      <img :src="jqueryimg" style="width:11vh; height:11vh;">
      <img :src="mysqlimg" style="width:11vh; height:11vh;">
      <img :src="springimg" style="width:10h; height:10vh;">
      <img :src="bootstrapimg" style="width:11vh; height:10vh;">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      vueimg: require('@/assets/tech/vue-img.png'),
      pythonimg: require('@/assets/tech/python-img.png'),
      javaimg: require('@/assets/tech/java-img.png'),
      html5img: require('@/assets/tech/html5-img.png'),
      css3img: require('@/assets/tech/css3-img.png'),
      jsimg: require('@/assets/tech/js-img.png'),
      jqueryimg: require('@/assets/tech/jquery-img.png'),
      mysqlimg: require('@/assets/tech/mysql-img.png'),
      springimg: require('@/assets/tech/spring-img.png'),
      bootstrapimg: require('@/assets/tech/bootstrap-img.png'),
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
    border: 1px solid blue;
  }
</style>