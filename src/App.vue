<template>
  <div id="app">
    <web-head></web-head>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <web-side></web-side>
  </div>
</template>

<script>
  import webHead from './components/head/head.vue'
  import webSide from './components/side/side.vue'
  import 'swiper-animate/animate.min.css'
  import 'swiper/dist/css/swiper.min.css'
  import swiper from 'swiper'
  import swiperAnimate from 'swiper-animate'

export default {
  name: 'App',
  components:{webHead,webSide}
}
</script>

<style>
#app{
	width: 100%;
	height: 100%;
}
.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 12px;
}
.swiper-pagination-bullet{
  width: 7px;
  height: 7px;
}
.swiper-container-vertical>.swiper-pagination-bullets{
  left: 30px;
  width: 10%;
}
@media only screen and (max-width: 768px){
  .swiper-container-vertical>.swiper-pagination-bullets{
    left: 5px;
  }
  .swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{
    margin-left: 0px;
  }
}

</style>
