<template>
  <div class="containerAbout">
    <div class="swiper-wrapper">
      <!--技术驱动-->
      <div class="swiper-slide">
        <div class="aboutPage_1">
          <div class="page">
              <div>
                <transition name="skill_left">
                <img class="title"  src="./01_gywm_zcwz.png" v-show="slideControl.pageSlide_1"/>
                </transition>
                <transition name="skill_right">
                  <img class="right" src="./01_gywm_ycwz.png" v-show="slideControl.pageSlide_1"/>
                </transition>
              </div>
          </div>
        </div>
      </div>
      <!--我们-->
      <div class="swiper-slide">
        <div class="aboutPage_2">
          <div class="page">
              <div class="about_wrap">
                <transition name="aboutMe_left">
                  <img class="title"  src="./02_gywm_zcwz.png" v-show="slideControl.pageSlide_2"/>
                </transition>
                <transition name="aboutMe_right">
                  <img class="right" src="./02_gywm_ycwz.png" v-show="slideControl.pageSlide_2"/>
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
      this.swiper = new Swiper('.containerAbout',{
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
  .containerAbout
    width 100%
    height 100%
    overflow hidden
    .swiper-slide
      width 100%
      height 100%
      .aboutPage_1   //技术驱动
        $screen-1080-bg("./01_gywm_background.png","./gywm_01_bg_1.png")
        $bg-size cover
        background-position center
        $table-box()
        .skill_left-enter
           opacity 0
           $translate(-200px,0)
        .skill_left-enter-active
          $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
        .skill_right-enter
          opacity 0
          $translate(200px,0)
        .skill_right-enter-active
          $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
        .page
          $table-cell()
          img
            vertical-align middle
            @media only screen and (max-width: 768px)
              width 80%
            &.title
              @media only screen and (max-width: 768px)
                width 50%
            &.right
              margin-left 245px
              @media only screen and (max-width: 1080px)
                margin-left 0
              @media only screen and (max-width: 768px)
                margin-top 20px

      .aboutPage_2   //我们
        $screen-1080-bg("./2-gywo-bg.png","./2_gywo_small.png")
        $bg-size cover
        background-position center
        $table-box()
        .aboutMe_left-enter
          opacity 0
          $translate(-200px,0)
        .aboutMe_left-enter-active
          $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
        .aboutMe_right-enter
          opacity 0
          $translate(200px,0)
        .aboutMe_right-enter-active
          $transition all 1s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
        .page
          $table-cell()
          .about_wrap
            margin-left 350px
            text-align left
            @media only screen and (max-width: 1080px)
              text-align center
              margin-left 0
            img
              vertical-align top
              @media only screen and (max-width: 768px)
                width 80%
              &.title
                @media only screen and (max-width: 768px)
                  width 50%
              &.right
                vertical-align middle
                margin-left 66px
                @media only screen and (max-width: 1080px)
                  margin-left 0
                  margin-top 20px
                @media only screen and (max-width: 768px)
                  margin-top 20px

</style>

