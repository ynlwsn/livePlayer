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
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
