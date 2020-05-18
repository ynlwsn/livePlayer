<template>
  <div class="identification">
    <el-steps :active="1">
      <el-step title="填写资料" icon="el-icon-edit-outline" description="2020-05-20"></el-step>
      <el-step title="试播审核" icon="el-icon-mic" description="2020-5-20"></el-step>
      <el-step title="审核完成" icon="el-icon-check" description="2020-05-20"></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name:'Identification',

};
</script>
<style scoped lang="less">
.identification{
  margin-left: 81px;
  margin-top: 40px;
  margin-right: 80px;
}
</style>