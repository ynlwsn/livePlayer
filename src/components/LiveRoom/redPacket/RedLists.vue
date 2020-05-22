<template>
  <div class="red_lists">
    <div class="header">
      <h2>直播间红包<i class="el-icon-close" style="float:right;cursor: pointer;" @click="close_"></i></h2>
      <p>共有{{num}}个红包</p>
    </div>
    <ul class="lists">
      <li>
        <img src="../../../assets/avatar_test.png" alt class="y_logo" />
        <div class="y_name">
          <h5>大佬</h5>
          <p>派发了一个{{aging}}红包</p>
        </div>
        <div class="rob">
          <img src="../../../assets/red.png" alt />
          <p>抢</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RedLists",
  data() {
    return {
      num: 3,
      isClose:true,
      aging:''
    };
  },
  methods:{
      close_(){
          this.$emit('close_',this.isClose)
      }
  }
};
</script>
<style scoped lang="less">
.red_lists {
  width: 294px;
  height: 384px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 9px;
  background-color: #fff;
  border: 1px solid #eee;
  .header {
    width: 100%;
    height: 66px;
    background-color: #ff1e00;
    text-align: center;
    padding-top: 12px;
    h2 {
      height: 24px;
      line-height: 24px;
      font-size: 18px;
      color: #ffe70f;
      i{
          right: 10px;
      }
    }
    p {
      color: white;
      font-size: 14px;
    }
  }
  .lists {
      padding:10px 12px;
      width: 100%;
      height: 318px;
      overflow: auto;
    li {
      display: flex;
      justify-content: space-between;
      align-content: center;
      align-items: center;
      width: 100%;
      height: 60px;
      margin-bottom: 10px;
    }
    .y_logo {
      height: 44px;
      width: 44px;
    }
    .y_name { 
        margin-left: -60px;
    }
    .rob {
      width: 40px;
      text-align: center;
      cursor: pointer;
      p{
          color: #ff3399;
          height: 16px;
          line-height: 16px;
          &:hover{
              color: red;
          }
      }
    }
    &::-webkit-scrollbar{
        height: 10px;
        width: 1px;
    }
  }
}
</style>