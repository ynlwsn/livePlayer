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
          <a style="cursor: pointer;">排行<i class="el-icon-caret-bottom"></i></a>
          <div class="rank_select" v-show="showMore">
            <router-link tag="p" to="/actual-rank/zbrank">实时排行榜</router-link>
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
            </ul>
          </div>
        </div>
        <el-button class="register" @click="showDialog('register')">注册</el-button>
        <el-button class="login" @click="showDialog('login')">登陆</el-button>
          <img :src="mine" alt class="mine_img" @click="personalCenter" @mouseenter="showOwn"/>
          <div class="ownCenter" v-show="ownCenter">
            <div class="own_box" @mouseleave="hiddenOwn">
              <div class="own_top">
                <img src="../../assets/avatar_test.png" alt="">
                <h3>逃赶赶</h3>
                <p>(ID:234732984)</p>
                <p><i class="dj"></i><span>排行：100+</span></p>
              </div>
              <div class="own_content">
                <div><i class="i_live"></i><p>直播房间</p></div>
                <div><i class="i_own"></i><p>个人主页</p></div>
                <div><i class="i_recharge"></i><p>充值商城</p></div>
                <div><i class="i_rich"></i><p>账户资产</p></div>
                <div><i class="i_rc"></i><p>我的房管</p></div>
                <div><i class="i_home"></i><p>我的家族</p></div>
                <div><i class="i_fouce"></i><p>关注的人</p></div>
                <div><i class="i_fans"></i><p>粉丝守护</p></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Dialog:false,
      mine: require("../../assets/avatar_test.png"),
      input: "",
      current: "0",
      showHistory: false,
      showMore:false,
      signIn:'',
      ownCenter:false
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
      this.$router.push('/mine')
    },
    showDialog(val){
      this.$store.commit('toggleMask')
      this.signIn = val
      this.$emit('signIn',this.signIn)
    },
    showSelect(){
      this.showMore = true
    },
    hiddenSelect(){
      this.showMore = false
    },
    showOwn(){
      this.ownCenter = true
    },
    hiddenOwn(){
      this.ownCenter = false
    }
  }
};
</script>
<style scoped lang="less">
@import '../css/top.less';
</style>