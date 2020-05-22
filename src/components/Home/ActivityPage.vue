<template>
  <div class="actions">
    <div class="title_bg">
      <div class="container">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最新活动" name="first">
            <div class="container action_content">
              <div class="action_box">
                <div class="thumb">
                  <p>线上活动</p>
                  <img src="../../assets/test.jpg" alt />
                </div>
                <div class="action_info">
                  <div style="float:left">
                    <h4>
                      寻宝大冒险
                      <i></i>
                    </h4>
                    <p>活动时间：2020-05-20</p>
                  </div>
                  <span>活动中</span>
                </div>
                <div class="mask">
                  <h2>
                    活动结束
                    <p>345345</p>
                  </h2>
                </div>
              </div>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="专题策划" name="second">
            <div class="container action_content">
              <div class="action_box">
                <div class="thumb">
                  <p>线上活动</p>
                  <img src="../../assets/test.jpg" alt />
                </div>
                <div class="action_info">
                  <div style="float:left">
                    <h4>
                      寻宝大冒险
                      <i></i>
                    </h4>
                    <p>活动时间：2020-05-20</p>
                  </div>
                  <span>活动中</span>
                </div>
                <div class="mask">
                  <h2>
                    活动结束
                    <p>345345</p>
                  </h2>
                </div>
              </div>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="线下活动" name="third">
            <div class="container action_content">
              <div class="action_box">
                <div class="thumb">
                  <p>线上活动</p>
                  <img src="../../assets/test.jpg" alt />
                </div>
                <div class="action_info">
                  <div style="float:left">
                    <h4>
                      寻宝大冒险
                      <i></i>
                    </h4>
                    <p>活动时间：2020-05-20</p>
                  </div>
                  <span>活动中</span>
                </div>
                <div class="mask">
                  <h2>
                    活动结束
                    <p>345345</p>
                  </h2>
                </div>
              </div>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="线上活动" name="fourth">
              <div class="container action_content">
              <div class="action_box">
                <div class="thumb">
                  <p>线上活动</p>
                  <img src="../../assets/test.jpg" alt />
                </div>
                <div class="action_info">
                  <div style="float:left">
                    <h4>
                      寻宝大冒险
                      <i></i>
                    </h4>
                    <p>活动时间：2020-05-20</p>
                  </div>
                  <span>活动中</span>
                </div>
                <div class="mask">
                  <h2>
                    活动结束
                    <p>345345</p>
                  </h2>
                </div>
              </div>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
          <el-tab-pane label="会员充值" name="fifth">
            <div class="container action_content">
              <div class="action_box">
                <div class="thumb">
                  <p>线上活动</p>
                  <img src="../../assets/test.jpg" alt />
                </div>
                <div class="action_info">
                  <div style="float:left">
                    <h4>
                      寻宝大冒险
                      <i></i>
                    </h4>
                    <p>活动时间：2020-05-20</p>
                  </div>
                  <span>活动中</span>
                </div>
                <div class="mask">
                  <h2>
                    活动结束
                    <p>345345</p>
                  </h2>
                </div>
              </div>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Actions",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped lang="less">
@import "../css/action.less";
</style>