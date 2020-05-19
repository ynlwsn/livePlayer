<template>
  <div class="record">
    <div class="title_">
      <h4>账户体现</h4>
    </div>
    <div class="tx_record">
      <div class="record_title">
        <span>我的提现记录</span>
        <div style="float:right">
          查询时间：
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <button class="search_">搜索</button>
        </div>
      </div>
      <div class="record_content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="xg" label="星光"></el-table-column>
          <el-table-column prop="money" label="提现金额"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="time" label="申请时间"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Record",
  data() {
    return {
      value1: "",
      tableData: [
        {
          xg:'345345',
          money:'343543',
          status:'已提现',
          time:'2020-05-20'
        },
        {
          xg:'345345',
          money:'343543',
          status:'已提现',
          time:'2020-05-20'
        },
        {
          xg:'345345',
          money:'343543',
          status:'已提现',
          time:'2020-05-20'
        },
        {
          xg:'345345',
          money:'343543',
          status:'已提现',
          time:'2020-05-20'
        },
        {
          xg:'345345',
          money:'343543',
          status:'已提现',
          time:'2020-05-20'
        },
      ]
    };
  }
};
</script>
<style scoped lang="less">
.record {
  .title_ {
    height: 62px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
    font-weight: 800;
    line-height: 62px;
    padding-left: 81px;
    margin-bottom: 22px;
  }
  .tx_record {
    margin-left: 81px;
    margin-right: 81px;
    .record_title {
      height: 60px;
      span {
        float: left;
      }
      .search_ {
        width: 56px;
        height: 29px;
        background-image: linear-gradient(180deg, #c9c7c9 0%, #f8f8f8 100%);
        border-radius: 6px;
        border: solid 1px #707070;
        &:focus {
          outline: none;
        }
      }
    }
    
      /deep/.cell{
        text-align: center;
      }
  }
}
</style>