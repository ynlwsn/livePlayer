<template>
  <div class="register signIn">
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
                <div><i class="icon_phone"></i><input type="text" placeholder="请输入手机号"><span></span></div>
                <div><i class="icon_yz"></i><input type="text" placeholder="请输入验证码"><span></span></div>
                <div><i class="icon_password"></i><input type="password" placeholder="请设置一个至少6位的密码"><span></span></div>
                <div><i class="confirm_password"></i><input type="text" placeholder="密码确定"><span></span></div>
                
            </div>
            <div class="upolicy"><i></i><p>我已阅读并同意，
                    <span>《六颜用户协议》</span><span>《用户隐私协议》</span></p></div>
            <button class="signBtn">立即注册</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Register'
}

</script>
<style scoped lang="less">
.register{
    .upolicy{
        display: flex;
        width: 80%;
        margin:0 auto;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        margin-top: 10px;
        i{
            position: relative;
            width: 14px;
            height: 14px;
            border:1px solid #ccc;
            margin-right: 8px;
        }
        p{
            font-size: 12px;
        }
        span{
            color: #ff3399;
            font-size: 12px;
        }
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
    }
}
</style>