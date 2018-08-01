<template>
<div class="container">
	<div class="swiper-wrapper">
    <!--首页轮播-->
		<div class="swiper-slide detailInfo">
			<div class="banner">
				<div class="swiper-wrapper">
					<div class="swiper-slide bannerControl">
            <transition name="bannerFade">
              <div  v-show="bannerFade" class="bannerFade">
                <img src="./01_wz.png" alt="" >
              </div>
            </transition>
          </div>
					<!--<div class="swiper-slide"><img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/276254.jpg"/></div>-->
					<!--<div class="swiper-slide"><img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/276245.jpg"/></div>-->
				</div>
				<!-- 如果需要分页器 -->
				<!--<div class="swiper-pagination"></div>-->
			</div>
		</div>
    <!-- 风控 -->
		<div class="swiper-slide riskControl" >
      <transition name="riskTitle"  v-on:after-enter="riskAfterEnter">
        <div class="title" v-show="slideControl.riskTitle">
          <p>“智能矩阵” 风控体系</p>
        </div>
      </transition>
      <div class="riskControl-skill">
        <div class="m_auto">
            <div class="risk-skill" >
              <transition name="riskSkill">
              <ul v-show="slideControl.riskSkill">
                <li>机器学习</li>
                <li>风控经验</li>
                <li>打造贴合业务的一站式风控服务</li>
              </ul>
              </transition>
            </div>
            <div class="risk-skill risk-boost">
              <transition name="riskSkill">
              <ul v-show="slideControl.riskSkill">
                <li>降低坏账</li>
                <li>提高转化率</li>
              </ul>
              </transition>
            </div>
            <div class="risk-list">
            <div class="topBox">
              <transition name="riskSkill">
                <ul v-show="slideControl.riskSkill">
                  <li><span>数据整合存储</span><span>灵活配置</span></li>
                  <li><span>AB数据库</span><span>多数据源稳定输出</span></li>
                </ul>
              </transition>
              <transition name="riskSkill">
                <ul v-show="slideControl.riskSkill">
                  <li><span>风控数据服务</span></li>
                  <li><span>全量数据涵盖基础量</span></li>
                  <li>
                    <span>派生变量</span>
                    <span>外部数据</span>
                    <span>内部数据</span>
                  </li>
                </ul>
              </transition>
            </div>
            <div class="ballBox">
              <img src="./ball.png"/>
            </div>
            <div class="bottomBox">
              <transition name="riskSkill">
                <ul v-show="slideControl.riskSkill">
                  <li><span>提供精准营销模型</span><span>贷前审批模型</span></li>
                  <li><span>贷后催收模型</span><span>额度决策模型</span></li>
                </ul>
              </transition>
              <transition name="riskSkill">
                <ul v-show="slideControl.riskSkill">
                  <li><span>通过神经网络、随机森林、决策树等算</span></li>
                  <li><span>法建立风控模型，10年以上风控业务</span></li>
                  <li><span>经验，调优模型</span></li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--专业服务-->
		<div class="swiper-slide specialtyServer">
      <transition name="specialtyTitle" >
        <div class="specialtyTitle" v-show="slideControl.specialtyTitle">
          <p>专业服务</p>
        </div>
      </transition>
      <div class="specialtyServer-wrap">
        <ul class="specialty-list">
          <li :style="{marginRight: index==3? '0' : (index == 7? '0' : '')}" v-for="(item,index) in specialtyList"  :key="index" @mouseenter="item.slider = true" @mouseleave="item.slider = false">
            <img ref="serverIcon" :src="item.img" :alt="item.hint"/>
            <div class="hintWrap" ref="hintWrap" v-show="item.slider && flag">
              <transition :name="item.transName">
                <p v-show="item.slider">{{item.hint}}</p>
              </transition>
            </div>
            <div class="flag" v-show="!flag"> <p  >{{item.hint}}</p></div>

          </li>
        </ul>
      </div>
    </div>
    <!--合作伙伴-->
		<div class="swiper-slide cooperationPartner">
      <transition name="partnerTitle">
        <div class="partnerTitle" v-show="slideControl.partnerTitle">
          <p>合作伙伴</p>
          <!--<img src="./hzhb.png"/>-->
        </div>
      </transition>
      <div class="cooperationPartner-wrap">
          <div class="partnerSlider">
            <ul class="swiper-wrapper">
              <li class="swiper-slide"><img src="./04_logo1.png"/></li>
              <li class="swiper-slide"><img src="./04_logo2.png"/></li>
              <li class="swiper-slide"><img src="./04_logo3.png"/></li>
              <li class="swiper-slide"><img src="./04_logo4.png"/></li>
              <li class="swiper-slide"><img src="./04_logo5.png"/></li>
              <li class="swiper-slide"><img src="./04_logo6.png"/></li>
              <li class="swiper-slide"><img src="./04_logo7.png"/></li>
              <li class="swiper-slide"><img src="./04_logo8.png"/></li>
              <li class="swiper-slide"><img src="./04_logo9.png"/></li>
              <li class="swiper-slide"><img src="./04_logo10.png"/></li>
              <li class="swiper-slide"><img src="./04_logo11.png"/></li>
              <li class="swiper-slide"><img src="./04_logo12.png"/></li>
              <li class="swiper-slide"><img src="./04_logo13.png"/></li>
              <li class="swiper-slide"><img src="./04_logo14.png"/></li>
              <li class="swiper-slide"><img src="./04_logo15.png"/></li>
              <li class="swiper-slide"><img src="./04_logo16.png"/></li>
              <li class="swiper-slide"><img src="./04_logo17.png"/></li>
              <li class="swiper-slide"><img src="./04_logo18.png"/></li>
              <li class="swiper-slide"><img src="./04_logo19.png"/></li>
              <li class="swiper-slide"><img src="./04_logo20.png"/></li>
              <li class="swiper-slide"><img src="./04_logo21.png"/></li>
              <li class="swiper-slide"><img src="./04_logo22.png"/></li>
              <li class="swiper-slide"><img src="./04_logo23.png"/></li>
              <li class="swiper-slide"><img src="./04_logo24.png"/></li>
            </ul>
            <div class="swiper-pagination" ></div>
          </div>
      </div>
      <rj-footer class="footer-wrap"></rj-footer>
    </div>
	</div>
  <!--分页-->
  <div class="swiper-pagination" ></div>
  <skip @skiptop="skip()"></skip>
</div>
</template>

<script>
	import {bus} from '../../common/js/bus.js'
  import rjFooter from '../footer/footer.vue'
  import skip from '../skip/skip.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      setSwiperSlider:{
//        loop:true,
//        autoplay:3000,
//        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction:false,
        paginationType:'custom',
        paginationCustomRender:function (swiper, current, total) {
          var customPaginationHtml = "";
          for(var i = 0; i < total; i++) {
            //判断哪个分页器此刻应该被激活
            if(i == (current - 1)) {
              customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
            }
          }
          return customPaginationHtml;
        }
      },
      bannerFade:false,
      slideControl:{
        riskTitle:false,
        riskSkill:false,
        specialtyTitle:false,
        partnerTitle:false
      },
      specialtyList:[
        {transName:"slider_1",img:"./static/img/03_1_qcjr.png",hint:"汽车金融",slider:false},
        {transName:"slider_2",img:"./static/img/03_2_fcjr.png",hint:"房产金融",slider:false},
        {transName:"slider_3",img:"./static/img/03_3_xezl.png",hint:"小额租赁",slider:false},
        {transName:"slider_4",img:"./static/img/03_4_xexd.png",hint:"小额信贷",slider:false},
        {transName:"slider_5",img:"./static/img/03_5_qyd.png",hint:"企业贷",slider:false},
        {transName:"slider_6",img:"./static/img/03_6_gyljr.png",hint:"供应链金融",slider:false},
        {transName:"slider_7",img:"./static/img/03_7_xffq.png",hint:"消费分期",slider:false},
        {transName:"slider_8",img:"./static/img/03_8_gd.png",hint:"更多",slider:false}
      ],
      flag : true
    }
  },
  methods:{
    riskAfterEnter(){
      this.slideControl.riskSkill = true;
    },
    skip(){
      this.swiper.slideTo(0,1000,false);
    }
  },
  created(){
    var that = this;
    if (document.documentElement.clientWidth < 1080){
      this.flag = false;
    }
  },
  mounted(){

    var that = this, h = that.$refs.serverIcon[0].height ,w = that.$refs.serverIcon[0].width;

    bus.$on('server-index',function(index){
      if (!index){
            that.flag = false;
      }else {
        that.flag = true;
      }

    });
  	this.swiper = new Swiper('.container',{
  		direction:'vertical',
  		pagination:'.swiper-pagination',
  		paginationClickable:true,
      mousewheelControl:true,
      onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        that.bannerFade = true;
      },
      onSlideChangeStart: function(swiper){
        if(swiper.activeIndex == 0){
          bus.$emit('pagination-index',0);
          that.bannerFade = true;
        }else{
          bus.$emit('pagination-index',1);
        }
        if (swiper.activeIndex == 1){
          that.slideControl.riskTitle = true;
        }else{
          that.slideControl.riskTitle = false;
          that.slideControl.riskSkill = false;
        }
        swiper.activeIndex == 2? that.slideControl.specialtyTitle = true : that.slideControl.specialtyTitle = false;
        swiper.activeIndex == 3? that.slideControl.partnerTitle = true : that.slideControl.partnerTitle = false;
//        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      }
  	});
  	//banner
  	this.banner = new Swiper('.banner',that.setSwiperSlider);


  	//合作伙伴

  	this.partnerSlider = new Swiper('.partnerSlider',{
//      loop: true,
      autoplay: 3000,
      observer:true,
      observeParents:true,
      slidesPerColumnFill:'row',
      loopedSlides:8,
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerColumn: 3,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      breakpoints: {
        1365: {
          slidesPerView: 3,
          spaceBetween: 5,
          slidesPerColumn: 3,
        },
        1080: {
          slidesPerView: 2,
          spaceBetween: 5,
          slidesPerColumn: 2,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 5,
          slidesPerColumn: 2,
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
          slidesPerColumn: 2,
        }
      },
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction: false,
      paginationType: 'custom',
      paginationCustomRender:function (swiper, current, total) {
        var customPaginationHtml = "";
        for(var i = 0; i < total; i++) {
          //判断哪个分页器此刻应该被激活
          if(i == (current - 1)) {
            customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
          } else {
            customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
          }
        }
        return customPaginationHtml;
      }

    });
//    partnerResponse.onBeforeResize = function (swiper) {
//      console.log(swiper);
//      console.log('dfdasfdasfa');
//      swiper.updateSlidesSize();
//      swiper.updatePagination();
//      swiper.updateClasses();
//      swiper.update(true);
//
//    };
  },
  components:{rjFooter,skip}
}
</script>


<style scoped lang="stylus">
  @import "../../common/stylus/mixins.styl";
  @import "../../common/stylus/variable.styl"
$transition-specialty(prop)
  .{prop}-enter
    opacity 0
    $translate(0,50px)
  .{prop}-enter-active
    $transition all .8s  cubic-bezier(1.0, 0.5, 0.8, 1.0)
.m_auto
  margin auto
.container
  width 100%
  height 100%
  overflow hidden
  .swiper-slide
    height 100%
    .banner
      height 100%
  .detailInfo  //首页轮播
    .bannerControl
      $table-box()
      $screen-bg("01_background.png")
      $bg-size cover
      background-position center
      $transition-title('bannerFade')
      .bannerFade
        $table-cell()
        img
          height auto
          $screen-1080-img-width()
  .riskControl   //风控
    height 100%
    $screen-bg("02-sy-bg.png")
    $transition-X('riskTitle',0,-200px,1s)
    color #666666
    .title
      $page-title()
      p
        color #000
        $screen-titleSize()
    .riskControl-skill
      $main-center(0,0)
      .m_auto
        $main-center-s()
        @media only screen and (max-width: 1080px)
          width 100%
      .risk-skill
        width 100%
        height 16px
        ul
          font-size 0
          text-align center
          li
            font-size 16px; /*no*/
            padding 0 15px
            display inline-block
      .risk-boost
        margin-top 100px
        @media only screen and (max-width: 768px)
          margin-top $mt20
      $transition-title('riskSkill')
      .risk-list
        display flex
        justify-content space-between
        width 990px
        @media only screen and (max-width: 1080px)
          width 90%
        margin 60px auto 0
        @media only screen and (max-width: 768px)
          margin-top $mt20
        line-height 1.2
        .topBox
          width 330px
          @media only screen and (max-width: 768px)
            text-align center
          ul:first-child
            li
              span
                display inline-block
                padding-right 20px
          ul:last-child
            margin-top $mt100
            @media only screen and (max-width: 768px)
              margin-top $mt20
            li
              span
                display inline-block
                padding-right 20px

        .ballBox
          width 330px
          @media only screen and (max-width: 768px)
            display none
        .bottomBox
          width 330px
          @media only screen and (max-width: 768px)
            text-align center
          ul:first-child
            li
              span
                display inline-block
                padding-right 20px

          ul:last-child
            margin-top $mt100
            @media only screen and (max-width: 768px)
              margin-top $mt20
            li
              span
                display inline-block
                padding-right 20px


  .specialtyServer  //专业服务
    $screen-bg("01_3-bg.png")
    $transition-title('specialtyTitle')
    .specialtyTitle
      $page-title()
      p
        color #ffffff
        $screen-titleSize()
    .specialtyServer-wrap
      $main-center(0,0)
      .specialty-list
        $main-center-s()
        width 1200px
        margin  auto
        font-size 0
        .color-b
          background-color $color-b
        li
          position relative
          display inline-block
          width 285px
          height 300px
          margin 0 20px 20px 0
          $bg-size 100% 100%
          color #ffffff
          img
            opacity 1
          .hintWrap
            position absolute
            left 0
            top 0
            $table-box()
            $transition-specialty('slider_1')
            $transition-specialty('slider_2')
            $transition-specialty('slider_3')
            $transition-specialty('slider_4')
            $transition-specialty('slider_5')
            $transition-specialty('slider_6')
            $transition-specialty('slider_7')
            $transition-specialty('slider_8')
            background-color rgba(0,0,0,0.5)
            p
              $table-cell()
              font-size 30px
              color #ffffff
              @media only screen and (max-width: 1080px)
                font-size 24px
              @media only screen and (max-width: 768px)
                font-size 12px
          .flag
            position absolute
            left 0
            top 0
            width 100%
            height 100%
            font-size 24px
            text-align center
            background-color rgba(0,0,0,0.5)
            p
              position absolute
              width 100%
              left 50%
              top 50%
              $translate(-50%,-50%)
              @media only screen and (max-width: 768px)
                font-size 16px
      @media only screen and (min-width: 1081px) and (max-width: 1365px)
       .specialty-list
         width   800px
         li
           width 185px
           height 194px
           img
            width 100%
      @media only screen and (min-width: 1081px) and (max-height: 880px)
        .specialty-list
          width   800px
          li
            width 185px
            height 194px
            img
              width 100%
              height auto
      @media only screen and (max-width: 1080px)
        .specialty-list
          width   90%
          li
            width 22%
            height auto
            margin 0 4% 4% 0
            img
              width 100%
              height auto
      @media only screen and (max-width: 768px)
        .specialty-list
          width   55%
          li
            width 40%
            font-size 12px
            height auto
            margin 0 20% 2% 0
            &:nth-child(2n)
              margin-right 0
            img
              width 100%
              height auto

  .cooperationPartner  //合作伙伴
    $screen-bg("01_4-bg.png")
    $transition-title('partnerTitle')
    .partnerTitle
      $page-title()
      p
        $screen-titleSize()
    .cooperationPartner-wrap
      $main-center($mainBottom,$mainBottom-s)
      .partnerSlider
        $main-center-s()
        width 1200px
        @media only screen and (max-width: 1365px)
          width 90%
        overflow hidden
        margin auto
        ul
          li
            text-align center
            img
              @media only screen and (max-width: 640px)
                width 100%
        .swiper-pagination
          position relative
</style>


<style>


  /*包裹自定义分页器的div的位置等CSS样式*/
  .swiper-pagination-custom {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: 50px;
    height: 4px;
    display: inline-block;
    background: RGBA(255, 255, 255, 1);
    opacity: .3;
    margin: 0 5px;
  }
   @media only screen and (max-width: 640px) {
     .swiper-pagination-customs{
       width:20px;
       height: 2px;
     }
  }
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    background-color: #01AFEE;
  }

  .partnerSlider .swiper-pagination{
     bottom: inherit;
  }

</style>
