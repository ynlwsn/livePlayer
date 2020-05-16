<template>
  <div class="login signIn">
      <div class="sign_box">
          <i class="el-icon-circle-close" @click="close"></i>
          <div class="phone_login"></div>
          <div class="input_box">
            <div class="sign_title">
                <h2>登陆</h2>
                <h2>注册</h2>
            </div>
            <div class="sign_content">
                <div><i class="icon_name"></i><input type="text" placeholder="用户昵称"><span></span></div>
                <div><i class="confirm_password"></i><input type="text" placeholder="密码"><span></span></div>
                <div><i class="icon_yz"></i><input type="text" placeholder="请输入验证码"><span></span></div>
            </div>
            <button class="signBtn">登陆</button>
            <div>忘记密码, <span style="color:#ff3399">立马找回</span></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Login',
    data(){
        return{
            Mask:false
        }
    },
    methods:{
        close(){
            this.$store.commit('toggleMask')
        }
    }
}

</script>
<style scoped lang="less">
@import '../css/SignIn.less';
.login{
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
    }
}
</style>