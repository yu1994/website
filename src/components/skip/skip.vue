<template>
  <div class="wrap" v-if="toggle">
    <ul>
      <li><i></i></li>
      <li><i></i></li>
      <li><i @click="$emit('skiptop')"></i></li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import {bus} from '../../common/js/bus'
  export default {
    data(){
      return {
        toggle:true
      }
    },
    mounted(){
      var that = this;
      var w = document.documentElement.clientWidth;
      if (w < 1080){
        that.toggle = false;
      }
      bus.$on('skip-index',function(index){
        that.toggle = index;
      })
    }
  }
</script>
<style scoped lang="stylus">
  .wrap
    position absolute
    right 20PX
    top 50%
    transform translateY(-50%)
    z-index 999

    ul
      li
        &:nth-child(2)
          margin 10px 0
        i
          display block
          height 50px
          width 50px
          cursor pointer
          background-image url("./yc_1_xx.png")
          background-repeat no-repeat
        &:nth-child(2)
          i
            background-image url("./yc_2_yw.png")
        &:nth-child(3)
          i
            background-image url("./yc_3_hddb.png")




</style>
