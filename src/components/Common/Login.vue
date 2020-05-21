<template>
  <div class="login signIn">
      <div class="sign_box">
          <i class="el-icon-circle-close" @click="close"></i>
          <div class="phone_login" @click="phoneLogin"></div>
          <div class="input_box" v-if="isPhone === false">
            <div class="sign_title">
                <h2>登陆</h2>
                <!-- <h2>手机号登陆</h2> -->
            </div>
            <div class="sign_content">
                <div><i class="icon_name"></i><input type="text" placeholder="用户昵称"><span></span></div>
                <div><i class="confirm_password"></i><input type="text" placeholder="密码"><span></span></div>
                <div><i class="icon_yz"></i><input type="text" placeholder="请输入验证码"><span></span></div>
            </div>
            <button class="signBtn">登陆</button>
            <div>忘记密码, <span style="color:#ff3399">立马找回</span></div>
          </div>
          <div class="input_box" v-else-if="isPhone">
            <div class="sign_title">
                <h2>手机号登陆</h2>
            </div>
            <div class="sign_content">
                <div><i class="icon_phone"></i><input type="text" placeholder="手机号"><span></span></div>
                <div><i class="icon_yz"></i><input type="text" placeholder="请输入验证码"><button class="sendVcode">发送验证码</button></div>
            </div>
            <button class="signBtn">登陆</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            Mask:false,
            isPhone:false
        }
    },
    methods:{
        close(){
            this.$store.commit('toggleMask')
        },
        phoneLogin(){
            if(this.isPhone){
                this.isPhone = false
            }else{
                this.isPhone = true
            }
        }
    }
}

</script>
<style scoped lang="less">
@import '../css/SignIn.less';
.login{
    .sign_title{
        width: 100%;
    }
    .sign_content{
        div{
            i{
                background-size: cover;
                position: relative;
                top:5px;
                margin-right: 6px;
            }
            .icon_name{
                    background-image: url(../../assets/login/icon-yonghu.png);
                }
            .icon_phone{
                    background-image: url(../../assets/login/icon-shouji.png);
                }
            .icon_yz{
                background-image: url(../../assets/login/icon_yz.png);
            }
            .icon_password{
                background-image: url(../../assets/login/pass01.png);
            }
            .confirm_password{
                background-image: url(../../assets/login/confirm01.png);
            }
        }
        .sendVcode{
            width:88px;
            height:22px;
            // border:1px solid rgba(112,112,112,0.33);
            border-radius:12px;
            color: rgba(255,51,153,1);
            background-color: #fff;
        }
    }
}
</style>