<template>
  <div class="float_win">
    <ul>
      <li @mouseenter="showBlock" @mouseleave="hiddenBlock">
        <img src="../../assets/aside/wx.png" alt />
        <p>公众号</p>
        <div class="float_content" ref="float" :class="{isShowBlock:isShowBlock}">
          <p>扫一扫</p>
          <p>关注公众号</p>
          <img src="../../assets/public.png" alt />
        </div>
      </li>
      <li @click="toDown">
        <img src="../../assets/aside/down.png" alt />
        <p>下载</p>
      </li>
      <li>
        <el-tooltip class="item" effect="light" placement="left-start">
            <div slot="content" style="textAlign:center;lineHeight:20px"><i class="el-icon-phone-outline"></i><br/>025-85323955</div>
            
            <p><img src="../../assets/aside/icon-kefu.png" alt style="display:block;marginLeft:0.06rem"/>客服</p>
        </el-tooltip>
      </li>
      <router-link tag="li" to="/family">
        <img src="../../assets/aside/icon-gh.png" alt />
        <p>家族</p>
      </router-link>
      <li>
        <img src="../../assets/aside/icon-help.png" alt />
        <p>帮助</p>
      </li>
      <li @click="backTop">
        <img src="../../assets/aside/icon-back.png" alt />
        <p>顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FloatWin",
  data() {
    return {
      isShowBlock: false
    };
  },
  methods: {
    showBlock() {
      this.isShowBlock = true;
    },
    hiddenBlock() {
      this.isShowBlock = false;
    },
    backTop() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    toDown() {
      this.$router.push("/down_load");
    }
  }
};
</script>
<style scoped lang="less">
.float_win {
  position: fixed;
  right: 0;
  top: 328px;

  ul {
    height: 330px;
    width: 55px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #ccc;
    li {
        cursor: pointer;
      height: 55px;
      text-align: center;
      position: relative;
      &:hover {
        color: white;
        background-image: linear-gradient(to right, #ffcccc, #cc66cc);
      }
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
  .float_content {
    padding: 20px;
    height: auto;
    width: auto;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: 55px;
    border-radius: 12px;
    display: none;
    p {
      text-align: center;
      color: #000;
      line-height: 20px;
    }
    img {
      height: 77px;
      width: 77px;
    }
  }
  .isShowBlock {
    display: block;
  }
}
</style>