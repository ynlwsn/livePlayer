<template>
  <div class="actual-rank">
      <div class="actual_title">
          <ul class="container">
              <li>主播排行</li>
              <li>用户排行</li>
          </ul>
      </div>
      <div class="actual_content container">
          <RankLists></RankLists>
          <RankLists></RankLists>
          <RankLists></RankLists>
      </div>
  </div>
</template>

<script>
import RankLists from './RankLists'
export default {
    name:'ActualRank',
    data(){
        return{

        }
    },
    components:{RankLists}
}

</script>
<style scoped lang="less">
@import '../css/actualRank.less';
</style>