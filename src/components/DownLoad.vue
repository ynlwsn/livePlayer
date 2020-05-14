<template>
  <div class="down_load">
    <div class="ios_down">
      <div class="down_me">
        <h2>六颜直播iPhone版</h2>
        <div class="down_name">
          <i></i>
          <span>IOS版</span>
        </div>
        <img src="../assets/ios.png" alt />
        <p>扫码下载六颜直播APP</p>
        <p>立刻下载即可与我们直播互动哦</p>
      </div>
    </div>
    <div class="andriod_down">
        <div class="down_me">
        <h2>六颜直播Andriod版</h2>
        <div class="down_name">
          <i></i>
          <span>Andriod版</span>
        </div>
        <img src="../assets/anzhuo.png" alt />
        <p>扫码下载六颜直播APP</p>
        <p>立刻下载即可与我们直播互动哦</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped lang="less">
.down_load {
  width: 100%;
    // 下载
  .down_me {
    position: absolute;
    text-align: center;
    h2 {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      color: rgba(253, 251, 251, 1);
      line-height: 86px;
    }
    .down_name {
      width: 172px;
      height: 32px;
      margin:0 auto;
      background: rgba(255, 255, 255, 1);
      border-radius: 16px;
      text-align: center;
      margin-top:90px;
      margin-bottom: 15px;
      i {
        height: 24px;
        width: 19px;
        display: inline-block;
        background-size: cover;
        position: relative;
        top:4px;
        margin-right: 4px;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
    img{
        width:227px;
        height:227px;
        border-radius:17px;
    }
    p{
        color: #666;
        font-size: 16px;
    }
  }
  .ios_down {
    height: 855px;
    width: 100%;
    background-image: url(../assets/downBg01.jpg);
    background-size: cover;
    position: relative;
    .down_me{
        top:183px;
        right: 495px;
        i{
        background-image: url(../assets/icon-pingguo.png);
        }
    }
  }
  .andriod_down {
    height: 919px;
    width: 100%;
    background-image: url(../assets/downBg02.jpg);
    background-size: cover;
    position: relative;
    .down_me{
        top:210px;
        left: 322px;
        i{
        width: 24px;
        background-image: url(../assets/icon-anzhuo.png);
        }
    }
  }
}
</style>