<template>
  <div class="social_item">
      <ul class="social_lists">
      <li>
        <img src="../../assets/logo.png" alt="">
        <div class="social_state">
          <h4>kakakka<span>----（ID:8090）</span></h4>
          <p><span class="anchor">主播<i></i></span><span>粉丝12324人</span></p>
          <p><span class="onLive">正在直播<i></i></span><button class="blacklist">拉黑</button></p>
        </div>
      </li>
      <li>
        <img src="../../assets/logo.png" alt="">
        <div class="social_state">
          <h4>kakakka<span>----（ID:8090）</span></h4>
          <p><span class="anchor">主播<i></i></span><span>粉丝12324人</span></p>
          <p><span class="onLive">正在直播<i></i></span><button class="blacklist">拉黑</button></p>
        </div>
      </li>
      <li>
        <img src="../../assets/logo.png" alt="">
        <div class="social_state">
          <h4>kakakka<span>----（ID:8090）</span></h4>
          <p><span class="anchor">主播<i></i></span><span>粉丝12324人</span></p>
          <p><span class="onLive">正在直播<i></i></span><button class="blacklist">拉黑</button></p>
        </div>
      </li>
      <li>
        <img src="../../assets/logo.png" alt="">
        <div class="social_state">
          <h4>kakakka<span>----（ID:8090）</span></h4>
          <p><span class="anchor">主播<i></i></span><span>粉丝12324人</span></p>
          <p><span class="onLive">正在直播<i></i></span><button class="blacklist">拉黑</button></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
.social_lists{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
      width: 100%;
      li{
        background-color: #f6f6f6;
        height: 88px;
        padding-top: 13px;
        width: 323px;
        padding-left: 12px;
        margin-right: 12px;
        margin-bottom: 12px;
        img{
          height: 62px;
          width: 62px;
        }
      .social_state{
        display: inline-block;
        margin-left: 8px;
        .anchor{
          width: 120px;
          display: inline-block;
          i{
            height: 13px;
            width: 27px;
            display: inline-block;
            background-image: url(../../assets/icon-dengji.png);
            background-size: cover;
            position: relative;
            top:2px;
            left: 4px;
          }
        }
        .onLive{
          display: inline-block;
          width: 120px;
          i{
            height: 15px;
            width: 15px;
            display: inline-block;
            background-image: url(../../assets/icon-zhib.png);
            background-size: cover;
            position: relative;
            top:2px;
            left: 4px;
          }
        }
        .blacklist{
          width: 36px;
          height: 18px;
          background-color: #fcd22c;
          border-radius: 4px;
          color: white;
        }
      }
      }
    }
</style>