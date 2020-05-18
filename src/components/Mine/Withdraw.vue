<template>
  <div class="withDraw">
    <div class="title_">
      <h4>账户体现</h4>
      <span>总星光：3246237</span>
      <span>总星光：3246237</span>
      <div class="w_history">提现记录</div>
    </div>
    <div class="tx_input">
      <h4>星光兑换RMB</h4>
      <div class="inputLine">
        <span>输入要体现的星光数：</span>
        <input type="text" />
      </div>
      <div class="inputLine">
        <span>可到账金额：4343434</span>
        <span class="rmb"></span>
      </div>
      <div class="inputLine">
        <span>体现账户：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WithDraw",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.withDraw {
  width: 100%;
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
  .tx_input{
    width: 100%;
    text-align: center;
    .inputLine{
      span{
        width: 150px;
        text-align: right;
      }
    }
  }
}
</style>