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
        <div class="showTop3">
          <div class="top2">
            <div class="avatar_box">
              <img src="../../assets/avatar_test.png" alt class="avatars" />              
              <img src="../../assets/icon-top2.png" alt class="bg" />
            </div>
            <div class="xg_info">
              <h5>小冷</h5>
              <p>
                <img src="../../assets/girl002.png" alt="">
                <img src="../../assets/dj002.png" alt="">
              </p>
              <p>3423534星光</p>
            </div>
          </div>
          <div class="top1">
            <div class="avatar_box">
              <img src="../../assets/icon-top1.png" alt class="bg" />
              <img src="../../assets/avatar_test.png" alt class="avatars" />
            </div>
            <div class="xg_info">
              <h5>小冷</h5>
              <p>
                <img src="../../assets/girl002.png" alt="">
                <img src="../../assets/dj002.png" alt="">
              </p>
              <p>3423534星光</p>
            </div>
          </div>
          <div class="top_3">
            <div class="avatar_box">
              <img src="../../assets/icon-top3.png" alt class="bg" />
              <img src="../../assets/avatar_test.png" alt class="avatars" />
            </div>
            <div class="xg_info">
              <h5>小冷</h5>
              <p>
                <img src="../../assets/girl002.png" alt="">
                <img src="../../assets/dj002.png" alt="">
              </p>
              <p>3423534星光</p>
            </div>
            </div>
          </div>
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
  props: ["titles", "bgColor"],
  data() {
    return {};
  },
  components: { SubTitle },
  watch: {}
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
    .top1,
    .top2,
    .top_3 {
      float: left;
      .xg_info{
          position: absolute;
          left: -10px;
          bottom: -64px;
          h5{
            height: 16px;
          }
          p{
            height: 20px;
            font-size: 12px;
            img{
              vertical-align: middle;
            }
            color: #666;
          }
        }
    }
    .top1 {
      .avatar_box {
        .bg {
          height: 94px;
          width: 168px;
          left: -30px;
          top: 0px;
        }
        .avatars{
          height: 75px;
          width: 75px;
          left: -156px;
          top: -3px;
        }
      }
      .xg_info{
          left: 12px;
          bottom: -64px;
        }
    }
    .top3 {
      width: 460px;
      height: 223px;
      border-radius: 6px 6px 0px 0px;
      background-size: cover;
      padding-top: 12px;
    }
    .showTop3 {
      height: 165px;
      width: 460px;
      h5 {
        text-align: center;
      }
      p {
        height: 20px;
        text-align: center;
        img {
          vertical-align: middle;
        }
      }
      .top2 {
        width: 20%;
        margin-left: 100px;
        margin-top: 20px;
        .avatar_box {
          height: 83px;
          width: 73px;
          img {
            position: absolute;
          }
          .bg {
            height: 83px;
            width: 73px;
          }
          .avatars {
            height: 58px;
            width: 58px;
            top: 22px;
            left: 4px;
          }
        }
        .xg_info{
          left: -6px;
          bottom: -68px;
        }
      }
      .top_3{
        position: absolute;
        right: 66px;
        top: 40px;
        .avatar_box {
          height: 83px;
          width: 81px;
          img {
            position: absolute;
          }
          .bg {
            height: 85px;
            width: 81px;
          }
          .avatars {
            height: 62px;
            width: 62px;
            top: 18px;
            left: 3px;
          }
        }
          .xg_info{
          left: 0px;
          bottom: -58px;
        }
      }
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
      // height: auto;
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