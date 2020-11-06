<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <router-view></router-view>
    <myfooter></myfooter>
    </div>
</template>

<script>
import navbar from '@/components/navbar'
import myfooter from '@/components/footer'
export default {
  components:{
    navbar,
    myfooter,
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
#app{
  background: linear-gradient(to bottom gray white);
}

</style>
