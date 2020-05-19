<template>
  <div class="myrecharge container">
    <div class="aside">
      <div class="_title">钻石充值</div>
    </div>
    <div class="recharge_content">
      <div class="pay_box">
        <div class="row">
          <div style="float:left">
          <p>当前充值账号：</p>
          <span>kakaka(ID:23423)</span>
          </div>
          <div style="float:right">
          <p>您的星钻余额：</p>
          <span>3243</span>
          </div>
        </div>
        <div class="row">
          <p>充值数量：</p>
          <div class="amount_choice">
            <div class="amount">
              <span>600星钻</span>
              <span>￥0.01</span>
            </div>
            <div class="amount">
              <span>600星钻</span>
              <span>￥0.01</span>
            </div>
            <div class="amount">
              <span>600星钻</span>
              <span>￥0.01</span>
            </div>
            <div class="amount">
              <span>600星钻</span>
              <span>￥0.01</span>
            </div>
            <div class="amount">
              <span>600星钻</span>
              <span>￥0.01</span>
            </div>
          </div>
        </div>
        <div class="row">
          <p>应付金额：</p>
          <span style="color:red;fontWeight:800">0.11</span> 元
        </div>
        <div class="row">
          <p>支付平台：</p>
          <div class="amount_choice">
            <div class="amount"><img src="../../assets/zfb.png" alt=""></div>
            <div class="amount"><img src="../../assets/icon-weixin.png" alt=""></div>
            <div class="amount"><img src="../../assets/icon-yinlian.png" alt=""></div>
          </div>
          <div class="pay">
            <div class="pay_choice"></div>
          </div>
        </div>
        <div class="row_pay">
          <button class="payBtn">立即支付</button>
          <div>
            充值代表已阅读并同意
            <span>《充值服务协议》</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyRecharge"
};
</script>
<style scoped lang="less">
.myrecharge {
  height: 944px;
  padding-top: 22px;
  margin-bottom: 46px;
  .aside {
    width: 206px;
    height: 944px;
    float: left;
    margin-right: 36px;
    background-color: #ffffff;
    ._title {
      width: 206px;
      height: 52px;
      color: white;
      text-align: center;
      line-height: 52px;
      font-weight: 800;
      background-image: linear-gradient(270deg, #ffd8d9 0%, #d06fcc 100%);
    }
  }
  .recharge_content {
    width: 1194px;
    height: 944px;
    float: left;
    background-color: #ffffff;
    .pay_box {
      width: 70%;
      margin: 0 auto;
      margin-top: 44px;
    }
    .row {
      margin-bottom: 40px;
      display: block;
      min-height: 30px;
      p {
        float: left;
        width: 140px;
        height: 21px;
        font-size: 16px;
        color: #666666;
      }
      .amount_choice {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
        .amount {
          cursor: pointer;
          width: 193px;
          height: 84px;
          padding-top: 20px;
          border-radius: 6px;
          border: solid 1px #ff4ca5;
          margin-right: 20px;
          margin-bottom: 20px;
          font-weight: 800;
          text-align: center;
          &:hover{
              color: #ff3399;
            }
          span{
            text-align: center;
            display: block;
          }
          img{
            
          }
        }
      }
    }
    .row_pay{
      text-align: center;
      span{
        color: #ff3399;
        cursor: pointer;
      }
    }
    .payBtn {
      width: 181px;
      height: 42px;
      background-image: linear-gradient(270deg, #ffd8d9 0%, #d06fcc 100%);
      color: white;
      margin-bottom: 10px;
    }
  }
}
</style>