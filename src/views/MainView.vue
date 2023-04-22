<template>
  <div class="container">
    <ContentDisplay/>
    <MenuBar/>
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar.vue'
import ContentDisplay from '../components/ContentDisplay.vue'
export default {
  components: { MenuBar, ContentDisplay },
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
    margin: 0;
  }
</style>
