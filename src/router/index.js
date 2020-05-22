import Vue from 'vue'
import Router from 'vue-router'
const HomePage = resolve => require(['@/components/Home/HomePage'], resolve)
const Live = resolve => require(['@/components/Live'], resolve)
const ShortPlayer = resolve => require(['@/components/ShortPlayer'], resolve)
const HomeRank = resolve => require(['@/components/rank/HomeRank'], resolve)
const ActualRank = resolve => require(['@/components/rank/ActualRank'], resolve)
const DownLoad = resolve => require(['@/components/DownLoad'], resolve)
const LiveRoom = resolve => require(['@/components/LiveRoom/LiveRoom'], resolve)
const Actions = resolve => require(['../components/Home/ActivityPage.vue'], resolve)
const Personal = resolve => require(['@/components/Personal'], resolve)
const Mine = resolve => require(['@/components/Mine/Mine'], resolve)
const Withdraw = resolve => require(['@/components/Mine/Withdraw'], resolve)
const MyRecharge = resolve => require(['@/components/Mine/MyRecharge'], resolve)
const Account = resolve => require(['@/components/Mine/Account'], resolve)
const Record = resolve => require(['@/components/Mine/Record'], resolve)
const ZbRank = resolve => require(['@/components/rank/ZbRank'], resolve)
const YhRank = resolve => require(['@/components/rank/YhRank'], resolve)
const Family = resolve => require(['@/components/Family'], resolve)
// const Pk = resolve => require(['@/components/LiveRoom/'], resolve)


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'HomePage' } },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/actions',
      name: 'Actions',
      component: Actions
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
      component: ActualRank,
      children: [
        {
          path: 'zbrank',
          name: 'ZbRank',
          component: ZbRank,
        },
        {
          path: 'yhrank',
          name: 'YhRank',
          component: YhRank,
        },
      ]
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
    {
      path: '/family',
      name: 'Family',
      component: Family
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      children: [
        {
          path: 'withdraw',
          name: 'Withdraw',
          component: Withdraw,
        },
        {
          path: 'account',
          name: 'Account',
          component: Account,
        },
        {
          path: 'record',
          name: 'Record',
          component: Record,
        },
      ]
    },
    {
      path: '/myrecharge',
      name: 'MyRecharge',
      component: MyRecharge,
    },
    // {
    //   path: '/pk',
    //   name: 'Pk',
    //   component: Pk,
    // },
  ]
})
