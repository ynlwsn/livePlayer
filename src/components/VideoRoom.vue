<template>
  <div class="video_room">
    <div class="page_top">
      <div class="play_video"></div>
      <div class="play_interact">
        <div class="play_info">
          <div class="f_row">
            <h3>哥哥们请假一天不想..</h3>
            <p>
              <i class="el-icon-video-camera"></i>32423
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i>1234
            </p>
          </div>
          <div class="s_row">
            <img src="../assets/avatar_test.png" alt />
            <p>
              桃干干
              <i></i>
              <i></i>
            </p>
            <button>关注</button>
          </div>
        </div>
        <div class="chat_area">
          <div class="chat_lists">
              <ul v-if="chat">
                  <li></li>
              </ul>
              <p v-else style="textAlign:center;lineHeight:100px">暂时没有互动消息</p>
          </div>
          <div class="chat_operate">
            <p>
              <img src="../assets/bq01.png" alt />
              <el-checkbox v-model="checked">同时转发到我的动态</el-checkbox>
            </p>
            <div class="chat_row">
              <div class="chat_input">
                <input type="text" placeholder="说点啥吧" />
                <button>发布</button>
              </div>
              <div class="like_box">
                <img src="../assets/little_video/icon-aixin.png" alt />
                <div>21</div>
              </div>
              <div class="like_box">
                <img src="../assets/little_video/icon-aixin.png" alt />
                <div>21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page_main container">
      <SubTitle title="TA的其他短视频" more="更多 >" icons="icon5"></SubTitle>
      <Player :videos="others"></Player>
      <SubTitle title="人气排行" more="更多 >" icons="icon5"></SubTitle>
      <Player :videos="popLists"></Player>
      <SubTitle title="更多热门   " more="更多 >" icons="icon5"></SubTitle>
      <Player :videos="hotLists"></Player>
    </div>
  </div>
</template>

<script>
import SubTitle from "./Common/SubTitle";
import Player from "./Common/Player";
export default {
  name: "VideoRoom",
  data() {
    return {
      others: [
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 1
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 12
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 123
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 15
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 126
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 17
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        }
      ],
      popLists: [
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 15
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 126
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 17
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        }
      ],
      hotLists: [
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 15
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 126
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 17
        },
        {
          img: require("../assets/tj.png"),
          type: "可爱唱将",
          name: "mumu",
          hot: 3243,
          id: 14
        }
      ],
      checked: true,
      chat:false
    };
  },
  components: {
    SubTitle,
    Player
  }
};
</script>
<style scoped lang="less">
.video_room {
  width: 100%;
  margin-top: 64px;
  .page_top {
    height: 896px;
    width: 100%;
    margin: 0 auto;
    background-image: url(../assets/little_video/shipingbj.png);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .play_video {
      width: 472px;
      height: 836px;
      background-color: #fff;
      margin-right: 20px;
    }
    .play_interact {
      width: 392px;
      height: 836px;
      .play_info {
        height: 124px;
        border-radius: 8px;
        background-color: #fff;
        margin-bottom: 14px;
        padding: 0 10px;
        .f_row {
          height: 60px;
          line-height: 60px;
          font-size: 20px;
          h3 {
            float: left;
            font-weight: 400;
          }
          p {
            float: right;
            height: 20px;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .s_row {
          width: 100%;
          height: 50px;
          vertical-align: middle;
          img {
            height: 38px;
            width: 38px;
            float: left;
            margin-right: 10px;
          }
          p {
            float: left;
            line-height: 40px;
          }
          button {
            float: right;
            width: 60px;
            height: 28px;
            margin-top: 10px;
            background-image: linear-gradient(291deg, #cc66cc 0%, #ffcccc 100%);
            border-radius: 4px;
            color: white;
          }
        }
      }
      .chat_area {
        height: 699px;
        border-radius: 8px;
        background-color: #fff;
        padding: 0 10px;
        .chat_operate {
          height: 100px;
          position: absolute;
          bottom: 0;
          p {
            display: flex;
            justify-content: flex-start;
            margin-bottom: 10px;
            img {
              margin-right: 10px;
            }
          }
          .chat_row {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            .chat_input{
                width: 255px;
                height: 48px;
                background-color: #ffffff;
                border-radius: 8px;
                border: solid 1px #ce6acc;
                overflow: hidden;
                padding-left: 10px;
                input{
                    height: 48px;
                    border:none;
                    width: 70%;
                }
                button{
                    width: 60px;
                    height: 48px;
                    float: right;
                    background-image: linear-gradient(291deg, 
                        #cc66cc 0%, 
                        #ffcccc 100%);
                    border-radius: 0px 8px 8px 0px;
                    color: white;
                }
            }
            .like_box {
              width: 48px;
              height: 48px;
              background-color: #f4f4f4;
              border-radius: 8px;
              text-align: center;
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
}
</style>