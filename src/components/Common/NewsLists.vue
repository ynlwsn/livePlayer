<template>
  <div class="news_lists container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>最新消息</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="newBox">
      <ul>
        <li>
          <div style="float:left" class="news">
            <h4>
              <i></i>五一直播间充值会员
            </h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
        <li>
          <div style="float:left" class="news">
            <h4>
              <i></i>五一直播间充值会员
            </h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
        <li>
          <div style="float:left" class="news">
            <h4>
              <i></i>五一直播间充值会员
            </h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
        <li>
          <div style="float:left" class="news">
            <h4>五一直播间充值会员</h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
      </ul>
      <p style="width:100%;textAlign:center;position:absolute;bottom:10px">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </p>
    </div>
  </div>
</template>

<script>
import News from "../Home/News";
export default {
  name: "NewsLists",
  components: {
    News
  }
};
</script>
<style scoped lang="less">
.news_lists {
  margin-bottom: 10px;
  .newBox {
    height: 400px;
    background-color: #fff;
    padding: 25px;
    min-height: 600px;
    li {
      height: 60px;
      margin-bottom: 2px;
      h4 {
        font-size: 14px;
        line-height: 26px;
        i {
          height: 26px;
          width: 26px;
          display: inline-block;
          background-image: url(../../assets/icon-HOT.png);
          position: relative;
          top: 4px;
          margin-right: 4px;
        }
      }
      p {
        color: rgba(102, 102, 102, 1);
        white-space: nowrap;
        width: 300px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .news {
        padding-top: 2px;
      }
      .newsTime {
        line-height: 60px;
      }
    }
  }
  // 改变分页的固有样式
        /deep/.el-pagination{
            text-align: center;
        }
        /deep/.el-pagination.is-background .el-pager li:not(.disabled).active{
            background-color: #d1369a;
        }
        /deep/.el-pager li{
            height: 30px;
            min-width: 30px;
            line-height: 30px;
            &:hover{
                color: #d1369a;
            }
        }
        /deep/.btn-prev,/deep/.btn-next{
            height: 30px;
            min-width: 30px;
        }
        /deep/.el-breadcrumb{
            font-size: 16px;
            height: 30px;
            line-height: 30px;
            padding-left: 16px;
        }
}
</style>