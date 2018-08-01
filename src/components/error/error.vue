<template>
  <div class="errorWrap">
      <div class="sorry">
        <img src="./01_404_wz.png" alt="">
        <a href="#/"></a>
      </div>
    <!--<i class="iconfont icon-close-circle-o"></i>-->
    <!--<i class="iconfont icon-number_"></i>-->
  </div>
</template>
<script type="text/ecmascript-6">

</script>
<style scoped lang="stylus">
@import "../../common/stylus/mixins.styl"
.errorWrap
  $table-box()
  overflow hidden
  $screen-1080-bg("./01_404_background.png","./404_bg_1.png")
  $bg-size cover
  background-position center
  .sorry
    $table-cell()
    text-align left
    @media only screen and (max-width: 1080px)
      text-align center
      vertical-align bottom
    img
      $screen-1080-img-width()
      @media only screen and (max-width: 1080px)
        margin-left 0
        display none
      margin-left 250px
    a
      display block
      width 180px
      height 50px
      @media only screen and (max-width: 1080px)
        margin 20px auto
      margin 150px 0 0 250px
      background url("./01_404_fhsy.png") no-repeat

</style>
