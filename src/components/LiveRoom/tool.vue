<template>
  <div class="tool">
    <ul>
      <li>
        <div @click="turnHome" class="tool_item">
          <img src="../../assets/logo.png" alt />
        </div>
      </li>
      <li>
        <div class="tool_item">
          <img src="../../assets/ph.png" alt />
          <p>排行</p>
        </div>
      </li>
      <li>
        <div class="tool_item">
          <img src="../../assets/gz.png" alt />
          <p>关注</p>
        </div>
      </li>
      <li>
        <div class="tool_item">
          <img src="../../assets/icon-zuji.png" alt />
          <p>足迹</p>
        </div>
        <div class="zj_box">
          <div class="today zj_content">
            <i class="round_icon"></i>
            <h5>今天</h5>
            <ul>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
            </ul>
          </div>
          <div class="before zj_content">
             <i class="round_icon"></i>
            <h5>更早</h5>
            <ul>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px"/>
                <div class="state">
                    <p>  
                        <span class="zb_name">这是谁</span>
                        <img src="../../assets/icon-jiazu.png" alt="">
                    </p>
                    <p>
                        <img src="../../assets/icon-jiazu.png" alt="">
                        <span style="color:#ff3399">排行:100+</span>
                        <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                    </p>
                </div>
                <button class="follow">关注</button>
              </li>
            </ul> 
          </div>
        </div>
      </li>
    </ul>
    <div class="toolBottom">
      <img src="../../assets/phone01.png" alt />
      <img src="../../assets/icon-help.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "Tool",
  data() {
    return {
    };
  },
  methods: {
    turnHome() {
      this.$router.push("/");
    },
  }
};
</script>
<style scoped lang="less">
@import '../css/tool.less';
</style>