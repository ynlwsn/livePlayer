<template>
   <ul class="live_box">
          <li>
            <img src="../../assets/test.jpg" alt="">
            <div class="intro_info">
              <div class="petName">
                  <h5>可爱唱将</h5>
                  <p>小可</p>
              </div>
              <div class="heat"><i></i><span>3243254</span></div>
            </div>
          </li>
    </ul>
</template>

<script>
export default {

}

</script>
<style scoped lang="less">
    .live_box{
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: center;
      img{
        width:271px;
        height:229px;
      }
      li{
        width:271px;
        height:229px;
        border-radius:60px;
        margin-bottom: 20px;
      }
      .intro_info{
              width:100%;
              height:36px;
              background:linear-gradient(360deg,rgba(0,0,0,0.56) 0%,rgba(111,92,124,0.37) 100%);
              position: absolute;
              bottom: 0;
              color: white;
              padding:0 12px;
              .petName{
                float: left;
                h5{
                  font-size: 14px;
                  font-weight: 400;
                }
                p{
                  font-size: 12px;
                }
              }
              .heat{
                float: right;
                height: 36px;
                line-height: 36px;
                i{
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