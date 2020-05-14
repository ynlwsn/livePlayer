<template>
  <div class="video_box">
    <div class="video_header">
      <div class="zb_info">
        <img src="../../assets/logo.png" alt class="ulogo" @click="changePersonal"/>
        <div class="identity">
          <div>
            <div class="identity_txt">
              <p>桃干干</p>
              <span>ID：34354</span>
            </div>
            <button class="identity_btn">+ 关注</button>
          </div>
          <div class="tag_box">
              <img src="../../assets/icon-jiazu.png" alt class="tag" />
              <img src="../../assets/icon-jiazu.png" alt class="tag" />
              <img src="../../assets/icon-jiazu.png" alt class="tag" />
              <img src="../../assets/icon-jiazu.png" alt class="tag" />
          </div>
        </div>
      </div>
      <div class="operation">
        <div class="operation_item">
          <i class="el-icon-share"></i>
          <span>分享</span>
        </div>
        <div class="operation_item">
          <i class="el-icon-warning-outline"></i>
          <span>举报</span>
        </div>
      </div>
    </div>
    <div class="video_content">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
    <div class="gift">
      <div class="gift_box">
        <ul ref="moreGift">
          <li v-for="index in 100"></li>
        </ul>
      </div>
      <div class="watchMore" @click="more">></div>
      <div class="send_gift">
        <span>
          数
          <br />量
        </span>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="send_gift">
        <span>
          赠
          <br />送
        </span>
        <select>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <button>充值</button>
      <button>赠送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "4:3", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
        controls: false
      },
      ind: 0
    };
  },
  methods: {
    more() {
      this.ind++;
      this.$refs.moreGift.style.marginLeft = -(this.ind * 58) + "px";
    },
    changePersonal(){
      this.$router.push("/personal");
    }
  }
};
</script>
<style scoped lang="less">
@import "../css/videoBox.less";
</style>  