<template>
  <div class="news-box">
      <ul>
        <li>
          <div style="float:left" class="news">
            <h4><i></i>五一直播间充值会员</h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
        <li>
          <div style="float:left" class="news">
            <h4><i></i>五一直播间充值会员</h4>
            <p>疫情期间不能出去玩，五一快来六颜直播间看疫情期间不能出去玩，五一快来六颜直播间看</p>
          </div>
          <div style="float:right" class="newsTime">5-20</div>
        </li>
        <li>
          <div style="float:left" class="news">
            <h4><i></i>五一直播间充值会员</h4>
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
  </div>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
.news-box{
    height: 400px;
    width: 428px;
    background-color: #fff;
    padding:25px;
    li{
      height: 60px;
      margin-bottom: 2px;
      h4{
        font-size: 14px;
        line-height: 26px;
        i{
          height: 26px;
          width: 26px;
          display: inline-block;
          background-image: url(../../assets/icon-HOT.png);
          position: relative;
          top:4px;
          margin-right: 4px;
        }
      }
      p{
        color:rgba(102,102,102,1);
        white-space: nowrap;
        width: 300px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .news{
        padding-top: 2px;
      }
      .newsTime{
        line-height: 60px;
      }
    }
}
</style>