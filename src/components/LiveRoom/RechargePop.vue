<template>
  <div class="recharge_pop">
    <h3 class="pop_header">
      六颜充值
      <i class="el-icon-close" style="float:right"></i>
    </h3>
    <div class="pop_content">
      <div class="row">
        <p>充值账户：</p>
        <span>sdkfhskdhf</span>
      </div>
      <div class="row">
        <p>账户余额：</p>
        <span>sdkfhskdhf</span>
      </div>
      <div class="row">
        <p>充值金额</p>
        <div class="re_box">
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
          <div class="re_item">
            <p>100星钻</p>
            <p>￥10元</p>
          </div>
        </div>
      </div>
      <div class="row">
        <p>应付金额</p>
        <span>sdkfhskdhf</span>
      </div>
      <div class="row pay_place">
        <p>支付平台:</p>
        <div class="pay_box">
          <div class="pay_item">
            <img src="../../assets/zfb.png" alt />
          </div>
          <div class="pay_item">
            <img src="../../assets/icon-weixin.png" alt />
          </div>
          <div class="pay_item">
            <img src="../../assets/icon-yinlian.png" alt />
          </div>
        </div>
      </div>
    <div class="pay_once">
      <button class="pay_btn">立即充值</button>
      <p>
        充值代表已阅读并同意
        <span>《充值服务协议》</span>
      </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RechargePop"
};
</script>
<style scoped lang="less">
.recharge_pop {
  width: 462px;
  height: 423px;
  background-color: #ffffff;
  .pop_header {
    height: 29px;
    background-color: #f0f2f3;
    line-height: 29px;
    padding-left: 12px;
    i {
      top: 6px;
      right: 4px;
    }
  }
  .pop_content {
    height: 391px;
    padding: 12px;
    padding-right: 6px;
    .row {
      min-height: 30px;
      p {
        width: 80px;
        float: left;
      }
      span {
        color: #ff3399;
      }
    }
    .re_box {
      float: left;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      .re_item {
        width: 82px;
        height: 54px;
        text-align: center;
        padding-top: 8px;
        border-radius: 8px;
        border: solid 1px #ff4ca5;
        margin-right: 6px;
        margin-bottom: 10px;
      }
    }
  }
  .pay_place {
    margin-top: 20px;
    .pay_box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .pay_item {
        width: 82px;
        height: 54px;
        border-radius: 8px;
        border: solid 1px #ccc;
        margin-right: 12px;
        text-align: center;
        padding-top: 10px;
      }
    }
  }
  .pay_once{
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 10px;
      p{
          font-size: 12px;
          color:#666;
          line-height: 26px;
          span{
              color: #ff3399;
          }
        }
  }
  .pay_btn{
      width: 80px;
        height: 30px;
        background-color: #ff4ca5;
        color: white;
        margin-top: 10px;
  }
}
</style>