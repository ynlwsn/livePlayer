<template>
  <div class="gift">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="gift" label="礼物"></el-table-column>
      <el-table-column prop="num" label="数量"></el-table-column>
      <el-table-column prop="fans" label="粉丝"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Gift",
  data() {
    return {
      tableData: [
        {
          gift:'跑车',
          num:3,
          fans:'sdjfhskj',
          time:'12:33'
        },
        {
          gift:'跑车',
          num:3,
          fans:'sdjfhskj',
          time:'12:33'
        },
        {
          gift:'跑车',
          num:3,
          fans:'sdjfhskj',
          time:'12:33'
        },
        {
          gift:'跑车',
          num:3,
          fans:'sdjfhskj',
          time:'12:33'
        },
        {
          gift:'跑车',
          num:3,
          fans:'sdjfhskj',
          time:'12:33'
        },
      ]
    };
  }
};
</script>
<style scoped lang="less">
.gift {
  height: 755px;
  width: 100%;
  z-index: 100;
  padding-top: 22px;
  /deep/.cell{
    text-align: center;
  }
}
</style>