<template>
  <div class="content">
    <div v-if="this.content==='default'">{{$translate(this.$route.params.lang + ".start")}}</div>
    <AboutMe    v-else-if="this.content==='AM'"    />
    <IntroMyslf v-else-if="this.content==='IM'"    />
    <TechStack  v-else-if="this.content==='TS'"    />
    <ToyPrj     v-else-if="this.content==='ToyPrj'"/>
    <TeamPrj1   v-else-if="this.content==='TPrj1'" />
    <TeamPrj2   v-else-if="this.content==='TPrj2'" />
    <PrgSpec    v-else-if="this.content==='Spec'"  />
  </div>
</template>

<script>
import AboutMe    from './AboutMe.vue'
import IntroMyslf from './IntroMyslf.vue'
import TechStack  from './TechStack.vue'
import ToyPrj     from './ToyPrj.vue'
import TeamPrj1   from './TeamPrj1.vue'
import TeamPrj2   from './TeamPrj2.vue'
import PrgSpec    from './PrgSpec.vue'
export default {
  components: {AboutMe, IntroMyslf, TechStack, ToyPrj, TeamPrj1, TeamPrj2, PrgSpec}, 
  data(){
    return {
      content:'default'
    }
  },
  mounted(){
    this.$emitter.on('sc', (word)=>{
      this.content=word
    })
  }
}
</script>

<style scoped>
  .content {
    width: 76vw;
    height: 81vh;
    opacity: 0;
    margin: 3vh auto 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content div {
    font-weight: bold;
    font-size: 50px;
  }
</style>