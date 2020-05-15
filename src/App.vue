<template>
  <div id="app">
    <Top v-if="nLive"></Top>
      <router-view/>
    <Foot v-if="nLive"></Foot>
  </div>
</template>

<script>
import Top from './components/Common/Top'
import Foot from "./components/Common/Foot";
export default {
  name: 'App',
  data(){
    return{
      nLive:true,
    }
  },
  created(){
    if(this.$route.path === '/live_room'){
      this.nLive = false
    }else{
      this.nLive = true
    }
  },
  watch:{
    $route(to,from){
      if(to.path === '/live_room'){
        this.nLive = false
      }else{
        this.nLive = true
      }
  }
  },
  components:{
    Top,
    Foot,
  }
}
</script>

<style lang="less">
*{
  padding:0;
  margin:0;
  position: relative;
  font-family:Microsoft YaHei;
  box-sizing: border-box;
  font-size: 14px;
}
button{
  border:none;
  font-size: 14px;
}
.container{
  width: 1440px;
  margin:0 auto;
}
 ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
#app {
  margin-top:64px;
  width: 100%;
  height: 100%;
}
button{
        cursor: pointer;
    }
</style>
