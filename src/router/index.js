import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import proServer from '@/components/productServer/product'
import aboutUs from '@/components/aboutUs/aboutUs'
import call from '@/components/call/call'
import error from '@/components/error/error'
import finance from '@/components/finance/finance'
import cooperation from '@/components/cooperation/cooperation'
import newsCenter from '@/components/newsCenter/newsCenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/productServer',
      name: 'proServer',
      component: proServer
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/call',
      name: 'call',
      component: call
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: error
    },
    {
      path: '/newsCenter',
      name: 'newsCenter',
      component: error
    }
  ]
})
