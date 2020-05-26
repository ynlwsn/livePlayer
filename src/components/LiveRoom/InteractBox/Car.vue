<template>
  <div class="car">
    <ul class="car_box">
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
      <li>
        <img src="../../../assets/icon-car.png" alt="">
        <p><span>3435</span>星钻/30天</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Car',
}
</script>
<style scoped lang="less">
.car{
    height: 755px;
    width: 100%;
    overflow: auto;
    // background-color: rgb(255, 47, 210);
    z-index: 100;
    .car_box{
      height: auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-content: flex-start;
      li{
        width: 45%;
        text-align: center;
        margin-right: 22px;
        margin-bottom: 12px;
        img{
          height: 100px;
        }
      }
    }
    &::-webkit-scrollbar {
        width : 6px;
        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius   : 10px;
        // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background      : #ccc;
    }

    &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #FFF;
    }
}
</style>