<template>
  <ul class="player_box">
    <li v-for="video in videos" :key="videos.id">
      <img :src="video.img" alt />
      <div class="intro_info">
        <div class="petName">
          <h5>{{video.type}}</h5>
          <p>{{video.name}}</p>
        </div>
        <div class="heat">
          <i></i>
          <span>{{video.hot}}</span>
        </div>
      </div>
      <div class="join_mask">
        <i class="el-icon-video-play" @click="joinRoom(video.id)"></i>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "Player",
  props: ["videos"],
  data() {
    return {}
  }
};
</script>
<style scoped lang="less">
.player_box {
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: center;
    margin:0 auto;
    img {
      width: 218px;
	    height: 390px;
    }
    li {
      width: 218px;
      height: 390px;
      margin: 0 11px;
      border-radius: 60px;
      margin-bottom: 20px;
      position: relative;
      .join_mask{
        height: 100%;
        width: 100%;
        text-align: center;
        line-height: 390px;
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
</style>