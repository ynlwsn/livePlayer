<template>
  <div class="video_box">
    <div class="video_header">
      <div class="zb_info">
        <el-tooltip class="item" effect="light" placement="bottom-start">
          <div slot="content" style="borderRadius:0.1rem;maxWidth:400px">
            <p style="color:#666;minHeight:0.15rem;lineHeight:0.15rem">用户昵称：{{nickname}}</p>
            <p style="color:#666;minHeight:0.15rem;lineHeight:0.15rem">我的昵称：{{myname}}</p>
            <p style="color:#666;minHeight:0.2rem;lineHeight:0.2rem">
              修改昵称：
              <input type="text" placeholder="输入3-10个字符" style="minHeight:0.15rem;borderRadius:0.075rem;border:1px solid #eee">
              <button style="color:white;background:#d03599;padding:0.025rem;borderRadius:6px;">确认</button>
            </p>
            <p style="color:#666;minHeight:0.15rem;lineHeight:0.15rem">我的签名：{{sign}}</p>
            <p style="color:#666;minHeight:0.2rem;lineHeight:0.2rem">
              修改签名：
              <input type="text" placeholder="最多10个字符" style="minHeight:0.15rem;borderRadius:0.075rem;border:1px solid #eee">
              <button style="color:white;background:#d03599;padding:0.025rem;borderRadius:6px;">确认</button>
            </p>
          </div>
          <img src="../../assets/avatar_test.png" alt class="ulogo" @click="changePersonal" />
        </el-tooltip>
        <div class="identity">
          <div class="zb_id">
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
          <el-tooltip class="item" effect="light" placement="bottom-end">
            <div slot="content">
              <img src="../../assets/wx01.png" alt @click="share" style="cursor: pointer;" />
              <img src="../../assets/icon-qq.png" alt @click="share" style="cursor: pointer;" />
              <img src="../../assets/icon_kj.png" alt @click="share" style="cursor: pointer;" />
              <img src="../../assets/icon-weibo.png" alt @click="share" style="cursor: pointer;" />
            </div>
            <!-- <el-button>下右</el-button> -->
            <span>分享</span>
          </el-tooltip>
        </div>
        <div class="operation_item">
          <i class="el-icon-warning-outline"></i>
          <span @click="dialogFormVisible = true">举报</span>
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
      <div class="video_bar">
          <div class="playOrPause" @click="changeState">
            <i :class="play"></i>
          </div>
          <div class="voice">
            <i :class="voice" @click="changeVoice"></i>
            <el-slider v-model="volume" :show-tooltip="false"></el-slider>
          </div>
          <div class="full_screen">
            <i class="el-icon-full-screen"@click="fullScreen"></i>
          </div>
        </div>
    </div>
    <div class="gift">
      <div class="gift_box">
        <ul>
          <li v-for="(item,index) in 9">{{index}}</li>
        </ul>
        <i class="watchMore" :class="icon_row" @click="more"></i>
      </div>
      <div class="gift_bag showMore" v-show="MoreGift">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="普通" name="first">
            <ul class="moreGifts">
              <li v-for="(item,index) in 29">{{index}}</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="豪华" name="second">
            <ul class="moreGifts">
              <li v-for="(item,index) in 29">{{index}}</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="背包" name="third">
            <ul class="moreGifts">
              <li v-for="(item,index) in 29">{{index}}</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
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
    <!-- 举报 -->
    <el-dialog title="举报" :visible.sync="dialogFormVisible">
      <div class="report">
        <div class="report_box">
          <p>
            <span style="color:#ff3399">*</span>举报原因：
          </p>
          <div>
            <el-radio v-model="radio" label="1">骗取点击</el-radio>
            <el-radio v-model="radio" label="2">低俗色情</el-radio>
            <el-radio v-model="radio" label="3">侮辱谩骂</el-radio>
            <el-radio v-model="radio" label="4">引人不适</el-radio>
            <el-radio v-model="radio" label="5">盗用他人作品</el-radio>
            <el-radio v-model="radio" label="6">任性抱打不平，就爱举报</el-radio>
            <el-radio v-model="radio" label="7">
              其他
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-radio>
          </div>
        </div>
        <div class="report_box">
          <p>
            <span style="color:#ff3399">*</span>举报证据：
          </p>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :class="{hide:hideUpload}"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
          <p>选择一张系统截图作为证据或者上传自己的截图</p>
        </div>
        <div class="report_box">
          <p>
            <span style="color:#ff3399">*</span>举报说明：
          </p>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer" style="textAlign:center">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "VideoBox",
  data() {
    return {
      play: "video-play",
      voice: "voices",
      volume:100,
      nickname: "34546456",
      myname: "nick",
      sign: "带啥不焚枯食淡金风科技水电费圣诞节电饭锅电饭锅电饭锅",
      activeName: "second",
      MoreGift: false,
      radio: "1",
      icon_row: "el-icon-arrow-up",
      textarea: "",
      hideUpload: false,
      limitCount: 1,
      dialogFormVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      input: "",
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
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
      }
    };
  },
  methods: {
    more() {
      if (this.MoreGift) {
        this.MoreGift = false;
        this.icon_row = "el-icon-arrow-up";
      } else {
        this.MoreGift = true;
        this.icon_row = "el-icon-arrow-down";
      }
    },
    changePersonal() {
      this.$router.push("/personal");
    },
    // 分享
    share() {
      console.log(1232);
    },
    changeProduct(event) {
      this.ProductActive = event.target.value; //获取option对应的value值
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.hideUpload = file.length >= this.limitCount;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      this.hideUpload = file.length >= this.limitCount;
    },
    handleChange(file, fileList) {
      this.hideUpload = fileList.length >= this.limitCount;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeState() {
      if (this.play === "video-play") {
        this.play = "video-pause";
        this.$refs.videoPlayer.player.pause();
      } else {
        this.play = "video-play";
        this.$refs.videoPlayer.player.play();
      }
    },
    changeVoice() {
      if (this.voice === "voices") {
        this.voice = "silent";
        this.$refs.videoPlayer.player.volume(0);
        this.value1 = 0;
      } else {
        this.voice = "voices";
        this.volume = 30;
        this.$refs.videoPlayer.player.volume(this.volume);
        this.value1 = this.volume;
      }
    },
    fullScreen(){
      this.$refs.videoPlayer.player.requestFullscreen()
    }
  }
};
</script>
<style>
.hide .el-upload--picture-card {
  display: none;
}
</style>
<style scoped lang="less">
@import "../css/videoBox.less";
</style>  