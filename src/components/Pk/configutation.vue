<template>
  <div class="configutation">
    <div class="c_header">
      <h3>
        直播配置
        <i class="el-icon-close" style="float:right"></i>
      </h3>
    </div>
    <div class="c_content">
      <h4>直播标题</h4>
      <el-input v-model="input" placeholder="请输入标题"></el-input>
      <h4>直播类型</h4>
      <div class="type">
        <button @click="chooseRoom('')" :class="{bg_btn:room===''}">普通房间</button>
        <button @click="chooseRoom('password')" :class="{bg_btn:room==='password'}">密码房间</button>
        <button @click="chooseRoom('ticket')" :class="{bg_btn:room==='ticket'}">门票房间</button>
        <button @click="chooseRoom('time')" :class="{bg_btn:room==='time'}">计时房间</button>
      </div>
      <div v-show="setting" class="setting">
        <div class="set_word" v-show="room === 'password'">
          <h4>设置密码</h4>
          <el-input v-model="input1" placeholder="请输入密码"></el-input>
        </div>
        <div class="set_money" v-show="room === 'ticket'">
          <h4>
            设置金额
            <i></i>
          </h4>
          <h2>￥<input type="text" v-model="money"></h2>
        </div>
        <div class="set_time" v-show="room === 'time'">
          <h4>计时选择</h4>
          <select name id>
            <option value="10">10星钻/分钟</option>
            <option value="20">20星钻/分钟</option>
            <option value="30">30星钻/分钟</option>
            <option value="40">40星钻/分钟</option>
            <option value="50">50星钻/分钟</option>
          </select>
        </div>
      </div>
      <div class="operation">
        <button>取消</button>
        <button class="confirm_btn">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Configutation",
  data() {
    return {
      input: "",
      input1: "",
      setting: true,
      value: "",
      room: "",
      money:343,

    };
  },
  methods: {
    chooseRoom(val) {
      this.room = val;
    }
  }
};
</script>
<style scoped lang="less">
.configutation {
  width: 330px;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  border: solid 1px #707070;
  .c_header {
    width: 330px;
    height: 46px;
    background-color: #d660ad;
    border-radius: 8px 8px 0px 0px;
    color: white;
    text-align: center;
    line-height: 46px;
    h3 {
      font-size: 20px;
      i {
        top: 15px;
        right: 10px;
        cursor: pointer;
      }
    }
  }
  .c_content {
    min-height: 243px;
    padding: 10px;
    text-align: center;
    h4 {
      font-size: 16px;
      font-weight: 200;
      line-height: 36px;
      text-align: left;
    }
    .type {
      margin-bottom: 20px;
      button {
        width: 70px;
        height: 32px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid #666;
        &:focus{
          outline: none;
        }
      }
      
    .bg_btn{
      border:1px solid #ff3399;
      color: #ff3399;
    }
    }
    .operation {
      button {
        width: 80px;
        height: 32px;
        background-color: #949494;
        border-radius: 8px;
        color: white;
        &:focus{
          outline: none;
        }
      }
      .confirm_btn {
        background-color: #d660ad;
      }
    }
  }
  .setting {
    margin-bottom: 20px;
  }
  select {
    width: 308px;
    height: 32px;
    background-color: #e7e7e7;
    border-radius: 8px;
  }
  .set_money {
    h2 {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      text-align: left;
      border-bottom: 1px solid #000;
      input{
        border:none;
        height: auto;
        widows: 70%;
        display: inline-block;
        font-weight: 800;
        font-size: 20px;
      }
    }
  }
}
</style>