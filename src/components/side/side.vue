<template>
    <transition name="toggleRouter">
      <div class="sideWrap" v-show="toggleRouter">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link :to="{name:'finance'}">科技金融</router-link></li>
          <li><router-link :to="{name:'proServer'}">产品服务</router-link></li>
          <li><router-link :to="{name:'cooperation'}">合作 / 方案</router-link></li>
          <!--<li><router-link :to="{name:'newsCenter'}">新闻中心</router-link></li>-->
          <li><router-link :to="{name:'aboutUs'}">关于我们</router-link></li>
          <li><router-link :to="{name:'call'}">联系我们</router-link></li>
        </ul>
      </div>
    </transition>
</template>
<script type="text/ecmascript-6">
  import {bus} from '../../common/js/bus.js'
 export default{
   data(){
    return {
      toggleRouter:null
    }
   },
   mounted(){
     var that = this;
     bus.$on('detail-index',function(index){
       that.toggleRouter = index;
     })
   },
   watch:{
     $route(){
       this.toggleRouter = false;
     }
   }
 }
</script>
<style lang="stylus">
  .sideWrap
    position fixed
    top: 0
    right 0
    height 100%
    z-index 999
    background rgba(73,73,73,0.95)
    ul
      padding-top 60px
      li
        height 50px
        line-height @height
        a
          display block
          height 100%
          color #ffffff
          padding 0 12px
          font-size 16px;/*no*/
          $box-sizing(box-sizing)
      li .router-link-exact-active
        border-bottom:5px solid RGBA(0, 156, 237, 1)
        color RGBA(0, 156, 237, 1)
.toggleRouter-enter
  opacity 0
  transform translateX(100px)
.toggleRouter-enter-active
  transition  all .5s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
.toggleRouter-leave-active
  transition  all .3s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
.toggleRouter-leave-to
  transform translateX(100px)
  opacity 0

</style>
