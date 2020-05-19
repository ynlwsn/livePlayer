<template>
  <div class="yh_rank">
    <RankLists titles="收益榜" bgColor='bg_01'></RankLists>
    <RankLists titles="贡献榜" bgColor='bg_01'></RankLists>
    <RankLists titles="红包榜" bgColor='bg_01'></RankLists>
  </div>
</template>

<script>
import RankLists from "./RankLists";
export default {
    name:'YhRank',
    components:{RankLists}
}

</script>
<style scoped lang="less">
.yh_rank{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>