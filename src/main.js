// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios' 
import Vuex from 'vuex'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css'//引入element-ui样式
import 'lib-flexible' //适配配置


// vue-video-player
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls' //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VideoPlayer);
/* eslint-disable no-new */
// 避免每次打开页面的时候不是顶部
router.afterEach((to,from,next) =>{
  window.scrollTo(0,0)
})
// 404跳转配置
router.beforeEach((to,from,next)=>{
  if(to.matched.length === 0){
    from.name ? next({
      name:from.name
    }):next('/404')
  }else{
    next()
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
