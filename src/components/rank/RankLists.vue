<template>
  <div class="rankLists">
    <SubTitle :title="titles" more="TOP20" icons="icon1"></SubTitle>
    <div class="rankBox">
      <div :class="bgColor" class="top3">
      <ul class="title">
        <li>日榜</li>
        <li>周榜</li>
        <li>月榜</li>
      </ul>
      <div class="showTop3"></div>
      </div>
      <div class="rankMore">
        <ul>
          <li>
            <span>NO.1</span>
            <div class="fans">
              <img src="../../assets/logo.png" alt />
              <div class="fans_info">
                <p>木木</p>
                <i></i>
                <i></i>
              </div>
            </div>
            <span class="attent_btn">关注</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import SubTitle from "../Common/SubTitle";
export default {
  name: "RankLists",
  props: ["titles",'bgColor'],
  data() {
    return {
      
    };
  },
  components: { SubTitle },
  watch: {
   
  }
};
</script>
<style scoped lang="less">
.rankLists {
  width: 460px;
  height: auto;
  margin-right: 20px;
  .rankBox {
    min-height: 740px;
    background-color: #fff;
    .title {
      height: 30px;
      width: 80%;
      border-radius: 20px;
      border: 1px solid #fff;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 auto;
      li {
        height: 30px;
        line-height: 30px;
        border-right: 1px solid #fff;
        width: 100%;
        text-align: center;
        cursor: pointer;
        &:last-child {
          border: none;
        }
        &:hover,
        &:focus {
          border-bottom: 1px solid #ff3399;
          color: #ff3399;
          background-color: #fff;
        }
      }
    }
    .top3{
      width: 460px;
      height: 213px;
      border-radius: 6px 6px 0px 0px;
      background-size: cover;
      padding-top: 12px;
    }
    .showTop3 {
      height: 165px;
      width: 460px;
      
    }
    .bg_01 {
      background-image: url(../../assets/bg04.png);
      background-size: cover;
    }
    .bg_02 {
      background-image: url(../../assets/bg_05.png);
      background-size: cover;
    }
    .rankMore {
      width: 100%;
      height: auto;
      ul {
        padding: 0 18px;
        li {
          display: flex;
          height: 64px;
          justify-content: space-between;
          align-items: center;
          .fans {
            img {
              height: 34px;
              width: 34px;
            }
          }
          .fans_info {
            display: inline-block;
            text-align: left;
            margin-left: 8px;
            i {
              height: 16px;
              width: 31px;
              display: inline-block;
              background-image: url(../../assets/icon-gj.png);
              background-size: cover;
              margin-right: 6px;
            }
          }
          .attent_btn {
            width: 66px;
            height: 24px;
            background-image: linear-gradient(334deg, #cc66cc 0%, #ffcccc 100%);
            border-radius: 12px;
            color: white;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>