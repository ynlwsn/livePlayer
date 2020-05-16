<template>
  <div class="rankLists">
    <SubTitle title="收益榜" more="TOP20" icons='icon1'></SubTitle>
    <div class="rankBox">
      <ul class="title">
        <li>日榜</li>
        <li>周榜</li>
        <li>月榜</li>
      </ul>
      <div class="showTop3"></div>
      <div class="rankMore"></div>
    </div>
  </div>
</template>

<script>
import SubTitle from '../Common/SubTitle'
export default {
    name:'RankLists',
    components:{SubTitle}
}

</script>
<style scoped lang="less">
.rankLists{
  width: 460px;
  .rankBox{
    height: 704px;
    background-color: #fff;
    padding:11px 14px 11px 18px;
    .title{
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid #f0f2f3;
      li{
        height: 30px;
        border-bottom: 1px solid transparent;
        &:hover,&:focus{
          border-bottom: 1px solid #ff3399;
          color: #ff3399;
        }
      }
    }
  }
}
</style>