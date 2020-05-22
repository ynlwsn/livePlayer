<template>
  <div class="autonym">
    <img src="../../assets/toux.png" alt="">
    <h3>倡导绿色健康直播环境，开启直播需实名认证。</h3>
    <button class="real_btn">点击实名认证</button>
  </div>
</template>

<script>
export default {
    name:'Autonym'
}

</script>
<style scoped lang="less">
.autonym{
  width: 330px;
	height: 308px;
	background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
  padding-top: 26px;
  img{
    height: 128px;
    width: 128px;
  }
  h3{
    line-height: 32px;
  }
  .real_btn{
    width: 246px;
    height: 43px;
    background-color: #d03599;
    border-radius: 4px;
    color: white;
    margin-top: 20px;
  }
}
</style>