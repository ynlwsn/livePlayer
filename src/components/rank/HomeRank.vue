<template>
  <div class="home-rank">
    <SubTitle title="收益榜" more="TOP20" icons="icon1"></SubTitle>
    <div class="home_box">
      <div class="home_top3">
        <div class="top2">

        </div>
        <div class="top1">

        </div>
        <div class="top3">
          
        </div>
      </div>
      <div class="home_top20">
        <el-table :data="tableData" border style="width: 100%" :show-header="false">
          <el-table-column prop="num"></el-table-column>
          <el-table-column prop="badge">
            <template slot-scope="scope">
              <img :src="scope.row.badge" width="40" height="40" class="head_pic"/>
            </template>
          </el-table-column>
          <el-table-column prop="home_name"></el-table-column>
          <el-table-column prop="home_star"></el-table-column>
          <el-table-column prop="count"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from "../Common/SubTitle";
export default {
  name: "HomeRank",
  data() {
    return {
      tableData: [
        {
          num: 1,
          badge: require("../../assets/aside/down.png"),
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: require("../../assets/aside/down.png"),
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: require("../../assets/aside/down.png"),
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        },
        {
          num: 1,
          badge: "艺星",
          home_name: "艺星造梦家族",
          home_star: "xingxing",
          count: "家族人数：1200"
        }
      ]
    };
  },
  components: { SubTitle }
};
</script>
<style scoped lang="less">
.home-rank {
  width: 919px;
  margin: 0 auto;
  .home_box {
    width: 919px;
    height: 954px;
    background-color: white;
    border-radius: 6px;
    margin-bottom: 40px;
    .home_top3 {
      height: 184px;
    }
    /deep/.el-table th > .cell {
      text-align: center;
    }
    /deep/.el-table .cell {
      text-align: center;
    }
  }
  .home_top20 {
    overflow: auto;
    height: 736px;
  }
  .home_top20::-webkit-scrollbar {
    width: 6px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
  }

  .home_top20::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.83);
  }

  .home_top20::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #fff;
  }
}
</style>