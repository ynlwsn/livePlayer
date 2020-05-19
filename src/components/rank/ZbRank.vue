<template>
  <div class="zb_rank">
    <RankLists titles="收益榜" bgColor='bg_02'></RankLists>
    <RankLists titles="贡献榜" bgColor='bg_02'></RankLists>
    <RankLists titles="红包榜" bgColor='bg_02'></RankLists>
  </div>
</template>

<script>
import RankLists from "./RankLists";
export default {
  name: "ZbRank",
  components: { RankLists }
};
</script>
<style scoped lang="less">
.zb_rank{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>