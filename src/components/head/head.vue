<template>
  <div class="hWrap" :class="{'hWrapStyle':!clientWidth}">
    <div class="hWrap-list" :class="{'hWrap-listStyle':!clientWidth}">
      <div class="hIcon"><router-link to="/"></router-link></div>
      <div class="hNav" v-if="clientWidth">
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/finance">科技金融</router-link></li>
          <li><router-link to="/productServer">产品服务</router-link></li>
          <li><router-link to="/cooperation">合作 / 方案</router-link></li>
          <!--<li><router-link to="/newsCenter">新闻中心</router-link></li>-->
          <li><router-link to="/aboutUs">关于我们</router-link></li>
          <li><router-link to="/call">联系我们</router-link></li>
        </ul>
      </div>
      <div class="detailIcon" v-else @click.stop="detailList" ><img  src="./detailBtn.png" /></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
	import {bus} from '../../common/js/bus.js'
  export default {
    data(){
      return{
      	 paginationIndex:null,
         clientWidth:true,
         detailIndex:false
      }
    },
    created(){
      var that = this;
       if (document.documentElement.clientWidth < 1080){
           this.clientWidth = false;
       }
      window.onresize = function(){
         var w = document.documentElement.clientWidth;
         var h = document.documentElement.clientHeight;
        if (w < 1080){
          bus.$emit('skip-index',false);
          bus.$emit('server-index',false);
          that.clientWidth = false;
        }else {
          bus.$emit('server-index',true);
          that.clientWidth = true;
          bus.$emit('detail-index',false);
          bus.$emit('skip-index',true);
        }
        if (w > 1080 && h < 780){
          bus.$emit('footer-index',false);
        }else {
          bus.$emit('footer-index',true)
        }
        if (w < 768){
          bus.$emit('cw_768',false);
        }else {
          bus.$emit('cw_768',true);
        }
      }
    },
    mounted(){
    	var that = this;
    	bus.$on('pagination-index',function(index){
    		that.paginationIndex = index;
    	})
    },
    methods:{
    	plugin(){
    	},
      detailList(){
    	  this.detailIndex = !this.detailIndex;
        bus.$emit('detail-index',this.detailIndex)
      },
    },
    watch:{
      $route(){
        this.detailIndex = false;
      }
    }
  }
</script>
<style scoped lang="stylus">
 @import "../../common/stylus/mixins.styl";
   .hWrap
      position fixed
      width 100%
      height headHeight
      background-color rgba(0, 0, 0, 0.5)
      @media only screen and (max-width: 1080px)
        height 45px
      z-index 999999
      .hWrap-list
        width 1200px
        @media only screen and (max-width: 1200px)
          width 998px
        @media only screen and (max-width: 1080px)
          height 45px
          line-height 45px
          width 100%
        height headHeight
        line-height headHeight
        margin 0 auto
     /*   text-align center*/
        .hIcon
           display inline-block
           position relative
           width 185px
           height 100%
           a
             position absolute
             width 100%
             height 40px
             left 0
             top 50%
             margin-top -(@height/2)px
             background url("./01_logo.png") no-repeat
             $bg-size 100% 100%
             @media only screen and (max-width: 1080px)
               width 120px
               height 26px
               margin-top (-@height/2)px
               margin-left (@height/2)px
               $bg-size contain


        .hNav
           float right
           li
             display inline-block
             a
               display block
               height headHeight
               color: #ffffff
               padding 0 10px
               font-size 16px; /*no*/
               $box-sizing(border-box)
           li .router-link-exact-active
               border-bottom:5px solid RGBA(0, 156, 237, 1)
               color RGBA(0, 156, 237, 1)
        .detailIcon
           position absolute
           top 0
           cursor pointer
           right 10px
           img
            vertical-align middle


</style>

