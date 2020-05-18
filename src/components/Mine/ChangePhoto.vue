<template>
  <div class="changePhoto">
    
    <p>（支持PNG,JPEG格式的图片）</p><br/>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <el-button plain class="uploadBtn">上传照片</el-button>
    </el-upload>
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div>
      <button class="savePhoto btn">保存</button>
      <button class="cancle btn">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
<style scoped lang="less">
.changePhoto {
  padding-left: 81px;
  .uploadBtn{
    margin-bottom: 22px;
    display: block;
  }
  p{
    font-size: 12px;
    position: absolute;
    left: 190px;
    top:30px;
  }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border:1px solid #ccc;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    margin-top: 22px;
  }
  .btn{
    width: 105px;
    height: 42px;
    border-radius: 21px;
    margin-top: 22px;
    cursor: pointer;
    &:focus{
      outline: none;
    }
  }
  .savePhoto{  
	background-image: linear-gradient(270deg, 
		#d981cc 0%, 
    #fcced2 100%);
    color: white;
  }
  .cancle{
    background-image: linear-gradient(180deg, 
		#c9c7c9 0%, 
    #f8f8f8 100%);
    margin-left: 42px;
    color: #666;
  }
}
</style>