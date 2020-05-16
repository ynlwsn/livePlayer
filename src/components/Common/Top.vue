<template>
  <div class="top-nav">
    <img src="../../assets/logo.png" alt class="logo" @click="back_home" />
    <div class="container">
      <ul class="nav_left">
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/live">直播</router-link>
        </li>
        <li>
          <router-link to="/short-player">短视频</router-link>
        </li>
        <li @mouseenter="showSelect" @mouseleave="hiddenSelect">
          <div>排行<i class="el-icon-caret-bottom"></i></div>
          <div class="rank_select" v-show="showMore">
            <router-link tag="p" to="/actual-rank">实时排行榜</router-link>
            <router-link tag="p" to="/home-rank">家族排行榜</router-link>
          </div>
        </li>
        <li>
          <router-link to="/down_load">下载</router-link>
        </li>
      </ul>
      <div class="nav_right">
        <div class="search-id">
          <input type="text" placeholder="请输入用户名或用户ID" />
          <i></i>
        </div>
        <div class="history" @mouseenter="isShowHistory" @mouseleave="hiddenHistory">
          <i class="el-icon-time"></i>
          <b>历史</b>
          <div class="history_box" v-show="showHistory">
            <i class="top-icon"></i>
            <ul class="visited">
              <li>
                <img src="../../assets/money/icon-qiang.png" alt />
                <div class="vname">
                  <span>123</span>
                  <i></i>
                </div>
                <div class="state">
                  <span>直播中</span>
                  <i></i>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt />
                <div class="vname">
                  <span>123</span>
                  <i></i>
                </div>
                <div class="state">
                  <span>直播中</span>
                  <i></i>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt />
                <div class="vname">
                  <span>123</span>
                  <i></i>
                </div>
                <div class="state">
                  <span>直播中</span>
                  <i></i>
                </div>
                <button class="follow">关注</button>
              </li>
            </ul>
          </div>
        </div>
        <el-button class="register" @click="showDialog">注册</el-button>
        <el-button class="login">登陆</el-button>
        <img :src="mine" alt class="mine_img" @click="personalCenter"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Dialog:false,
      mine: require("../../assets/logo.png"),
      input: "",
      current: "0",
      showHistory: false,
      showMore:false
    };
  },
  components:{
  },
  methods: {
    // 点击logo返回首页
    back_home() {
      this.$router.push("/");
    },
    isShowHistory() {
      this.showHistory = true;
    },
    hiddenHistory() {
      this.showHistory = false;
    },
    personalCenter(){
      this.$router.push('/personal')
    },
    showDialog(){
      this.$store.commit('toggleMask')
    },
    showSelect(){
      this.showMore = true
    },
    hiddenSelect(){
      this.showMore = false
    }
  }
};
</script>
<style scoped lang="less">
@import '../css/top.less';
</style>