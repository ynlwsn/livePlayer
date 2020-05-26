<template>
  <div class="personal">
    <div class="container">
      <div class="person_aside">
        <div class="personal_info">
          <div class="base_info">
            <img src="../assets/avatar_test.png" alt />
            <div class="uname">
              <i></i>
              <span>小冷</span>
            </div>
            <div class="zb_value">
              <div>
                <span>
                  <i></i>32432
                </span>
                <span>
                  <i></i>42343
                </span>
              </div>
            </div>
            <div class="fans_num">
              粉丝：32423
              <span>家族</span>
            </div>
            <div>
              <button class="attention">+ 关注</button>
              <button class="enterRoom">进入房间</button>
            </div>
            <p>
              上次上直播时间：
              <span>2020-05-01 12:20</span>
            </p>
          </div>
        </div>
        <div class="guard">
          <h3>守护榜</h3>
          <ul class="top">
            <li v-for="(attention, index) in attentionLists" :key="attention.u_name">
              <div class="num">{{attention.id}}</div>
              <img :src="attention.avatar" alt />
              <div class="name">
                <p>{{attention.u_name}}</p>
                <p style="color:#666">{{attention.xg}}星光</p>
              </div>
              <button class="attention" :class="attention.attentioned">{{attention.state}}</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="dynamic">
        <h3>动态</h3>
        <ul class="my_dynamic">
          <li v-for="index in 17">{{index}}</li>
        </ul>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data(){
    return{
      attentionLists:[
        {id:1,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'attentioned',state:'已关注'},
        {id:2,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'attentioned',state:'已关注'},
        {id:3,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'attentioned',state:'已关注'},
        {id:4,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'attentioned',state:'已关注'},
        {id:5,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'attentioned',state:'已关注'},
        {id:6,avatar:require('../assets/avatar_test.png'),u_name:'小冷',xg:1000,attentioned:'',state:'+ 关注'},
      ]
    }
  }
};
</script>
<style lang="less" scoped >
@import "./css/personal.less";
</style>