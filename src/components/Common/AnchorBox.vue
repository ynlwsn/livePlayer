<template>
  <div class="anchor">
    <ul class="live_box">
      <li v-for="anchorList in anchorLists" :key="anchorLists.id">
        <img :src="anchorList.img" alt />
        <div class="intro_info">
          <div class="petName">
            <h5>{{anchorList.type}}</h5>
            <p>{{anchorList.name}}</p>
          </div>
          <div class="heat">
            <i></i>
            <span>{{anchorList.hot}}</span>
          </div>
        </div>
        <div class="join_mask">
          <i class="el-icon-video-play" @click="joinRoom(anchorList.id)"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AnchorBox",
  props: ["anchorLists"],
  data() {
    return {
      current: ""
    };
  },
  methods: {
    joinRoom(id){
      this.$router.push({path:`/short-player/${id}`});
    }
  }
};
</script>
<style scoped lang="less">
.anchor {
  .live_box {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    margin:0 auto;
    img {
      width: 271px;
      height: 229px;
    }
    li {
      width: 271px;
      height: 229px;
      border-radius: 60px;
      margin-bottom: 20px;
      position: relative;
      .join_mask{
        height: 100%;
        width: 100%;
        line-height: 269px;
        text-align: center;
        top:0;
        left: 0;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
        color: white;
        display: none;
        i{
        font-size: 80px;
        font-weight: 200;
        cursor: pointer;
        }
      }
      &:hover{
        .join_mask{
          display: block;
          i{
            &:hover{
            color: pink;
            }
          }
        }
      }
    }
    .intro_info {
      width: 100%;
      height: 44px;
      
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.56) 0%,
        rgba(111, 92, 124, 0.37) 100%
      );
      position: absolute;
      bottom: 0;
      color: white;
      padding: 0 12px;
      .petName {
        float: left;
        padding-top: 2px;
        h5 {
          font-size: 14px;
          font-weight: 400;
        }
        p {
          font-size: 12px;
        }
      }
      .heat {
        float: right;
        height: 44px;
        line-height: 44px;
        i {
          height: 12px;
          width: 12px;
          display: inline-block;
          background-image: url(../../assets/fire.png);
          background-size: cover;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>