<template>
  <div class="live_room">
      <div class="main">
        <Tool></Tool>
        <div class="act_wrapper">
          <VideoBox></VideoBox>
          <Interact></Interact>
          <Audience></Audience>
        </div>
      </div>
      <div class="act_wrapper">
        <div class="likes">
          <h3>猜你喜欢</h3>
          <ul>
            <li v-for="index in 6">
              <div class="intro_info">
                <div class="petName">
                    <h5>可爱唱将</h5>
                    <p>小可</p>
                </div>
                <div class="heat"><i></i><span>3243254</span></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
// import Tool from './tool'
// import VideoBox from './videoBox'
// import Interact from './Interact'
// import Audience from './Audience'
export default {
  name:'LiveRoom',
  data(){
    return{

    }
  },
  components:{
    Tool:resolve => require(['./tool'],resolve),
    VideoBox:resolve => require(['./videoBox'],resolve),
    Interact:resolve => require(['./Interact'],resolve),
    Audience:resolve => require(['./Audience'],resolve)
    }
}

</script>
<style scoped lang="less">
@import '../css/liveRoom.less';
</style>