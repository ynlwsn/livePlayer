<template>
  <div class="actual-rank">
    <div class="actual_title">
      <ul class="container">
        <router-link tag="li" to="/actual-rank/zbrank">主播排行</router-link>
        <router-link tag="li" to="/actual-rank/yhrank">用户排行</router-link>
      </ul>
    </div>
    <div class="actual_content container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActualRank",
  data() {
    return {};
  }
};
</script>
<style scoped lang="less">
@import "../css/actualRank.less";
</style>