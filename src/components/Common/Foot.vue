<template>
  <div class="footer">
    <p>
      <span>营业执照</span>
      <span>ICP许可证</span>
      <span>网络文化许可证</span>
    </p>
    <p>
      <span>关于六颜</span>
      <span>加入我们</span>
      <span>合作联系</span>
      <span>友情链接</span>
      <span>用户隐私政策</span>
      <span>广告投放</span>
    </p>
    <p>
      <span>江苏沐益昇电子科技有限公司</span>
      <span>地址：江苏省南京市江宁区2栋201室</span>
      <span>投诉举报电话：025-85323955</span>
    </p>
    <!-- <p>六颜直播&copy;2019.苏ICP备16042823号-3</p> -->
    <div style="margin:10px auto">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011156"
        style="display:inline-block;text-decoration:none;height:20px;line-height:20px; float:left"
      >
        <img src="../../assets/beian.png" style="float:left;" />
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;width:1.08rem">苏公网安备 32011502011156号</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
.footer {
  width: 100%;
  height: 199px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  p {
    text-align: center;
    line-height: 28px;
    width: 100%;
    span {
      font-size: 12px;
      margin-left: 10px;
      display: inline-block;
    }
  }
}
</style>