<template>
  <div class="audience">
    <div class="care">
      <div class="care_title">
        <h4>
          守护（
          <span>4</span> / 31）
        </h4>
        <button @click="derdge">开通</button>
      </div>
      <div class="sh_box">
        <ul class="care_zb">
          <li>
            <img src="../../assets/avatar_test.png" alt />
            <i></i>
            <p>这是谁</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="audience_lists">
      <div class="gz_title" @click="changeType">
        <div :class="[isActive == 'gz'? 'gz_active' :'']">
          <h4>观众</h4>
          <span>3432</span>
        </div>
        <div :class="[isActive == 'gl'? 'gz_active' :'']">
          <h4>管理</h4>
          <span>3432</span>
        </div>
      </div>
      <div class="gz_content">
        <div v-if="isActive === 'gz'">
          <ul>
            <li>
              <p>
                <img src="../../assets/icon-gj.png" alt />
                <span>34234</span>
              </p>
              <p>
                <img src="../../assets/icon-jiazu.png" alt />
                <span>这是谁</span>
              </p>
            </li>
            <li>
              <p>
                <img src="../../assets/icon-gj.png" alt />
                <img src="../../assets/icon-gj.png" alt />
                <span>34234</span>
              </p>
              <p>
                <img src="../../assets/icon-jiazu.png" alt />
                <span>这是谁</span>
              </p>
            </li>
          </ul>
        </div>
        <div v-else>
          <ul>
            <li>
              <p>
                <img src="../../assets/icon-gj.png" alt />
                <img src="../../assets/icon-gj.png" alt />
                <span>34234</span>
              </p>
              <p>
                <img src="../../assets/icon-jiazu.png" alt />
                <span>这是谁</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <el-dialog title="开通守护" :visible.sync="dialog">
          <div class="care_box">
            <div class="care_person">
                <h4>守护：</h4>
                <img src="../../assets/avatar_test.png" alt="">
                <p>{{c_name}} <span>(ID:{{c_id}})</span></p>
            </div>
            <div class="care_row">
              <h4>选择守护类型:</h4>
              <div class="types">
                <div>
                  <img src="../../assets/care/icon-jin.png" alt="">
                </div>
                <div>
                  <img src="../../assets/care/icon-jin.png" alt="">
                </div>
                <div>
                  <img src="../../assets/care/icon-jin.png" alt="">
                </div>
              </div>
            </div>
            <div class="care_row">
              <h4>选择守护时长:</h4>
              <div class="types times">
                <div>
                  <p>7天体验</p>
                  <p><i class="xz_icon01"></i><span>1000</span></p>
                </div>
                <div>
                  <p>7天体验</p>
                  <p><i class="xz_icon01"></i><span>2000</span></p>
                </div>
                <div>
                  <p>7天体验</p>
                  <p><i class="xz_icon01"></i><span>3000</span></p>
                </div>
              </div>
            </div>
            <div class="privilege">
              <h4>守护特权</h4>
              <ul>
                <li>
                  <img src="../../assets/care/icon-sou.png" alt="">
                  <div>
                    <h5>身份表示</h5>
                    <p>聊天区显示守护身份标识</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/care/icon-sou.png" alt="">
                  <div>
                    <h5>身份表示</h5>
                    <p>聊天区显示守护身份标识</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/care/icon-sou.png" alt="">
                  <div>
                    <h5>身份表示</h5>
                    <p>聊天区显示守护身份标识</p>
                  </div>
                </li>
                <li>
                  <img src="../../assets/care/icon-sou.png" alt="">
                  <div>
                    <h5>身份表示</h5>
                    <p>聊天区显示守护身份标识</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
            <div class="care_operation">
              <div class="my_asset">我的星钻: <i class="xz_icon01"></i><span>{{zx_count}}</span></div>
              <button class="derdge_btn">立即开通</button>
            </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Audience",
  data() {
    return {
      isActive: "gz",
      dialog:false,
      c_name:'我想静静',
      c_id:23,
      zx_count:234,
    };
  },
  methods: {
    changeType() {
      if (this.isActive === "gz") {
        this.isActive = "gl";
      } else if (this.isActive === "gl") {
        this.isActive = "gz";
      }
    },
    derdge(){
      if(this.dialog === false) this.dialog = true;
    }
  }
};
</script>
<style scoped lang="less">
@import "../css/audience.less";
</style>