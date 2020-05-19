<template>
  <div class="tool">
    <ul>
      <li>
        <div @click="turnHome" class="tool_item">
          <img src="../../assets/logo.png" alt />
        </div>
      </li>
      <li @mouseenter="show('ph')" @mouseleave="hidden('ph')">
        <div class="tool_item">
          <img src="../../assets/ph.png" alt />
          <p>排行</p>
        </div>
        <div class="ph_box" v-show="ph">
          <PopupPh></PopupPh>
        </div>
      </li>
      <li @mouseenter="show('gz')" @mouseleave="hidden('gz')">
        <div class="tool_item">
          <img src="../../assets/gz.png" alt />
          <p>关注</p>
        </div>
        <div class="gz_box" v-show="gz">
          <div class="search">
            <input type="text" placeholder="搜索ID/名称" />
            <i></i>
          </div>
          <ul class="gz_lists">
            <li>
              <img src="../../assets/logo.png" alt="">
              <div class="kb_info">
                <h4>木木</h4>
                <p style="color:#ccc; width:100%">开播时间早上开始到中午</p>
              </div>
            </li>
            <li>
              <img src="../../assets/logo.png" alt="">
              <div class="kb_info">
                <h4>木木</h4>
                <p style="color:#ccc; width:100%">开播时间早上开始到中午</p>
              </div>
            </li>
            <li>
              <img src="../../assets/logo.png" alt="">
              <div class="kb_info">
                <h4>木木</h4>
                <p style="color:#ccc; width:100%">开播时间早上开始到中午</p>
              </div>
            </li>
            <li>
              <img src="../../assets/logo.png" alt="">
              <div class="kb_info">
                <h4>木木</h4>
                <p style="color:#ccc; width:100%">开播时间早上开始到中午</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li @mouseenter="show('zj')" @mouseleave="hidden('zj')">
        <div class="tool_item">
          <img src="../../assets/icon-zuji.png" alt />
          <p>足迹</p>
        </div>
        <div class="zj_box" v-show="zj">
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
import PopupPh from '../popups/PopupPh'
export default {
  name: "Tool",
  data() {
    return {
      'zj':false,
      'gz':false,
      'ph':false,
      input2:'',
    }
  },
  components:{
    PopupPh
  },
  methods: {
    turnHome() {
      this.$router.push("/");
    },
    show(val){
      switch (val) {
        case 'zj':
          return this.zj = true
          break;
        case 'gz':
          return this.gz = true
          break;
        case 'ph':
          return this.ph = true
          break;
        default:
          break;
      }
    },
    hidden(val){
      switch (val) {
        case 'zj':
          return this.zj = false
          break;
        case 'gz':
          return this.gz = false
          break;
        case 'ph':
          return this.ph = false
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped lang="less">
@import '../css/tool.less';
</style>