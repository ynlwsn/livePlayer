<template>
  <div class="popup_ph">
    <ul class="ph_title">
      <li>周榜</li>
      <li>月榜</li>
      <li>超级榜</li>
    </ul>
    <div class="ph_content">
      <ul class="col_name">
        <li>排行</li>
        <li>粉丝</li>
        <li>贡献值</li>
      </ul>
      <div class="col_content">
          <ul>
              <li>
                  <span>NO.1</span>
                  <div class="fans">
                      <img src="../../assets/avatar_test.png" alt="">
                      <div class="fans_info">
                          <p>木木</p>
                          <i></i><i></i>
                      </div>
                  </div>
                  <span style="color:rgba(255,204,0,1);">10000</span>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupPh"
};
</script>
<style scoped lang="less">
.popup_ph {
    .ph_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 12px;
      margin:0 auto;
      width: 90%;
      li {
        height: 40px;
        line-height: 40px;
        width: 28%;
        cursor: pointer;
        text-align: center;
      }
    }
    .ph_content {
      .col_name {
        width: 382px;
        height: 26px;
        background: linear-gradient(
          348deg,
          rgba(204, 102, 204, 0.58) 0%,
          rgba(255, 204, 204, 1) 100%
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 12px;
        margin:0 auto;
        li {
          height: 26px;
          text-align: center;
          width: 30%;
          padding-top: 2px;
        }
      }
      .col_content {
          height: 500px;
          ul{
              padding:0 12px;
              margin:0 auto;
              width: 90%;
              li{
                  display: flex;
                  height: 64px;
                  justify-content: space-between;
                  align-items: center;
                  .fans{
                      img{
                          height: 34px;
                          width: 34px;
                      }
                  }
                  .fans_info{
                      display: inline-block;
                      text-align: left;
                      margin-left: 8px;
                      i{
                          height: 16px;
                          width: 31px;
                          display: inline-block;
                          background-image: url(../../assets/icon-gj.png);
                          background-size: cover;
                          margin-right: 6px;
                      }
                  }
              }
          }
      }
    }
}
</style>