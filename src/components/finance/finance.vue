<template>
  <div class="finance">
    <div class="swiper-wrapper">
      <!--科技经融-->
      <div class="swiper-slide">
        <div class="pagination_1">
          <div class="page-box">
            <div class="page-cell">
              <transition name="finance_page_1_top">
                <img class="title"  src="./01-kj-wz.png" v-show="slideControl.pageSlide_1"/>
              </transition>
              <transition name="finance_page_1_bottom">
                <div class="page-cell-bottom" v-show="slideControl.pageSlide_1">
                  <img class="right" src="./01-kj-wz2.png" />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <!--科技经融 222-->
      <div class="swiper-slide">
        <div class="pagination_2">
          <div class="page-box">
            <transition name="finance_page_2_title">
              <div class="title" v-show="slideControl.pageSlide_2">
                <!--<img src="./02-kj-wz.png" alt="">-->
                <p>科技金融</p>
              </div>
            </transition>
            <div class="abstractWrap">
              <div class="abstractWrap-finance">
                <transition name="finance_page_2_abstract">
                  <div class="abstract" v-show="slideControl.pageSlide_2">
                    <p style="display: inline-block">通过金融科技的运用，金融风险的控制、金融服务的创造以及金融资产的整合来解决实体金融里
                      产品和服务的痛点,真正以用户为中心，提升效率，覆盖更广泛的地域，更多的人群，给大家在
                      “投、保、消、贷”等基本经融服务场景中更好、更简单的体验。</p>
                  </div>
                </transition>
                <transition name="finance_page_2_abstractImg">
                  <div class="abstractImg" v-show="slideControl.pageSlide_2">
                    <img  src="./02-kj.png" />
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--核心竞争力-->
      <div class="swiper-slide">
        <div class="pagination_3">
          <div class="page-box">
            <transition name="core_page_3_title">
              <div class="title" v-show="slideControl.pageSlide_3">
                <!--<img src="./03-kj-wz.png" alt="">-->
                <p>核心竞争力</p>
              </div>
            </transition>
            <div class="coreWrap">
              <div class="coreWrap-finance">
                <transition name="core_page_3_abstract">
                  <div class="abstract" v-show="slideControl.pageSlide_3">
                    <p>通过金融科技的运用，金融风险的控制、金融服务的创造以及金融资产的整合来解决实体金融里
                      产品和服务的痛点,真正以用户为中心，提升效率，覆盖更广泛的地域，更多的人群，给大家在
                      “投、保、消、贷”等基本经融服务场景中更好、更简单的体验。</p>
                  </div>
                </transition>
                <transition name="core_page_3_abstractImg">
                  <ul v-if="clientWidth" class="abstractImg" v-show="slideControl.pageSlide_3">
                    <li><img src="./03-kj-mk1.png" alt=""></li>
                    <li><img src="./03-kj-mk4.png" alt=""></li>
                    <li><img src="./03-kj-mk2.png" alt=""></li>
                    <li><img src="./03-kj-mk5.png" alt=""></li>
                    <li><img src="./03-kj-mk3.png" alt=""></li>
                  </ul>
                  <ul v-else class="abstractImg" v-show="slideControl.pageSlide_3">
                    <li v-for="(item,index) in coreImgList" :key="index"><img :src="item.url" /></li>
                  </ul>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--社会价值-->
      <div class="swiper-slide">
        <div class="pagination_4">
          <div class="page-box">
            <transition name="society_page_4_title">
              <div class="title" v-show="slideControl.pageSlide_4">
                <!--<img src="./04-kj-wz.png" alt="">-->
                <p>社会价值</p>
              </div>
            </transition>
            <div class="societyWrap">
              <div class="societyWrap-finance">
                <transition name="society_page_4_abstract">
                  <div class="abstract" v-show="slideControl.pageSlide_4">
                    <p>作为一家提供综合金融服务的平台化企业，致力于不断创新产品和服务，通过“科技金融”为小微企业疏通管道，促进实体经济发展；
                      为个人人生成长扫清障碍；为员工搭建事业的平台；引领行业创新，探索中国普惠金融发展的新路径。</p>
                  </div>
                </transition>
                <transition name="society_page_4_abstractImg">
                  <ul v-if="clientWidth" class="abstractImg" v-show="slideControl.pageSlide_4">
                    <li><img src="./04-kj-mk1.png" alt=""></li>
                    <li><img src="./04-kj-mk2.png" alt=""></li>
                    <li><img src="./04-kj-mk3.png" alt=""></li>
                    <li><img src="./04-kj-mk4.png" alt=""></li>
                  </ul>
                  <ul v-else class="abstractImg" v-show="slideControl.pageSlide_4">
                    <li v-for="(item,index) in societyImgList" :key="index"><img :src="item.url" /></li>
                  </ul>
                </transition>
              </div>
            </div>
            <rjFooter class="footer-wrap"></rjFooter>
          </div>
        </div>

      </div>
    </div>
    <!--分页-->
    <div class="swiper-pagination"></div>
    <skip @skiptop="skip()"></skip>
  </div>
</template>
<script type="text/ecmascript-6">
  import rjFooter from '../footer/footer.vue'
  import skip from '../skip/skip.vue'
  import {bus} from '../../common/js/bus'
  export default {
    data(){
      return {
        clientWidth:true,
        slideControl:{
          pageSlide_1:false,
          pageSlide_2:false,
          pageSlide_3:false,
          pageSlide_4:false,
        },
        coreImgList:[
          {url:'./static/img/03-kj-mxx1-small.png'},
          {url:'./static/img/03-kj-mxx2-small.png'},
          {url:'./static/img/03-kj-mxx3-small.png'},
          {url:'./static/img/03-kj-mxx4-small.png'},
          {url:'./static/img/03-kj-mxx5-small.png'}
        ],
        societyImgList:[
          {url:'./static/img/04-kj-mxx1.png'},
          {url:'./static/img/04-kj-mxx1.png'},
          {url:'./static/img/04-kj-mxx1.png'},
          {url:'./static/img/04-kj-mxx1.png'}
        ],
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
      this.swiper = new Swiper('.finance',{
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
          index == 2?  target. pageSlide_3 = true : target.pageSlide_3 = false;
          index == 3?  target. pageSlide_4 = true : target.pageSlide_4 = false;
        },
      });
      if (document.documentElement.clientWidth < 768){
        that.clientWidth = false;
      }
      bus.$on('cw_768',function (index) {
        that.clientWidth = index;
      })
    },
    components:{rjFooter,skip}
  }
</script>
<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl"
  @import "../../common/stylus/variable.styl"
  .finance
    width 100%
    height 100%
    overflow hidden
    .m_auto
      margin auto
    .swiper-slide
      width 100%
      height 100%
      .pagination_1   //金融科技
        width 100%
        height 100%
        $screen-bg("./01-kj-bg.png")
        .page-box
          $table-box()
          .page-cell
            $table-cell()
            $transition-X('finance_page_1_top',0,-200px,1s)
            $transition-X('finance_page_1_bottom',0,200px,1s)
            img
              $screen-1080-img-width()
            .page-cell-bottom
              margin-top 46px
      .pagination_2   //金融科技2222
        width 100%
        height 100%
        $screen-bg("./02-kj-bg.png")
        .page-box
          text-align center
          height 100%
          .title
            $page-title()
            p
              $screen-titleSize()
          $transition-X('finance_page_2_title',0,-200px,1s)
          .abstractWrap
            $main-center(0,0)
            .abstractWrap-finance
              $main-center-s()
              .abstract
                width 800px
                margin 0 auto
                font-size 16px
                color #666666
                line-height 24px
                white-space:normal
                text-justify inter-word
                @media only screen and (max-width: 1080px)
                  width 90%
                @media only screen and (max-width: 768px)
                  font-size 12px
              .abstractImg
                margin 50px auto 0
                img
                  height auto
                  $screen-1080-img-width()
                  @media only screen and (max-height 860px) and (min-width 1080px)
                    width 40%
                  @media only screen  and (max-width 1080px)
                    width 80%
              $transition-X('finance_page_2_abstract',0,-20px,1s)
              $transition-X('finance_page_2_abstractImg',0,200px,1s)


      .pagination_3   //核心竞争力
        width 100%
        height 100%
        $screen-bg("./03-kj-bg.png")
        .page-box
          height 100%
          text-align center
          .title
            $page-title()
            p
              color #ffffff
              $screen-titleSize()
          $transition-X('core_page_3_title',0,-200px,1s)
          .coreWrap
            $main-center(0,0)
            .coreWrap-finance
              width 100%
              $main-center-s()
              .abstract
                width 800px
                margin 0 auto
                font-size 16px
                color #FFFFFF
                line-height 24px
                white-space:normal
                text-justify inter-word
                @media only screen and (max-width: 1080px)
                  width 90%
                @media only screen and (max-width: 768px)
                  font-size 12px
              .abstractImg
                margin-top 50px
                @media only screen and (max-width: 768px)
                  margin 15px auto 0
                  width 90%
                li
                  display inline-block
                  width auto
                  @media only screen and (max-width: 1350px)
                    width 150px
                  @media only screen and (max-width: 768px)
                    width 33%
                  img
                    height auto
                    $screen-1080-img-width()
                    @media only screen and (max-width: 1350px)
                      width 100%
                    @media only screen and (max-height: 750px)
                      width 70%
                    @media only screen and (max-width: 768px)
                      width 90%
              $transition-X('core_page_3_abstract',0,-20px,1s)
              $transition-X('core_page_3_abstractImg',0,200px,1s)


      .pagination_4   //社会价值
        width 100%
        height 100%
        $screen-bg("./04-kj-bg.png")
        .page-box
          height 100%
          text-align center
          $transition-X('society_page_4_title',0,-200px,1s)
          .title
            $page-title()
            p
              $screen-titleSize()
          .societyWrap
            $main-center($mainBottom,$mainBottom-s)
            .societyWrap-finance
              width 100%
              $main-center-s()
              .abstract
                width 760px
                margin 0 auto
                font-size 16px
                color #666666
                line-height 24px
                white-space:normal
                text-justify inter-word
                @media only screen and (max-width: 1080px)
                  width 90%
                @media only screen and (max-width: 768px)
                  font-size 12px
              .abstractImg
                margin-top 50px
                @media only screen and (max-width: 768px)
                  width 80%
                  margin 20px auto 0
                li
                  display inline-block
                  width 200px
                  @media only screen and (max-width: 1080px)
                    width 150px
                  @media only screen and (max-width: 768px)
                    width 45%
                  img
                    width 100%
                    height auto
                    $screen-1080-img-width()
                    @media only screen and (max-height: 895px)
                      width 60%
                    @media only screen and (max-width: 1080px)
                      width 100%
                    @media only screen and (max-width: 768px)
                      width 40%
                      text-align center
              $transition-X('society_page_4_abstract',0,-20px,1s)
              $transition-X('society_page_4_abstractImg',0,200px,1s)






</style>

