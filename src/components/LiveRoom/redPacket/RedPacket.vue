<template>
  <div class="red_packet">
    <h2>直播间红包<i class="el-icon-close" style="float:right;cursor: pointer;" @click="close"></i></h2>
    <h3>给当前直播间观众发红包</h3>
    <div class="packet_type">
      <el-radio v-model="radio" label="1">拼手气红包</el-radio>
      <el-radio v-model="radio" label="2">平均红包</el-radio>
    </div>
    <div class="red_box">
      <span>总金额</span>
      <input type="number" />
      <span>星钻</span>
    </div>
    <div class="red_box">
      <span>数量</span>
      <input type="number" />
      <span>个</span>
    </div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2"
    ></el-input>
    <div class="send_time" @click="changeTime">
      <div class="choose_time" ref="choose_time">{{time}}</div>
    </div>
    <button class="send_money">发送红包</button>
  </div>
</template>

<script>
export default {
  name: "RedPacket",
  data() {
    return {
      text: "",
      radio: "1",
      textarea2: "恭喜发财，大吉大利",
      time: "立即发送",
      isClose:true
    };
  },
  methods:{
      changeTime(){
          if(this.time === '立即发送'){
            this.$refs.choose_time.style.left = 30 + "px";
            this.time = '3分钟之后发送'
          }else{
              this.$refs.choose_time.style.left = -30 + "px";
                this.time = '立即发送'
          }
      },
      close(){
        this.$emit('close',this.isClose)
      }
  }
};
</script>
<style scoped lang="less">
.red_packet {
  width: 294px;
  height: 384px;
  background-color: #ff1e00;
  border-radius: 9px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 20px 12px 22px;
  h2 {
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 20px;
    color: #ffe70f;
  }
  h3 {
    height: 18px;
    font-size: 14px;
    height: 36px;
    line-height: 30px;
    color: #ffffff;
    text-align: center;
    font-weight: 400;
  }
  .packet_type {
    height: 26px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  label {
    color: white;
  }
  .red_box {
    width: 248px;
    height: 39px;
    line-height: 39px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 39px;
      width: 140px;
      border: none;
    }
  }
  .send_money {
    width: 209px;
    height: 38px;
    background-color: #ffff00;
    border-radius: 18px;
    font-size: 16px;
    color: red;
    margin-left: 20px;
    margin-top: 20px;
  }
  /deep/.el-textarea {
    margin-bottom: 10px;
  }
  .send_time {
    height: 20px;
    width: 80px;
    background-color: #990000;
    border-radius: 10px;
    margin-left: 80px;
    margin-top: 12px;
    cursor: pointer;
    .choose_time {
      color: #ff3399;
      width: 77px;
      height: 24px;
      background-color: #ffffff;
      border-radius: 12px;
      position: absolute;
      text-align: center;
      line-height: 24px;
      left: -30px;
      top: -2px;
    }
  }
  /deep/.el-radio__input.is-checked .el-radio__inner{
      border: 1px solid yellow;
      background-color: red;
  }
  /deep/.el-radio__input.is-checked+.el-radio__label{
      color: yellow;
  }
}
</style>