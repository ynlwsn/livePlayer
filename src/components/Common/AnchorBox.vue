<template>
  <div class="anchor">
    <div class="anchor_box" v-for="anchorList in anchorLists"></div>
  </div>
</template>

<script>
export default {
  name: "AnchorBox",
  props:['anchorLists'],
  data() {
    return {
      current:''
    };
  },
  methods: {
    //鼠标的进入进出
    enter(i) {
        console.log(i)
    },
    leave(){

    }
  }
};
</script>
<style scoped lang="less">
.anchor {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  .anchor_box {
    width: 271px;
    height: 229px;
    border-radius: 6px;
    margin-bottom: 20px;
    background-color: pink;
    &:hover{
      border:2px solid yellowgreen;
    }
  }
  .entered{
      border:2px solid yellow;
  }
}
</style>