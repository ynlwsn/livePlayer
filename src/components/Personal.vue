<template>
  <div class="personal">
    <div class="container">
      <div class="person_aside">
        <div class="personal_info">
          <div class="base_info">
            <img src="../assets/logo.png" alt />
            <div class="uname">
              <i></i>
              <span>小冷</span>
            </div>
            <div class="zb_value">
              <div>
                <span>
                  <i></i>32432
                </span>
                <span>
                  <i></i>42343
                </span>
              </div>
            </div>
            <div class="fans_num">
              粉丝：32423
              <span>家族</span>
            </div>
            <div>
              <button class="attention">+ 关注</button>
              <button class="enterRoom">进入房间</button>
            </div>
            <p>
              上次上直播时间：
              <span>2020-05-01 12:20</span>
            </p>
          </div>
        </div>
        <div class="guard">
          <h3>守护榜</h3>
          <ul class="top">
            <li>
              <div class="num">1</div>
              <img src="../assets/logo.png" alt />
              <div class="name">
                <p>小冷</p>
                <p style="color:#666">1000星光</p>
              </div>
              <button class="attention">+ 关注</button>
            </li>
            <li>
              <div class="num">1</div>
              <img src="../assets/logo.png" alt />
              <div class="name">
                <p>小冷</p>
                <p style="color:#666">1000星光</p>
              </div>
              <button class="attention attentioned">已关注</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="dynamic">
        <h3>动态</h3>
        <ul class="my_dynamic">
          <li v-for="index in 17">{{index}}</li>
        </ul>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal"
};
</script>
<style lang="less" scoped >
@import "./css/personal.less";
</style>