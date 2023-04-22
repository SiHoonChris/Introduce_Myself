<template>
  <div class="container">
    <div class="content">
      <h2>{{this.$route.params.lang}}</h2>
    </div>
    <MenuBar/>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
export default {
  components: { MenuBar },
  data () { 
    return {}
  },
  mounted(){
    const contentViewer = document.querySelector(".content")
    setTimeout(()=>{
      contentViewer.style.opacity="1"
      contentViewer.style.transition="opacity 1.8s"
    }, 0)
  },
  methods: {}
}
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    margin:0;
  }
  .content {
    border: 1px solid red;
    width: 80vw;
    height: 84vh;
    opacity:0;
    margin: 3vh auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
