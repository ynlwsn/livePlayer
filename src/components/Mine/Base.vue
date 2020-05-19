<template>
  <div class="base">
      <ul class="base_content">
          <li>
              <div>
                  <span>昵称：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>ID：</span>
                  <span>2323423</span>
              </div>
          </li>
          <li>
              <div>
                  <span>等级：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>星钻：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>家族：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>粉丝：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>性别：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>生日：</span>
                  <span>kkkkk</span>
              </div>
          </li>
          <li>
              <div>
                  <span>签名：</span>
                  <span>kkkkk</span>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Base',
}

</script>
<style scoped lang="less">
.base{
    margin-left: 81px;
    margin-right: 200px;
    width: 50%;
    .base_content{
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
        li{
            width:45%;
            margin-bottom: 20px;
        }
    }
}
</style>