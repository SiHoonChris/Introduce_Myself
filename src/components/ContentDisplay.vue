<template>
  <div class="content">
    <ContentCover v-if="this.content==='AM' || this.content==='default'"/>
    <IntroMyslf   v-else-if="this.content==='IM'"    />
    <TechStack    v-else-if="this.content==='TS'"    />
    <ToyPrj       v-else-if="this.content==='ToyPrj'"/>
    <TeamPrj1     v-else-if="this.content==='TPrj1'" />
    <TeamPrj2     v-else-if="this.content==='TPrj2'" />
    <PrgSpec      v-else-if="this.content==='Spec'"  />
  </div>
</template>

<script>
import ContentCover from './ContentCover.vue'
import IntroMyslf   from './IntroMyslf.vue'
import TechStack    from './TechStack.vue'
import ToyPrj       from './ToyPrj.vue'
import TeamPrj1     from './TeamPrj1.vue'
import TeamPrj2     from './TeamPrj2.vue'
import PrgSpec      from './PrgSpec.vue'
export default {
  components: {ContentCover, IntroMyslf, TechStack, ToyPrj, TeamPrj1, TeamPrj2, PrgSpec}, 
  data(){
    return {
      content:'default'
    }
  },
  mounted(){
    this.$emitter.on('sc', (word)=>{this.content=word})
  }
}
</script>

<style scoped>
  .content {
    width: 1168px;
    height: 578px;
    opacity: 0;
    margin: 21.5px auto 14.3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>