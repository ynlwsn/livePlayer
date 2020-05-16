<template>
  <div class="top_recommend">
    <div class="container">
      <div class="video_left">
        <div class="enter_room">
          <router-link to='/live_room'>进入直播间</router-link>
        </div>
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
          @play="onPlayerPlay($event)"
           @pause="onPlayerPause($event)"
        ></video-player>
        <div class="video_bar">
          <div class="playOrPause" @click="changeState">
            <i :class="play" ></i>
          </div>
          <div class="voice">
            <i :class="voice" @click="changeVoice"></i>
            <el-slider v-model="value1"></el-slider>
          </div>
          <button class="seeMore" @click="enterLiveRoom">点我进入直播间</button>   
        </div>
      </div>
      <div class="video_right">
        <div class="video_box"></div>
        <div class="video_box"></div>
        <div class="video_box"></div>
        <div class="video_box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopRecommend",
  data() {
    return {
      value1:30,
      play:'video-play',
      voice:'voice',
      volume:30,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL", //播放类型，如果为rtmp配置为rtmp/mp4
            src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8" //直播流地址
          }
        ],
        poster: "../../assets/downBg01.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controls:false
      }
    };
  },
  watch:{
    // 控制视频音量
    value1(nval){
      this.$refs.videoPlayer.player.volume(nval)
      this.volume = nval
    }
  },
  methods: {
    onPlayerPlay($event) {},
    onPlayerPause($event) {},
    // 播放暂停
    changeState(){
      if(this.play === 'video-play'){
        this.play = 'video-pause'
        this.$refs.videoPlayer.player.pause()
      }else{
        this.play = 'video-play'
        this.$refs.videoPlayer.player.play()
      }
    },
    changeVoice(){
       if(this.voice === 'voice'){
        this.voice = 'silent'
        this.$refs.videoPlayer.player.volume(0)
        this.value1 = 0
      }else{
        this.voice = 'voice'
        this.volume = 30
        this.$refs.videoPlayer.player.volume(this.volume)
        this.value1 = this.volume
      }
    },
    enterLiveRoom(){
      this.$router.push('/live_room')
    }
  }
};
</script>
<style scoped lang="less">
@import '../css/recommend.less';
</style>