<template>
  <div class="content">
    <span>{{$translate(this.$route.params.lang + ".start")}}</span>
  </div>
</template>

<script>
export default {
  components: {}, 
  data () { 
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .content {
    border: 1px solid red;
    width: 76vw;
    height: 81vh;
    opacity: 0;
    margin: 3vh auto 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content span {
    font-weight: bold;
    font-size: 50px;
  }
</style>