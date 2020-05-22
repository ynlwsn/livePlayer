<template>
  <div class="home-rank">
    <SubTitle title="收益榜" more="TOP20" icons="icon1"></SubTitle>
    <div class="home_box">
      <div class="home_top3">
        <div class="top2">
          <div class="img_box">
            <img src="../../assets/avatar_test.png" alt="">
            <img src="../../assets/home/bg_02.png" alt="">
            <img src="../../assets/home/no2.png" alt="">
            <img src="../../assets/home/sd_common.png" alt="">
          </div>
          <p class="jname">艺兴家族</p>
          <p class="jbadge"><img src="../../assets/home/icon-jiazu.png" alt=""> <img src="../../assets/home/start.png" alt=""><img src="../../assets/home/start.png" alt=""></p>
        </div>
        <div class="top1">
          <div class="img_box">
            <img src="../../assets/avatar_test.png" alt="">
            <img src="../../assets/home/bg_01.png" alt="">
            <img src="../../assets/home/no1.png" alt="">
            <img src="../../assets/home/sd_01.png" alt="">
          </div>
          <p class="jname">艺兴家族</p>
          <p class="jbadge"><img src="../../assets/home/icon-jiazu.png" alt=""> <img src="../../assets/home/start.png" alt=""><img src="../../assets/home/start.png" alt=""></p>
        </div>
        <div class="top3">
          <div class="img_box">
            <img src="../../assets/avatar_test.png" alt="">
            <img src="../../assets/home/bg_03.png" alt="">
            <img src="../../assets/home/no3.png" alt="">
            <img src="../../assets/home/sd_common.png" alt="">
          </div>
          <p class="jname">艺兴家族</p>
          <p class="jbadge"><img src="../../assets/home/icon-jiazu.png" alt=""> <img src="../../assets/home/start.png" alt=""><img src="../../assets/home/start.png" alt=""></p>
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
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      p{
        position: absolute;
        color: #666;
        font-size: 12px;
        height: 20px;
        left: 50%;
        transform: translateX(-50%);
      }
      .jname{
        bottom: 8px;
      }
      .jbadge{
        bottom: -18px;
        img{
          vertical-align: middle;
        }
      }
      .top1{
        .jname{
        bottom: 12px;
      }
      .jbadge{
        bottom: -20px;
      }
      }
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
  .top1,.top2,.top3{
    float: left;
  }
  .img_box{
    position: relative;
    height: 127px;
    width: 190px;
    img{
      position: absolute;
      left: 50%;
        transform: translateX(-50%);
      &:nth-of-type(1){
        height: 84px;
        width: 84px;
        top: 23px;
      }
      &:nth-of-type(3){
        top: -20px;
      }
      &:nth-of-type(2){
        bottom: 8px;
      }
      &:nth-of-type(4){
        bottom: 0;
      }
    }
  }
  .top1{
    margin-top: -6px;
   .img_box{
    img{
      &:nth-of-type(1){
        height: 94px;
        width: 94px;
        top:8px;
      }
      &:nth-of-type(2){
      }
      &:nth-of-type(3){
        top: -30px;
      }
      &:nth-of-type(4){
        bottom: 0;
      }
    }
  } 
  }
}
</style>