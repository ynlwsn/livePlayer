<template>
  <div class="getTouch">
    <i class="el-icon-close" style="float:right"></i></h3>
    <img src="../../assets/avatar_test.png" alt="" class="top_avatar">
    <h1>这是哪个<img src="../../assets/icons/icon-nv.png" alt=""></h1>
    <p><img src="../../assets/icon-jiazu.png" alt=""><img src="../../assets/xz001.png" alt=""><span>排行：1000+</span></p>
    <h2>{{state}}</h2> 
    <div class="cancle">
      <img src="../../assets/icon-gd.png" alt="">
      <p>{{cancle}}</p>
    </div>
    <div class="again" v-show="touch">
      <img src="../../assets/icon-jt.png" alt="">
      <p>再次呼叫</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'GetTouch',
  data(){
    return{
      state:'发起连麦中（8s)...',
      touch:false,
      cancle:'挂断           '
    }
  }
}

</script>
<style scoped lang="less">
.getTouch{
  width: 330px;
	height: 350px;
	background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  padding-top: 51px;
  border: 1px solid #ccc;
  i{
    top: -40px;
    right: 10px;
  }
  .top_avatar{
    height: 96px;
    width: 96px;
  }
  h1{
    font-size: 24px;
    font-weight: 400;
    line-height: 46px;
  }
  h2{
    font-size: 20px;
    font-weight: 400;
    line-height: 60px;
  }
  p{
    height: 20px;
    line-height: 20px;
    img{
      height: 16px;
      width: auto;
      margin-right: 4px;
      vertical-align: middle;
    }
    span{

      color: #ff3399;
    }
  }
  .cancle,.again{
    display: inline-block;
    cursor: pointer;
  }
  .cancle{
    margin-right: 20px;
  }
}
</style>