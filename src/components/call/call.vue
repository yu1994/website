<template>
  <div class="containerCall">
    <div class="swiper-wrapper">
      <!--技术驱动-->
      <div class="swiper-slide">
        <div class="callPage_1">
          <div class="page">
            <transition name="pageSlide_1">
              <div  v-show="slideControl.pageSlide_1">
                <img  src="./01_lxwm_wz.png" />
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!--我们-->
      <div class="swiper-slide">
        <div class="callPage_2">
          <div class="page">
            <transition name="pageSlide_2">
              <div class="title" v-show="slideControl.pageSlide_2">
                <img src="./02_lxwm_wz.png" alt="">
              </div>
            </transition>
            <div class="mapWrap">
              <transition name="companyMap">
                <div class="map" v-show="slideControl.pageSlide_2">
                  <img src="./02_lxwm_dt.png" alt="">
                </div>
              </transition>
              <transition name="companyInfo">
                <div class="companyInfo" v-show="slideControl.pageSlide_2">
                  <p><span class="pr5">合作电话:</span><span>18805716241</span></p>
                  <p><span class="pr5">合作邮箱:</span>rsym@rsitf.com</p>
                  <div class="local">
                    <span class="pr5">公司地址:</span>
                    <div class="companyLocal">
                      <p>浙江省杭州市文一西路1217号</p>
                      <p>IT公园4号楼5楼</p>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <rjFooter></rjFooter>
      </div>
    </div>
    <!--分页-->
    <div class="swiper-pagination" ></div>
    <skip @skiptop="skip()"></skip>
  </div>
</template>
<script type="text/ecmascript-6">
  import rjFooter from '../footer/footer.vue'
  import skip from '../skip/skip.vue'
  export default {
    data(){
      return {
        slideControl:{
          pageSlide_1:false,
          pageSlide_2:false,
        }
      }
    },
    methods:{
      skip(){
        this.swiper.slideTo(0,1000,false);
        this.slideControl.pageSlide_1 = true;
      }
    },
    mounted(){
      var that = this,target = that.slideControl;
      this.swiper = new Swiper('.containerCall',{
        direction:'vertical',
        pagination:'.swiper-pagination',
        paginationClickable:true,
        mousewheelControl:true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          that.slideControl. pageSlide_1 = true;
        },
        onSlideChangeStart:function(swiper){
          var index = swiper.activeIndex;
          index == 0? target. pageSlide_1 = true : target.pageSlide_1 = false;
          index == 1?  target. pageSlide_2 = true : target.pageSlide_2 = false;
        },
      });
    },
    components:{rjFooter,skip}
  }
</script>
<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  .containerCall
    width 100%
    height 100%
    overflow hidden
    .swiper-slide
      width 100%
      height 100%
      .callPage_1   //技术咨询
        $screen-1080-bg("./01_lxwm_background.png","./lxwm_01_bg_1.png")
        $bg-size cover
        background-position center
        $table-box()
        $transition-title('pageSlide_1')
        .page
          $table-cell()
          img
            vertical-align middle
            $screen-1080-img-width()
      .callPage_2   //联系电话
        height 100%
        $screen-1080-bg("./02_lxwm_background.png","./lxwm_02_bg_2.png")
        $bg-size cover
        background-position: center
        $transition-title('pageSlide_2')
        overflow hidden
        color #666666
        font-size 20px
        .page
          position relative
          margin-left 358px
          overflow hidden
          @media only screen and (max-width: 1550px)
            margin-left 50px
            background-size 40% 80%
          @media only screen and (max-width: 768px)
            background-size 100% 47%
            text-align center
            vertical-align middle
            margin 0 auto
          background-image url("./02_lxwm_jx.png")
          background-repeat no-repeat
          vertical-align top

          .title
            margin-top 100px
            @media only screen and (max-width: 768px)
              margin-top 70px
            img
              margin-left 20px
              @media only screen and (max-width: 1200px)
                width 40%
              @media only screen and (max-width: 768px)
                width 70%
                margin-left 0
          .mapWrap
            margin-top 30px
            .map
              @media only screen and (max-width: 768px)
                display none
              float left
              @media only screen and (max-width: 1200px)
                width 48%
              line-height 0
              font-size 0
              img
                @media only screen and (max-width: 1200px)
                 width 100%
            .companyInfo
              @media only screen and (max-width: 768px)
                width 100%
                text-align center
                margin-top 20px
              float left
              vertical-align top
              line-height 30px
              p
                margin-top 25px
                @media only screen and (max-width: 768px)
                  text-align left
                  margin-left 20%
                  margin-top 15px
                  font-size 14px
                  margin-top 15px
                span
                  display inline-block
              .local
                margin-top 25px
                @media only screen and (max-width: 768px)
                  text-align left
                  margin-left 20%
                  font-size 14px
                  margin-top 15px
                span
                  display inline-block
                  vertical-align top
                .companyLocal
                  display inline-block
                  p
                    margin 0
            .companyInfo-enter
              opacity 0
              $translate(200px,0)
            .companyInfo-enter-active
              $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)

          .companyMap-enter
            opacity 0
            $translate(-200px,0)
          .companyMap-enter-active
            $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
        $transition-title('pageSlide_2')
        .pr5
          padding-right 5px


  /*.swiper-wrapper>div*/
    /*@media only screen and (min-width: 1080px)*/
      /*min-height 700px*/
</style>

