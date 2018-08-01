<template>
  <div class="containerServer">
    <div class="swiper-wrapper">
      <!--个人信贷系统-->
      <div class="swiper-slide creditHomeWrap">
        <transition name="creditSlide">
          <div class="title" v-show="slideControl.creditSlide">
            <img src="./01_cpfw_wz.png" alt="">
          </div>
        </transition>
      </div>
      <!-- 个人信贷 -->
      <div class="swiper-slide rjCreditWrap">
        <transition name="rjCreditSlide">
          <div class="rjTitle" v-show="slideControl.rjCreditSlide">
            <p>融钜个人信贷</p>
            <!--<img src="./02_cpfw_wz.png" alt="">-->
          </div>
        </transition>
        <div class="rjCreditWrap-detail">
            <div class="detail">
              <transition name="rjImgSlide">
                <div class="images" v-show="slideControl.rjCreditImg">
                  <img src="./02_cpfw_zc.png" alt="">
                </div>
              </transition>
              <transition name="rjDetailSlide">
                <div class="context" v-show="slideControl.rjCreditContext">
                  <div>
                    <p>融钜个人信贷系统是融钜针对中小金融机构新型小贷业务需求，研发的一款无抵押、无担保、纯线上小额贷款产品。</p>
                    <p>该系统基于大数据分析，结合风控模型对借款人资信进行评估，实现秒级快速放款。还可根据不同产品设置不同的还款方式、费用标准、风控模型和审批流程。</p>
                    <p>改产品为年轻消费群体提供高效、便捷、个性化的信用借款服务。</p>
                  </div>
                </div>
              </transition>
            </div>
        </div>
      </div>
      <!--中小机构-->
      <div class="swiper-slide outfitWrap">
        <div class="outfit-list">
          <transition name="outfitSlide">
            <div class="outfitTitle" v-show="slideControl.outfitSlide">
              <!--<img src="./03_cpfw_wz.png" alt="">-->
              <p>中小金融机构发展瓶颈</p>
            </div>
          </transition>
            <div class="outfit-img">
              <div class="m_auto">
              <ul class="leftWrap">
                <li class="leftTop"><img src="./03_cpfw_td1.png" />
                  <transition>
                    <!--<p>缺乏专业风险管理技术</p>-->
                  </transition>

                </li>
                <li class="leftBottom"><img src="./03_cpfw_td4.png" alt="">
                  <!--<p>金融业务人员少，效率低</p>-->
                </li>
              </ul>
              <ul class="middleWrap">
                <li class="middle"><img src="./03_cpfw_td5.png" alt="">
                  <!--<p>信贷产品设计缺少或单一</p>-->
                </li>
              </ul>
              <ul class="rightWrap">
                <li class="rightTop"><img src="./03_cpfw_td2.png" alt="">
                  <!--<p>缺少大数据建模和分析能力</p>-->
                </li>

                <li class="rightBottom" ><img ref="rightBottom" src="./03_cpfw_td3.png" alt="">
                  <!--<p>金融IT实力薄弱</p>-->
                </li>
              </ul>
            </div>
          </div>
          <div style="width: 100%;height: 50px;"></div>
        </div>
      </div>
      <!--业务模式-->
      <div class="swiper-slide cooperationPartner">
         <div class="partner-list">
           <transition name="partnerSlide-title">
             <div class="title" v-show="slideControl.partner">
               <!--<img src="./ywms.png" alt="">-->
               <p>业务模式</p>
             </div>
           </transition>
             <transition name="partnerSlide-img">
               <div class="partner" v-show="slideControl.partner">
                 <div class="partner-img">
                   <img src="./jxkj.png" alt="">
                 </div>
               </div>
             </transition>
         </div>
      </div>
      <!--架构-->
      <div class="swiper-slide frameworkWrap">
        <div class="framework-list">
          <transition name="frameworkSlide-title">
            <div class="title" v-show="slideControl.framework">
              <!--<img src="./cpjg.png" alt="">-->
              <p style="color: #ffffff">产品架构</p>
            </div>
          </transition>
          <transition name="frameworkSlide-img">
            <div class="partner" v-show="slideControl.framework">
              <div class="partner-img">
                <img src="./05_cpfw.png" alt="">
              </div>
            </div>
          </transition>
        </div>
      </div>
      <!--完美产品服务-->
      <div class="swiper-slide perfectProWrap">
        <div class="perfect-list">
          <transition name="perfectSlide-title">
            <div class="title" v-show="slideControl.perfect">
              <p>完善的产品服务</p>
              <!--<img src="./cpfw-06-wz.png" alt="">-->
            </div>
          </transition>
          <transition name="perfectSlide-img">
            <div class="perfect" v-show="slideControl.perfect">
                <ul>
                  <li><img src="./06_cpfw_1_rzgl.png" alt=""></li>
                  <li><img src="./06_cpfw_2_sjzq.png" alt=""></li>
                  <li><img src="./06_cpfw_3_sxsh.png" alt=""></li>
                  <li><img src="./06_cpfw_4_jkqk.png" alt=""></li>
                  <li><img src="./06_cpfw_5_hk.png" alt=""></li>
                  <li><img src="./06_cpfw_6_dxtx.png" alt=""></li>
                </ul>
              </div>
          </transition>
          <rjFooter class="footer-wrap"></rjFooter>
        </div>
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
         creditSlide:false,
         rjCreditSlide:false,
         rjCreditContext:false,
         rjCreditImg:false,
         outfitSlide:false,
         partner:false,
         framework:false,
         perfect:false
       }
      }
    },
    methods:{
      skip(){
        this.swiper.slideTo(0,1000,false);
        this.slideControl.creditSlide = true
      }
    },
    mounted(){
      var that = this,target = that.slideControl;
      this.swiper = new Swiper('.containerServer',{
        direction:'vertical',
        pagination:'.swiper-pagination',
        paginationClickable:true,
        mousewheelControl:true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
          that.slideControl. creditSlide = true;
        },
        onSlideChangeStart:function(swiper){
          var index = swiper.activeIndex;
          index == 0? target. creditSlide = true : target.creditSlide = false;
          index == 1? (target.rjCreditSlide = true,target.rjCreditContext = true ,target.rjCreditImg = true) :
            (target.rjCreditSlide = false,target.rjCreditContext = false,target.rjCreditImg = false);
          index == 2?  target. outfitSlide = true : target.outfitSlide = false;
          index == 3?  target. partner = true : target.partner = false;
          index == 4?  target. framework = true : target.framework = false;
          index == 5?  target. perfect = true : target.perfect = false;
          if (index ==2){
//            console.log( that.$refs.rightBottom.style.width)
          }
        },
      });
    },
    components:{rjFooter,skip}
  }
</script>
<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/variable.styl"
  $outfit-img()
    width 100%
    @media only screen and (max-height: 780px)
      width 200px
    @media only screen and (max-width: 1080px)
      width 200px
    @media only screen and (max-width: 768px)
      width 100%

.containerServer
  width 100%
  height 100%
  overflow hidden
  .m_auto
    margin auto
  .creditHomeWrap   //个人信贷系统
    $table-box()
    $screen-bg("./01_cpfw_background.png")
    .title
      $table-cell()
      img
        height auto
        $screen-1080-img-width()
    $transition-X('creditSlide',0,-200px,1s)
  .rjCreditWrap   //个人信贷
    display flex
    flex-direction column
    $screen-bg("./02_cpfw_background.png")
    $transition-X('rjCreditSlide',0,-200px,1s)
    .rjTitle
      text-align center
      $page-title()
      p
        $screen-titleSize()
    .rjCreditWrap-detail
      $main-center(0,0)
      .detail
        width 100%
        text-align center
        $main-center-s()
        @media only screen and (max-width: 768px)
          flex-direction column
        margin  auto
        div
          display inline-block
          font-size 16px
          color #676767
          text-align start
          vertical-align middle
        $transition-X('rjDetailSlide',0,200px,1s)
        $transition-X('rjImgSlide',0,-200px,1s)
        .images
          text-align center
          img
            @media only screen and (max-width: 1080px)
              width 80%
        .context
          width 25%
          p
            line-height 24px
          @media only screen and (max-width: 1080px)
            margin 0 auto
            width 90%



  .outfitWrap   //中小机构
    overflow hidden
    $screen-bg("./3cpfw-bg.png")
    .outfit-list
      display flex
      flex-direction column
      height 100%
      $transition-X('outfitSlide',0,-200px,1s)
      .outfitTitle
        $page-title()
        text-align center
        p
          color #ffffff
          $screen-titleSize()
      .outfit-img
        display flex
        flex 1
        position relative
        width 100%
        font-size 16px
        .leftWrap,.rightWrap
          position absolute
          top 0
          bottom 0
          width 41.66%
          background url("03_cpfw_jx.png") no-repeat
          $bg-size(100%,100%)
        .leftWrap
          left 0
          li
            p
              position absolute
              left 50%
              top 50%
              $translate(-50%,-50%)
              color #FFFFFF
          .leftTop
            width auto
            position absolute
            @media only screen and (max-width: 1080px)
              font-size 12px
              top 0
              right 0
            img
              $outfit-img()
            top -30px
            right 170px
          .leftBottom
            width auto
            position absolute
            z-index 98
            @media only screen and (max-width: 1080px)
              font-size 12px
              bottom 0
              right 0
            img
              $outfit-img()
            bottom -30px
            right -30px
        .rightWrap
          right 0
          .rightTop
            width auto
            position absolute
            top -30px
            left  170px
            @media only screen and (max-width: 1080px)
              font-size 12px
              top 0
              left 0
            img
              $outfit-img()
          .rightBottom
            width auto
            position absolute
            z-index 100
            bottom -30px
            left -30px
            @media only screen and (max-width: 1080px)
              bottom 0
              left 0
            img
              $outfit-img()
        .middleWrap
          width auto
          position absolute
          line-height 0
          font-size 0
          left 50%
          top 50%
          z-index 99
          $translate(-50%,-50%)
          @media only screen and (max-height: 780px)
            width auto
          li
            width auto
            @media only screen and (max-height: 780px)
              img
                width 300px
            @media only screen and (max-width: 1080px)
                img
                  width 80%
             @media only screen and (max-width: 768px)
               img
                 width 100%
  .cooperationPartner,.frameworkWrap  //业务模式  和 架构
    $screen-bg("./4cpfu-bg.png")
    $transition-X('partnerSlide-title',0,-200px,1s)
    $transition-X('partnerSlide-img',0,200px,1s)
    $transition-X('frameworkSlide-title',0,-200px,1s)
    $transition-X('frameworkSlide-img',0,200px,1s)
    .partner-list,.framework-list
      height 100%
      .title
        $page-title()
        text-align center
        height auto
        p
          $screen-titleSize()
      .partner
        $main-center(0,0)
        .partner-img
          width 100%
          $main-center-s()
          text-align center
          img
            height auto
            @media only screen and (max-height: 780px)
              width 50%
            @media only screen and (max-width: 1080px)
              width 90%
  .frameworkWrap  //架构
    $screen-bg("./5cpfu-bg.png")

  .perfectProWrap  //完美产品
    $screen-bg("./06_cpfw_background.png")
    $transition-title('perfectSlide-title')
    .perfect-list
      height 100%
      .title
        $page-title()
        p
          $screen-titleSize()
      .perfect
        $main-center($mainBottom,$mainBottom-s)
        width 1030px
        text-align center
        font-size 0
        @media only screen and (max-width: 1080px)
          width 100%
          margin-top 30px
        margin 0 auto
        ul
          width 100%
          $main-center-s()
        li
          display inline-block
          text-align center
          @media only screen and (max-height: 780px)
            width 30%
            margin 0 auto !important
            text-align center
          @media only screen and (max-width: 1080px)
            width 30%
            margin 0 auto !important
            text-align center
          img
            @media only screen and (max-height: 780px)
              width 70%
            @media only screen and (max-width: 1080px)
              width 100%
        li:nth-child(2){
          margin 0 50px
        }
        li:nth-child(5){
          margin 0 50px
        }
    $transition-X('perfectSlide-img',0,200px,1s)
</style>
