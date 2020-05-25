<template>
  <div class="live">
    <Aside class="aside" @turnOn="asideMes"></Aside>
    <div class="live_content" ref = 'live_content'>
        <div class="banner"></div>
        <div class="choiceness">
          <SubTitle title="六颜精选" more=""  icons='icon5'></SubTitle> 
          <Player></Player>
        </div>
        <div class="all_video">
          <SubTitle title="全部视频" more=""  icons='icon5'></SubTitle> 
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
    name:'Live',
  data () {
      return {
        asideMessage:''
      }
    },
  watch:{
    asideMessage(nval){
      if(nval){
            this.$refs.live_content.style.marginLeft = '15%'
          }else{
            this.$refs.live_content.style.marginLeft = 'auto'
          }
    }
  },
  methods:{
    asideMes(val){
      this.asideMessage = val
    }
  },
  components: {
    Aside,Player,SubTitle
  }
};
</script>
<style scoped lang="less">
.live {
    height: 800px;
    width: 100%;
    overflow: auto;
    background-color: #f0f2f3;
    margin:0 auto;
    display: flex;
    justify-content: start;
    .infinite-list{
        height: 1000px;
    }
      .banner{
      width:100%;
      height:250px;
      background-image: url(../assets/icon-banner.png);
      background-size: cover;
    }
    .live_content{
      width: 80%;
      margin:0 auto;
    }
}
</style>