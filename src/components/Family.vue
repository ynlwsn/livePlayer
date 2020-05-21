<template>
  <div class="family">
    <div class="family_aside">
      <div class="f_photo">
        <div class="row">
          <img src="../assets/avatar_test.png" alt />
        </div>
        <div class="row">
          <img src="../assets/home/icon-jiazu.png" alt />
        </div>
      </div>
      <div class="f_info">
        <h4>哪个家族呢</h4>
        <div class="f_info_box">
          <p>
            创建时间：
            <span>2018-09-10</span>
          </p>
          <p>
            家族等级：
            <img src="../assets/home/icon-jiazu.png" alt />
          </p>
          <p>
            家族徽章：
            <img src="../assets/home/icon-jiazu.png" alt />
          </p>
          <p>
            家庭成员数：
            <span>655</span>
          </p>
        </div>
        <button class="joinUs">加入家族</button>
      </div>
      <div class="f_board">
        <h5>家族公告：</h5>
        <p>说点啥呢</p>
      </div>
      <div class="personnel">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="族长" name="first">
            <ul class="sib">
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="副族长" name="second">
            <ul class="sib">
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="家族管理" name="third">
            <ul class="sib">
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="家族主播" name="fourth">
            <ul class="sib">
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
              <li>
                <img class="f_thumb" src="../assets/avatar_test.png" alt />
                <div class="sib_base">
                  <p>这是谁呢</p>
                  <img src="../assets/icon-gj.png" alt />
                </div>
              </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="family_content">
      <div class="f_onlive">
          <SubTitle title="正在直播的家族主播" more="" icons='icon1'></SubTitle>
          <AnchorBox :anchorLists = anchor1></AnchorBox>
      </div>
      <div class="f_recommend">
        <SubTitle title="推荐的家族主播" more="" icons='icon1'></SubTitle>
        <AnchorBox :anchorLists = anchor1></AnchorBox>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from './Common/SubTitle'
import AnchorBox from './Common/AnchorBox'
export default {
  name: "Family",
  data() {
    return {
      anchor1:10,
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{
    SubTitle, AnchorBox
  }
};
</script>
<style scoped lang="less">
@import "./css/family.less";
</style>