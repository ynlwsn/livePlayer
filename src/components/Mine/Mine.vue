<template>
  <div class="mine container">
    <div class="aside">
      <div class="mine_info">
          <img src="../../assets/logo.png" alt="">
          <div class="mine_id">
              <h4>卡卡卡卡</h4>
              <p>ID:23436545</p>
          </div>
      </div>
      <div class="collapse">
        <el-collapse v-model="activeNames" @change="handlerChange">
          <el-collapse-item name="1">
              <template slot="title">
                 <i class="header-icon icon_zh"></i>账户设置
            </template>
            <ul class="collapse_item">
                <li @click="changeTab('基本资料')">基本资料</li>
                <li @click="changeTab('修改头像')">修改头像</li>
                <li @click="changeTab('修改密码')">修改密码</li>
                <li @click="changeTab('我要认证')">我要认证</li>
            </ul>
          </el-collapse-item>
          <el-collapse-item name="2">
              <template slot="title">
                 <i class="header-icon icon_social"></i>我的社交
            </template>
            <ul class="collapse_item">
                <li @click="changeTab('我的关注')">我的关注</li>
                <li @click="changeTab('我的粉丝')">我的粉丝</li>
                <li @click="changeTab('我的黑名单')">我的黑名单</li>
                <li @click="changeTab('我的管理员')">我的管理员</li>
                <li @click="changeTab('我的直播')">我的直播</li>
            </ul>
          </el-collapse-item>
        </el-collapse>
        <router-link tag="div" to="/mine/withdraw" class="withdraw"><i class="icon_tx"></i>账户提现</router-link>
        <router-link tag="div" to="/myrecharge"  class="myRecharge"><i class="icon_cz"></i>我的充值</router-link>
      </div>
    </div>
    <div class="mian_content">
    <div class="title" v-show="tab !==''">{{tab}}</div>
        <Base v-if="tab === '基本信息'"></Base>
        <BaseInfo v-else-if="tab === '基本资料'"></BaseInfo>
        <ChangePhoto v-else-if="tab === '修改头像'"></ChangePhoto>
        <ChangePassword v-else-if="tab === '修改密码'"></ChangePassword>
        <Identification v-else-if="tab === '我要认证'"></Identification>
        <Focus v-else-if="tab === '我的关注'"></Focus>
        <MyFans v-else-if="tab === '我的粉丝'"></MyFans>
        <BlackLists v-else-if="tab === '我的黑名单'"></BlackLists>
        <Administrator v-else-if="tab === '我的管理员'"></Administrator>
        <MyLive v-else-if="tab === '我的直播'"></MyLive>
        <router-view v-else-if="tab === ''"></router-view>
    </div>
  </div>
</template>

<script>
import BaseInfo from './BaseInfo'
import Base from './Base'
import ChangePhoto from './ChangePhoto'
import ChangePassword from './ChangePassWord'
import Identification from './Identification'
import Focus from './Focus'
import MyFans from './MyFans'
import BlackLists from './BlackList'
import Administrator from './Administrator'
import MyLive from './MyLive'
import Withdraw from './Withdraw'
export default {
  name: "Mine",
   data() {
      return {
        activeNames: ['1'],
        tab:'基本信息',
      };
    },
    components:{BaseInfo, ChangePhoto, ChangePassword, Identification, Focus, MyFans, BlackLists, Administrator, MyLive, Withdraw, Base},
    methods: {
      handlerChange(val){
        console.log(val)
      },
      changeTab(val){
        if(val !==''){
          this.tab = val;
          this.$router.push('/mine')
        }
      },
    },
    watch:{
      $route(to,from){
        if(to.path === '/mine/withdraw' || to.path === '/mine/myrecharge'){
          this.tab =''
        }
      },
    },
    created(){
      if(this.$route.path === '/mine/withdraw' || this.$route.path === '/mine/myrecharge'){
          this.tab =''
        }
    }
};
</script>
<style scoped lang="less">
@import "../css/Mine.less";
</style>