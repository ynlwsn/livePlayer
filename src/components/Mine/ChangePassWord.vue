<template>
  <div class="changePassword">
    <div class="inputLine">
      <span>修改密码：</span>
      <input type="password" />
    </div>
    <div class="inputLine">
      <span>新密码：</span>
      <input type="password" />
    </div>
    <div class="inputLine">
      <span>确认密码：</span>
      <input type="password" />
    </div>
    <div class="saveBtn">保存</div>
  </div>
</template>

<script>
export default {
  name:'ChangePassword',
}

</script>
<style scoped lang="less">
@import '../css/Mine.less';
.changePassword{
  width: 1170px;
  padding-left: 81px;
  .inputLine {
    span {
      width: 100px;
    }
  }
  .saveBtn {
    margin-left: 108px;
  }
}

</style>