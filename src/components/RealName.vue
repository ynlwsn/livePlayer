<template>
  <div class="real_name">
    <div class="content">
      <div class="box">
        <div class="row">
          <h5>
            <i class="icon phone"></i>手机急速认证
          </h5>
          <div class="shortcut">
            <p>1、扫描右侧二维码，或在应用商店搜索“六颜直播”下载</p>
            <img src="../assets/anzhuo.png" alt />
          </div>
        </div>
        <div class="row">
          <h5>
            <i class="icon pc"></i>PC端认证
          </h5>
          <div class="pc_approve">
            <h6>姓名：</h6>
            <el-input v-model="name" placeholder="请输入内容"></el-input>
            <h6>联系QQ号：</h6>
            <el-input v-model="qq_num" placeholder="请输入内容"></el-input>
            <h6>身份证号码：</h6>
            <el-input v-model="id_card" placeholder="请输入内容"></el-input>
            <h6>身份证到期时间：</h6>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            <h6>身份证照片:</h6>
            <div class="id_images">
              <div class="img_box">
                <input type="file" name id="fileInput" accept="image/*" value @change="getSCImg"/>
                <img :src="imgUrl1" alt />
                <p>上传手持身份证正面照</p>
                <el-button type="info" plain>上传</el-button>
              </div>
              <div class="img_box">
                <input type="file" name id="fileInput" accept="image/*" value  @change="getZImg"/>
                <img :src="imgUrl2" alt />
                <p>上传身份证正面照</p>
                <el-button type="info" plain>上传</el-button>
              </div>
              <div class="img_box">
                <input type="file" name id="fileInput" accept="image/*" value  @change="getFImg"/>
                <img :src="imgUrl3" alt />
                <p>上传身份证反面照</p>
                <el-button type="info" plain>上传</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="txt">
          <p>身份证及身份证将会进行人工审核，照片务必做到以下几点：</p>
          <p>* 你需要年满18周岁</p>
          <p>* 全面：照片内包含以下内容</p>
          <p>1、您的面部、身份证正面</p>
          <p>2、身份证正面</p>
          <p>3、身份证反面</p>
          <p>* 清晰：身份证照片文字及图片清晰可见</p>
          <p>* 真实：身份证照片无PS</p>
          <p>* 有效：身份证为第二代身份证，在有效期内，正反内容相符</p>
          <p>* 如有以上信息有所不符，实名认证将驳回</p>
          <div>
            我已阅读并同意
            <span style="color:#007c8d">《主播独家合作协议》</span>（甲方：江苏沐益晟电子科技有限公司 乙方：身份证认证者）
          </div>
          <button class="confirm">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RealName",
  data() {
    return {
      name: "",
      qq_num: "",
      id_card: "",
      id_date: "",
      value1: "",
      imgUrl1:require("../assets/ren01.png"),
      imgUrl2:require('../assets/ren02.png'),
      imgUrl3:require('../assets/ren03.png'),
    };
  },
  methods: {
    Preview(ev) {
      const file = ev.target.files[0];
      this.imgObj = ev.target.files[0];
      let obj = new FileReader();
      obj.readAsDataURL(file);
      obj.onload = () => {
        this.picReduce(obj.result, base64 => {
          this.img = base64;
        });
      };
    },
    // 上传身份证照片
    getZImg(ev){
      let files = ev.target.files[0];
      this.imgUrl2 = this.getObjectUrl(files)
    },
    getSCImg(ev){
      let files = ev.target.files[0];
      this.imgUrl1 = this.getObjectUrl(files)
    },
    getFImg(ev){
      let files = ev.target.files[0];
      this.imgUrl3 = this.getObjectUrl(files)
    },
    // 获取对象地址
    getObjectUrl(file) {
      let url = null;
      if (window.createObjectURL != undefined) {
        // basic
        url = window.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
      } else if (window.URL != undefined) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
      }
      return url;
    }
  }
};
</script>
<style scoped lang="less">
.real_name {
  width: 1920px;
  height: 1419px;
  background-image: url(../assets/bg_003.png);
  background-size: cover;
  padding-top: 210px;
  .content {
    width: 960px;
    height: 1195px;
    background-color: #ffffff;
    margin: 0 auto;
    padding-top: 42px;
    .box {
      width: 550px;
      min-height: 1100px;
      margin: 0 auto;
      .row {
        h5 {
          font-size: 18px;
          height: 26px;
          line-height: 26px;
          margin-bottom: 12px;
          margin-top: 24px;
          .icon {
            height: 20px;
            width: 20px;
            display: inline-block;
            position: relative;
            background-size: cover;
            margin-right: 6px;
            vertical-align: middle;
          }
        }
        .phone {
          background-image: url(../assets/icon-shouji.png);
        }
        .pc {
          background-image: url(../assets/icon-PC.png);
        }
        .shortcut {
          width: 536px;
          height: 136px;
          line-height: 136px;
          background-color: #f0f2f5;
          padding-left: 20px;
          p {
            float: left;
            font-size: 12px;
            color: #9a99a5;
          }
          img {
            height: 98px;
            width: 98px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    .pc_approve {
      height: auto;
      h6 {
        font-size: 16px;
        font-weight: 400;
        height: 41px;
        line-height: 41px;
      }
    }
    .id_images {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .img_box {
        width: 30%;
        height: auto;
        text-align: center;
        img{
          width: 160px;
          height: 100px;
        }
        p {
          height: 30px;
          line-height: 30px;
        }
      }
    }
  }
  .txt {
    text-align: center;
    margin-top: 10px;
    p {
      color: red;
      font-size: 12px;
      text-align: left;
      line-height: 24px;
    }
    .confirm {
      width: 344px;
      height: 40px;
      background-color: #ff5959;
      color: white;
      margin-top: 16px;
    }
  }
  /deep/.el-input {
    width: 266px;
    height: 36px;
    margin-bottom: 12px;
  }
  #fileInput {
    position: absolute;
    opacity: 0;
    height: 50px;
    bottom: 0;
    left: 40px;
    width: 80px;
    z-index: 1000;
  }
}
</style>