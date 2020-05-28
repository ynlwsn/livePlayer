<template>
  <div class="signed">
    <div class="header">
      {{header}}
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-close"></i>
    </div>
    <div class="signed_content">
      <div class="want_signed" v-if="step === 1">
        <div class="signed_info">
          <div class="left">
              <img src="../../assets/avatar_test.png" alt="">
              <p><i></i></p>
          </div>
          <div class="right">
            <h4>六颜文化</h4>
            <p>
              家族徽章：
              <i></i>
            </p>
            <p>家族成员数：605</p>
            <p>族长：super族长</p>
          </div>
        </div>
        <div class="brief">
          <h5>简介</h5>
          <p>这是一条简介</p>
        </div>
      </div>
      <div class="signed_name" v-else-if="step === 2">
          <p>家族名称：六颜文化</p>
          <p>家族抽成比例：40%</p>
          <p>签约说明 ></p>
      </div>
      <div class="rate" v-else-if="step === 3">
          <img src="../../assets/icon-jindu.png" alt="">
          <h4>等待家族长审核中</h4>
          <p>如管理员在10个工作日内未接受审核，视为不通过，可再次发起创建家族申请</p>
          <div>
              <h5>家族名称：六颜文化</h5>
              <h5>家族抽成比例：1%</h5>
          </div>
      </div>
      <div class="explain" v-else-if="step === 4">
          <p>这是说明</p>
      </div>
      <button>{{doBtn}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signed", 
  data() {
    return {
      doBtn: "我要签约",
      step:4,
      header:'家族主页'
    };
  }
};
</script>
<style scoped lang="less">
.signed {
  width: 518px;
  height: 422px;
  margin-top: 64px;
  background-color: #ffffff;
  border-radius: 8px;
  .header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: white;
    background-image: linear-gradient(270deg, #d06dcc 0%, #fdc8cc 100%);
    border-radius: 8px 8px 0px 0px;
    i {
      top: 12px;
      float: right;
      right: 10px;
      &:first-child{
          float: left;
          left: 10px;
      }
    }
  }
  .signed_content {
    height: 382px;
    padding:15px 22px 15px 22px;
    button {
      width: 162px;
      height: 36px;
      background-image: linear-gradient(270deg, #d06dcc 0%, #fdc8cc 100%);
      border-radius: 18px;
      color: white;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .want_signed{
        .signed_info{
            height: 150px;
            .left{
                float: left;
                width: 187px;
                height: 108px;
                background-color: #000;
                text-align: center;
                padding-top: 8px;
                margin-right: 17px;
                img{
                   width: 50px;
                   height: 50px; 
                }
            }
            .right{
                display: inline-block;
                h4{
                    font-size: 18px;
                    line-height: 30px;
                }
                p{
                    line-height: 26px;
                    color: #999;
                }
            }
        }
    }
    .signed_name{
        display: flex;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
        p{
            width: 45%;
            font-size: 18px;
            font-weight: 800;
            line-height: 60px;
        }
    }
    .rate{
        text-align: center;
        p{
            color: #ccc;
            padding:0 45px;
        }
        div{
            margin-top: 40px;
            h5{
                display: inline-block;
                &:first-child{
                    float: left;
                }
                &:last-child{
                    float: right;
                }
            }
        }
    }
  }
}
</style>