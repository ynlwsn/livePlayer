<template>
  <div class="short_player">
      <Aside @turnOn="shortAside"></Aside>
      <div class="short_content" ref="short_content">
        <div class="banner"></div>
        <div class="all_video">
          <SubTitle title="全部视频" more=""  icons='icon7'></SubTitle> 
          <Player></Player>
        </div>
      </div>
  </div>
</template>

<script>
import Aside from './Common/Aside'
import Player from './Common/Player'
import SubTitle from './Common/SubTitle'
export default {
    data(){
        return{
            shortAsideMes:''
        }
    },
    watch:{
        shortAsideMes(nval){
          if(nval){
            this.$refs.short_content.style.marginLeft = '15%'
          }else{
            this.$refs.short_content.style.marginLeft = 'auto'
          }
        }
      },
      methods:{
        shortAside(val){
      this.shortAsideMes = val
    }
  },
    components:{
        Player,Aside,SubTitle
    }
}

</script>
<style scoped lang="less">
.short_player{
    height: 1080px;
    width: 100%;
    background-color: #f0f2f3;
    .banner{
      width:100%;
      height:250px;
      background-image: url(../assets/icon-banner.png);
      background-size: cover;
    }
    .short_content{
      width: 80%;
      margin:0 auto;
    }
}
</style>