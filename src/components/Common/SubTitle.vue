<template>
  <div class="sub_title">
      <div class="sub_left">
          <i :class="icons"></i>
          <h3>{{title}}</h3>
      </div>
      <div class="sub_right">
          <router-link :to="{name:pathName}">{{more}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'SubTitle',
    props:['title','more','icons','pathName'],
    data(){
        return{
        }
    }
}

</script>
<style scoped lang="less">
.sub_title{
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    .sub_left{
        float: left;
        i{
            display: inline-block;
            height: 40px;
            width: 40px;
            position: relative;
            top:10px;
            background-size: cover;
        }
        .icon1{
            background-image: url(../../assets/icon-tuijian.png);
        }
        .icon2{
            background-image: url(../../assets/icon-zhibo.png);
        }
        .icon3{
            background-image: url(../../assets/icon-activity.png);
        }
        .icon4{
            background-image: url(../../assets/icon-news.png);
        }
        .icon5{
            background-image: url(../../assets/icon-zhibo.png);
        }
        .icon6{
            background-image: url(../../assets/icon-remenzhubobang.png);
        }
        .icon7{
            background-image: url(../../assets/icon-shouyibang.png);
        }
        .icon8{
            background-image: url(../../assets/icon-gongxianbang.png);
        }
        h3{
            display: inline-block;
            font-size: 26px;
            margin-left: 10px;
        }
    }
    .sub_right{
        float: right;
        font-size: 16px;
        cursor: pointer;
        a{
            display: inline-block;
            margin-top: 10px;
            
        }
    }
}
</style>