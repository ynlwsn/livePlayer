<template>
  <div class="rot_packet">
    <div class="rot" v-if="page === 'rot'">
      <div class="red_avatar">
        <img src="../../../assets/avatar_test.png" alt />
        <p>{{red_name}}</p>
        <h4>恭喜发财，大吉大利</h4>
      </div>
      <img src="../../../assets/icon_q.png" alt @click="rotMoney('roted')"/>
    </div>
    <div class="roted" v-else-if="page === 'roted'">
      <div class="red_avatar">
        <img src="../../../assets/avatar_test.png" alt />
        <p class="result">{{success}}</p>
        <h5>抢到{{red_name}}派发的星钻红包</h5>
        <div class="xz_num">
          {{xz}}
          <i class="xz"></i>
        </div>
      </div>
      <p class="see_detail" @click="rotMoney('detail')">点击查看领取详情></p>
    </div>
    <div class="details" v-else-if="page === 'detail'">
      <div class="detail_header">
        <div class="red_avatar">
          <img src="../../../assets/avatar_test.png" alt />
          <p>{{red_name}}的红包</p>
          <div class="xz_num">
            {{xz}}
            <i class="xz"></i>
          </div>
          <div class="putIn">已存入我的星钻</div>
        </div>
      </div>
      <div class="detail_content">
        <p>已领取1/10个，共17/100星钻</p>
        <ul class="lists">
          <li>
            <img src="../../../assets/avatar_test.png" alt class="y_logo" />
            <div class="y_name">
              <h5>大佬</h5>
              <p>{{date}}</p>
            </div>
          </li>
          <li>
            <img src="../../../assets/avatar_test.png" alt class="y_logo" />
            <div class="y_name">
              <h5>大佬</h5>
              <p>{{date}}</p>
            </div>
          </li>
          <li>
            <img src="../../../assets/avatar_test.png" alt class="y_logo" />
            <div class="y_name">
              <h5>大佬</h5>
              <p>{{date}}</p>
            </div>
          </li>
          <li>
            <img src="../../../assets/avatar_test.png" alt class="y_logo" />
            <div class="y_name">
              <h5>大佬</h5>
              <p>{{date}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RotPacket",
  data() {
    return {
      red_name: "土豪",
      success: "恭喜你！",
      xz: 17,
      date:new Date().getTime(),
      page:'rot'
    };
  },
  methods:{
      rotMoney(val){
          console.log(23142)
          this.page = val;
      }
  }
};
</script>
<style scoped lang="less">
.rot_packet {
  width: 294px;
  height: 384px;
  background-size: cover;
  border-radius: 9px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  .rot,
  .roted {
    background-image: url(../../../assets/bg_red.png);
    height: 384px;
    border-radius: 9px;
    padding-top: 56px;
  }
  .details {
    border: 4px solid #ff1e00;
    height: 384px;
    border-radius: 9px;
    .detail_header {
      height: 151px;
      background-color: #ff1e00;
      .xz_num {
        margin-top: 14px;
      }
      .putIn {
        color: #ffffff;
        margin-top: 10px;
      }
    }
    .detail_content {
        background-color: #fff;
      p {
        color: red;
        font-size: 12px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
      .lists {
        padding: 10px 12px;
        width: 100%;
        height: 198px;
        overflow: auto;
        li {
          display: flex;
          justify-content: flex-start;
          align-content: center;
          align-items: center;
          width: 100%;
          height: 60px;
          margin-bottom: 10px;
        }
        .y_logo {
          height: 44px;
          width: 44px;
          margin-right: 14px;
        }
        .y_name{
            text-align: left;
            p{
                color: #666;
                border-bottom: none;
            }
        }
        &::-webkit-scrollbar {
          height: 10px;
          width: 1px;
        }
      }
    }
  }
  .red_avatar {
    img {
      height: 54px;
      width: 54px;
    }
    p {
      color: white;
      font-size: 16px;
    }
    h4 {
      font-size: 18px;
      line-height: 76px;
      color: #ffe70f;
      font-weight: 400;
    }

    .result {
      color: yellow;
    }
    h5 {
      color: white;
      font-size: 18px;
      font-weight: 200;
      margin-top: 32px;
    }
    .xz_num {
      color: yellow;
      height: 20px;
      margin-top: 22px;
      .xz {
        display: inline-block;
        height: 20px;
        width: 20px;
        background-image: url(../../../assets/xz01.png);
        background-size: cover;
        position: relative;
        top: 5px;
        left: 10px;
      }
    }
  }
  .see_detail {
    cursor: pointer;
    text-align: center;
    color: yellow;
    margin-top: 100px;
    &:hover {
      font-size: 16px;
    }
  }
  img {
    cursor: pointer;
  }
}
</style>