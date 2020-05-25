<template>
  <div id="app">
    <Top v-if="nLive" @signIn  = isSign></Top>
      <router-view/>
    <Foot v-if="nLive"></Foot>
    <div class="mask" v-if="$store.state.showMask">
      <Register v-if="sign === 'register'"></Register>
      <Login v-else></Login>
    </div>
  </div>
</template>

<script>
import Top from './components/Common/Top'
import Foot from "./components/Common/Foot"
import Login from './components/Common/Login'
import Register from './components/Common/Register'
export default {
  name: 'App',
  data(){
    return{ 
      nLive:true,
      sign:''
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
  methods:{
    isSign(val){
      this.sign = val
    }
  },
  components:{
    Top,
    Foot,
    Login,
    Register,
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
}
// html,body{
//   width: 100%;
//   height: 100%;
//   overflow-x: hidden;
// }
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
  input:focus,select:focus{
    outline: none;
  }
body{
  min-width: 1920px;
  overflow: auto;
}
#app {
  width: 1920px;
  margin-top:64px;
  background-color: #f0f2f3;
}
button{
        cursor: pointer;
    }
.mask{
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1001;
}
</style>
