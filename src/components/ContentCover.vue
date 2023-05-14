<template>
  <div class="cont-disp">
    <div class="profile-img">
      <img :src="sihoonchris">
    </div>
    <div class="profile-exp">
      <h1>{{$translate(this.$route.params.lang + ".cc_h1")}}</h1>
      <span>{{$translate(this.$route.params.lang + ".cc_span")}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() { 
    return {
      sihoonchris: require('@/assets/images/sihoonchris0.jpg')
    }
  }
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
  .profile-img {
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: center;
  }
  .profile-img img {
    display: block;
    width: 100%;
  }
  .profile-exp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 100%;
  }
  .profile-exp h1 {
    padding-left: 2.85vmin;
    font-size: 11vmin;
    font-weight: bold;
    margin: 0;
  } 
  .profile-exp span {
    padding-left: 3vmin;
    font-size: 2.88vmin;
    font-weight: bold;
    color: grey;
  }
</style>