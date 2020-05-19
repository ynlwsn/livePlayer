<template>
  <div class="withDraw">
    <div class="title_">
      <h4>账户提现</h4>
      <span>总星光：3246237</span>
      <span>总星光：3246237</span>
      <router-link tag="div" to="/mine/record" class="w_history">提现记录</router-link>
    </div>
    <div class="tx_input">
      <h5>星光兑换RMB</h5>
      <div class="inputLine">
        <span class="left">输入要体现的星光数：</span>
        <div class="right">
          <input type="text" />
        </div>
      </div>
      <div class="inputLine">
        <span class="left">可到账金额：</span>
        <span class="rmb right">￥4343434</span>
      </div>
      <div class="inputLine">
        <span class="left">提现账户：</span>
        <div class="right">
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <router-link tag="span" to="/mine/account">账号管理</router-link>
        </div>
          <button class="tx_Btn">提现</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WithDraw",
  data() {
    return {
      value: ""
    };
  },
  methods:{
  }
};
</script>
<style scoped lang="less">
.withDraw {
  width: 100%;
  height: auto;
  margin: 0 auto;
  .title_ {
    height: 62px;
    border-bottom: 1px solid #ccc;
    h4 {
      font-size: 20px;
      font-weight: 800;
      line-height: 62px;
      padding-left: 81px;
      display: inline-block;
      margin-bottom: 24px;
    }
    span {
      margin-left: 41px;
    }
    margin-bottom: 22px;
  }
  .w_history {
    float: right;
    margin-top: 22px;
    margin-right: 81px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #ff3399;
    }
  }
  .tx_input {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    h5 {
      text-align: center;
      font-size: 16px;
      margin-bottom: 24px;
    }
    .inputLine {
      display: block;
      height: 44px;
      line-height: 44px;
      width: 100%;
      .left {
        width: 30%;
        float: left;
        text-align: right;
      }
      input {
        width: 266px;
        height: 32px;
        border-radius: 6px;
        border: solid 1px #999999;
      }
      .right {
        width: 60%;
        text-align: left;
        float: left;
        select{
          width: 266px;
          height: 32px;
          border-radius: 6px;
          border: solid 1px #999999;
        }
        .account{
          float: right;
          cursor: pointer;
          &:hover{
            color: #ff3399;
          }
        }
      }
      .rmb {
        color: red;
        font-weight: 600;
      }
    } 
  }
  .tx_Btn{
        width: 174px;
        height: 42px;
        margin:0 auto;
        background-image: linear-gradient(270deg, 
          #d981cc 0%, 
          #fcced2 100%);
          color: white;
          margin-top: 20px;
      }
}
</style>