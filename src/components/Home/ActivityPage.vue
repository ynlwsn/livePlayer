<template>
  <div class="actions">
    <div class="title_bg">
      <ul class="title_event container">
        <router-link tag="li" to="/">最新活动</router-link>
        <router-link tag="li" to="/">专题策划</router-link>
        <router-link tag="li" to="/">线上活动</router-link>
        <router-link tag="li" to="/">线下活动</router-link>
        <router-link tag="li" to="/">会员充值</router-link>
      </ul>
    </div>
    <div class="container action_content">
      <div class="action_box">
        <div class="thumb">
          <p>线上活动</p>
          <img src alt />
        </div>
        <div class="action_info"></div>
      </div>
      <div class="action_box">
        <div class="thumb">
          <p>线上活动</p>
          <img src="../../assets/test.jpg" alt />
        </div>
        <div class="action_info">
            <div style="float:left">
                <h4>寻宝大冒险<i></i></h4>
                <p>活动时间：2020-05-20</p>
            </div>
            <span>活动中</span>
        </div>
        <div class="mask">
            <h2>活动结束<p>345345</p></h2>
        </div>
      </div>
      <div class="action_box">
        <div class="thumb">
          <p>线上活动</p>
          <img src alt />
        </div>
        <div class="action_info"></div>
      </div>
      <div class="action_box">
        <div class="thumb">
          <p>线上活动</p>
          <img src alt />
        </div>
        <div class="action_info"></div>
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Actions"
};
</script>
<style scoped lang="less">
@import '../css/action.less';
</style>