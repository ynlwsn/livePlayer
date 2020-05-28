<template>
  <div class="short_player">
      <Aside @turnOn="shortAside"></Aside>
      <div class="short_content" ref="short_content">
        <div class="banner"></div>
        <div class="all_video">
          <SubTitle title="全部视频" more=""  icons='icon5'></SubTitle> 
          <AnchorBox :anchorLists = shortVideos></AnchorBox>
        </div>
      </div>
  </div>
</template>

<script>
import Aside from './Common/Aside'
import AnchorBox from './Common/AnchorBox'
import SubTitle from './Common/SubTitle'
export default {
    data(){
        return{
            shortAsideMes:'',
            shortVideos:[
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:1},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:12},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:123},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:14},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:15},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:126},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:17},
              {img:require('../assets/tj.png'),type:'可爱唱将',name:'mumu',hot:3243,id:14},
            ]
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
        AnchorBox,Aside,SubTitle
    }
}

</script>
<style scoped lang="less">
.short_player{
    min-height: 1080px;
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