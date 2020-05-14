<template>
  <div class="activities">
    <h4><i></i>热门活动</h4>
    <div class="activity_item">
      <img src="../../../assets/public.png" alt="">
      <div class="main_intro">
        <h5>才艺之星大比拼</h5>
        <p>fdgsdfh的法国人特瑞热翁维尔fdgsdfh的法国人特瑞热翁维尔</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Activity',
}

</script>
<style scoped lang="less">
.activities{
    height: 828px;
    width: 100%;
    z-index: 100;
    padding:20px 12px 20px 12px;
    background-color: #f0f2f3;
    overflow: auto;
    h4{
      i{
        height: 20px;
        width: 20px;
        display: inline-block;
        background-image: url(../../../assets/fire.png);
        background-size: cover;
        margin-right: 12px;
      }
      font-size: 16px;
      margin-bottom: 16px;
    }
    .activity_item{
      width:456px;
      height:88px;
      background:rgba(255,255,255,1);
      border-radius:6px;
      padding-right: 20px;
      margin-bottom: 20px;
      img{
        width: 110px;
        height: 88px;
        float: left;
      }
      .main_intro{
        float: left;
        margin-left: 20px;
        h5{
          font-size: 14px;
          line-height: 36px;
        }
        p{
          color: #666;
          width: 300px;
          overflow: hidden;
          white-space :nowrap ;
          text-overflow:ellipsis;
        }
      }
    }
}
.activities::-webkit-scrollbar {
        width : 10px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    .activities::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius   : 10px;
        // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background      : pink;
    }

    .activities::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #f0f2f3;
    }
</style>