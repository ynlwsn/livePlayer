import Vue from 'vue'
import Router from 'vue-router'
const HomePage = resolve => require(['@/components/Home/HomePage'],resolve)
const Live = resolve => require(['@/components/Live'],resolve)
const ShortPlayer  = resolve => require(['@/components/ShortPlayer'],resolve)
const HomeRank = resolve => require(['@/components/rank/HomeRank'],resolve)
const ActualRank = resolve => require(['@/components/rank/ActualRank'],resolve)
const DownLoad = resolve => require(['@/components/DownLoad'],resolve)
const LiveRoom = resolve => require(['@/components/LiveRoom/LiveRoom'],resolve)
const Actions = resolve => require(['../components/Home/ActivityPage.vue'],resolve)
const Personal= resolve=>require(['@/components/Personal'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'HomePage' }},
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path:'/actions',
      name:'Actions',
      component:Actions
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/short-player',
      name: 'ShortPlayer',
      component: ShortPlayer
    },
    {
      path: '/home-rank',
      name: 'HomeRank',
      component: HomeRank
    },
    {
      path: '/actual-rank',
      name: 'ActualRank',
      component: ActualRank
    },
    {
      path: '/down_load',
      name: 'DownLoad',
      component: DownLoad
    },
    {
      path: '/live_room',
      name: 'LiveRoom',
      component: LiveRoom
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
  ]
})
