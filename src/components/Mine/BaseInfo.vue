<template>
  <div class="baseInfo">
    <div class="inputLine">
      <span>昵称：</span>
      <input type="text" />
    </div>
    <div class="inputLine">
      <span>性别：</span>
      <el-radio v-model="radio" label="1">男</el-radio>
      <el-radio v-model="radio" label="2">女</el-radio>
    </div>
    <div class="inputLine">
      <span>签名：</span>
      <input type="text" />
    </div>
    <div class="inputLine">
      <span>生日:</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>
    <div class="saveBtn">保存</div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo",
  data() {
    return {
      value1: "",
      radio: "1"
    };
  }
};
</script>
<style scoped lang="less">
@import '../css/Mine.less';
.baseInfo {
  width: 1170px;
  padding-left: 81px;
  
}
</style>