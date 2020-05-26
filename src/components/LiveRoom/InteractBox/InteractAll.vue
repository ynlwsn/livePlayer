<template>
  <div class="interact_all">
    <p class="board">
      [房间公告] :
      <span>开播时间每天早上9点到11点</span>
    </p>
    <div class="inter_box">
      <ul>
        <li>
          <div class="chat_item">
            <img src="../../../assets/icon-shenzun.png" alt />
            <span class="yh_name">sdfjsdk</span>
          </div>
          <div class="chat_content">
            <p>进入房间</p>
          </div>
        </li>
        <li>
          <div class="chat_item">
            <img src="../../../assets/icon-shenzun.png" alt />
            <span class="yh_name">sdfjsdk</span>
          </div>
          <p class="chat_content">进入房间师傅打电话分公司的对符合公司电话费功放机豆腐干还是看到房价回归自己发的</p>
        </li>
      </ul>
    </div>
    <div class="zb_say">
      <div>
        <span>小冷</span>对
        <span>你</span>说 :
      </div>
      <div class="say_content">小心骗子大方公开的身份公开京东方对方感受到都低功耗的风格的反馈</div>
      <div class="say_content">小心骗子大方公开的身份公开京东方对方感受到都低功耗的风格的反馈</div>
    </div>
    <div class="inter_input">
      <div class="first_row">
        <select name=" " id>
          <option value="all">所有人</option>
          <option value="zb">小冷</option>
        </select>
        <el-checkbox v-model="checked">私聊</el-checkbox>
        <div class="emoji" v-show="emoji" @mouseleave="emoji=false">
          <Emoji></Emoji>
        </div>
        <img src="../../../assets/bq01.png" alt @click="showEmoji" style="cursor: pointer;"/>
        <img src="../../../assets/money.png" alt style="marginLeft:-0.31rem;cursor: pointer;" @click="redPacket"/>
        <img src="../../../assets/clear.png" alt class="clear" style="cursor: pointer;"/>
      </div>
      <div class="second_row">
        <div class="chat_">
          <input type="text" placeholder="和大家聊会儿天？" />
          <span>转至</span>
          <button class="tan">弹</button>
        </div>
        <div class="send">发送</div>
      </div>
    </div>
    <RedPacket v-if="show === 'redPacket'" @close ="close"></RedPacket>
    <RedLists v-else-if="show ==='redLists'" @close_ ="close"></RedLists>
    <div class="rotMoney" @click="redLists">
        <img src="../../../assets/money.png" alt="">
        </div>
  </div>
</template>

<script>
import Emoji from "../../Common/Emoji";
import RedPacket from '../redPacket/RedPacket'
import RedLists from '../redPacket/RedLists'
import RotPacket from '../redPacket/RotPacket'
export default {
  name: "InteractAll",
  data() {
    return {
      checked: true,
      emoji:false,
      show:''
    };
  },
  components: { Emoji, RedPacket, RedLists, RotPacket},
  methods:{
    showEmoji(){
      if(this.emoji){
        this.emoji = false
      }else{
        this.emoji = true
      }
    },
    redPacket(){
      this.show = 'redPacket'
    },
    redLists(){
      this.show = 'redLists'
    },
    close(val){
      if(val){
        this.show = '';
      }
    },
    close_(val){
      close()
    }
  }
};
</script>
<style scoped lang="less">
.interact_all {
  height: 755px;
  width: 100%;
  z-index: 100;
  .board {
    height: 30px;
    line-height: 30px;
    padding-left: 22px;
    span {
      color: #ff3399;
      margin-left: 6px;
    }
  }
  .inter_box {
    height: 70%;
    ul {
      li {
        min-height: 40px;
        line-height: 40px;
        width: 100%;
        border-bottom: 1px solid #ccc;
        padding-left: 22px;
        .chat_item {
          float: left;
          margin-right: 10px;
          img {
            vertical-align: middle;
          }
        }
        .chat_content {
          color: #666;
        }
      }
    }
  }
  .zb_say {
    min-height: 12%;
    border-top: 1px solid #ccc;
    padding-left: 22px;
    height: 12%;
    overflow: auto;
    div {
      float: left;
      margin-right: 12px;
      line-height: 26px;
      span {
        color: #ff3399;
      }
    }
    .say_content {
      min-height: 26px;
      border-bottom: 1px solid #ccc;
    }
  }
  .inter_input {
    height: 108px;
    padding-left: 22px;
    padding-right: 22px;
    background-color: #ccc;
    .first_row,
    .second_row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .first_row {
      height: 66px;
      line-height: 66px;
      select {
        background-color: #ccc;
        border-radius: 10px;
        &:focus {
          outline: none;
        }
      }
    }
    .second_row {
      .chat_ {
        width: 366px;
        height: 36px;
        background-color: #ffffff;
        border-radius: 18px;
        overflow: hidden;
        padding-left: 12px;
        input {
          width: 76%;
          height: 36px;
          line-height: 36px;
          border: none;
          &:focus {
            outline: none;
          }
        }
        .tan {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          color: white;
          float: right;
          margin-top: 6px;
          margin-right: 12px;
          background-image: linear-gradient(180deg, #cc66cc 0%, #ffcccc 100%);
        }
      }

      .send {
        width: 74px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        margin-left: 12px;
        background-image: linear-gradient(180deg, #cc66cc 0%, #ffcccc 100%);
        border-radius: 18px;
        color: white;
      }
    }
  }
  .emoji{
    position: absolute;
    top: -190px;
    left: 180px;
  }
  .rotMoney{
    position: absolute;
    right: 10px;
    top: 20px;
    cursor: pointer;
    animation:mymove 2s infinite;
    &:hover{
      animation-play-state: paused;
    }
  }
  @keyframes mymove {
    0%{
      transform: rotateZ(-45deg);
    }
    50%{
      transform: rotateZ(45deg);
    }
    100%{
      transform: rotateZ(-45deg);
    }
  }
}
</style>