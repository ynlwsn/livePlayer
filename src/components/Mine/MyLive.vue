<template>
  <div class="myLive">
    <div class="live_history">
      <span>我的直播记录：</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="start"
      label="开播时间"
      >
    </el-table-column>
    <el-table-column
      prop="end"
      label="结束时间"
      >
    </el-table-column>
    <el-table-column
      prop="nums"
      label="房间人数">
    </el-table-column>
    <el-table-column
      prop="earn"
      label="收益（星光）"
      >
    </el-table-column>
    <el-table-column
      prop="zb_title"
      label="直播标题"
      >
    </el-table-column>
    <el-table-column
      prop="type"
      label="直播类型">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: "MyLive",
  data() {
    return {
        value1:'',
         tableData: [
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
             {
          start:"2020-5-16",
          end:'2020-5-20',
          nums:'3343',
          earn:'4444',
          zb_title:'kkakaka',
          type:'门票直播'
        }, 
        ]
    };
  }
};
</script>
<style scoped lang="less">
.myLive {
  .live_history {
    margin-left: 81px;
    margin-bottom: 22px;
  }
  /deep/.el-date-editor .el-range-separator{
      width: 10%;
  }
  /deep/.cell{
      text-align: center;
  }
}
</style>