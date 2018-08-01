<template>
  <div>
    <transition name="showFooter">
        <div key="enter" class="footer" v-if="footerIndex" @mouseleave="leave()">
          <ul class="footer-skip">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/finance">科技金融</router-link></li>
            <li><router-link to="/productServer">产品服务</router-link></li>
            <li><router-link to="/cooperation">合作 / 方案</router-link></li>
            <!--<li><router-link to="/newsCenter">新闻中心</router-link></li>-->
            <li><router-link to="/aboutUs">关于我们</router-link></li>
            <li><router-link to="/call">联系我们</router-link></li>
          </ul>
          <div class="footer-info">
            <p><strong>联系地址:</strong><span>浙江省杭州市余杭区文一西路1217号IT公园</span></p>
            <p><strong>电子邮箱:</strong><span>rsym@rsitf.com</span></p>
          </div>
          <div class="footer-version">
            <p>2017-2018 rsitf.com 版权所有</p>
            <p>ICP证: 浙ICP备18004083号-1</p>
          </div>
        </div>
        <div key="leave" class="isEmpty" v-else @mouseenter="footerIndex = true">
        </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import {bus} from '../../common/js/bus.js'
 export default {
   data(){
     return {
       footerIndex:true,
       w : document.documentElement.clientWidth,
       h : document.documentElement.clientHeight
     }
   },
   methods:{
     leave(){
       this.w = document.documentElement.clientWidth;
       this.h = document.documentElement.clientHeight;
       if (this.w > 1080 && this.h < 780){
         this.footerIndex = false;
       }else {
         this.footerIndex = true;
       }
     }
   },
   mounted(){
     var that = this;
     if (that.w > 1080 && that.h < 780){
       that.footerIndex = false;
     }else {
       that.footerIndex = true;
     }
     bus.$on('footer-index',function(index){
       that.footerIndex = index;
     })
   }
 }
</script>
<style scoped lang="stylus">
   .footer
     position absolute
     bottom 0
     left 0
     padding 40px 0
     @media only screen and (max-width: 768px)
       padding 8px 0
     width 100%
     text-align center
     background-color RGBA(255, 255, 255, 1)
     color RGBA(102, 102, 102, 1)
     .footer-skip
       width 100%
       height auto
       font-size 0
       li
         display inline-block
         padding 0 15px
         margin-bottom 5px
         border-right 1px solid RGBA(102, 102, 102, 1)
         font-size 16px
         @media only screen and (max-width: 768px)
           font-size 12px
         &:last-child
           border-right none
     .footer-info
       font-size 0
       padding 34px 0 10px 0
       @media only screen and (max-width: 768px)
         padding 8px 0
       p
         display inline-block
         padding 0 15px
         font-size 16px
         @media only screen and (max-width: 768px)
           font-size 12px
     .footer-version
       font-size 0
       p
         display inline-block
         padding 0 8px
         font-size 16px
         @media only screen and (max-width: 768px)
           font-size 12px



   .isEmpty
     position absolute
     bottom 0
     left 0
     width 100%
     background-color transparent
     padding 40px 0

   .showFooter-enter
     opacity 0
     transform: translate(0,100px)
   .showFooter-enter-active
     transition all .8s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
   .showFooter-leave-to
     opacity .8
     transform: translateY(100px)
   .showFooter-leave-active
     transition all .8s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
</style>
