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
          <i class="tool_icon" :class="icon_ph"></i>
          <p>排行</p>
        </div>
        <div class="ph_box" v-show="ph">
          <PopupPh></PopupPh>
        </div>
      </li>
      <li @mouseenter="show('gz')" @mouseleave="hidden('gz')">
        <div class="tool_item">
          <i class="tool_icon" :class="icon_gz"></i>
          <p>关注</p>
        </div>
        <div class="gz_box" v-show="gz">
          <div class="search">
            <input type="text" placeholder="搜索ID/名称" />
            <i></i>
          </div>
          <ul class="gz_lists">
            <li>
              <img src="../../assets/avatar_test.png" alt />
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
          <i class="tool_icon" :class="icon_zj"></i>
          <p>足迹</p>
        </div>
        <div class="zj_box" v-show="zj">
          <div class="today zj_content">
            <i class="round_icon"></i>
            <h5>今天</h5>
            <ul>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
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
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
                    <span style="color:#ff3399">排行:100+</span>
                    <span style="color:#color:rgba(51,51,51,1);">直播中</span>
                  </p>
                </div>
                <button class="follow">关注</button>
              </li>
              <li>
                <img src="../../assets/money/icon-qiang.png" alt style="float:left;marginRight:4px" />
                <div class="state">
                  <p>
                    <span class="zb_name">这是谁</span>
                    <img src="../../assets/icon-jiazu.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-jiazu.png" alt />
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
      <li @mouseenter="show('pk')" @mouseleave="hidden('pk')">
        <div class="tool_item">
          <i class="tool_icon" :class="icon_pk"></i>
          <p>PK</p>
        </div>
        <div class="pk_box" v-show="pk">
          <div class="pk_content">
            <h4>
              当前在线主播
              <i class="el-icon-close" style="float:right"></i>
            </h4>
            <div class="search_nick">
              <el-input placeholder="搜索主播昵称" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </div>
            <ul class="zb_can_touch">
              <li v-for="(zb,index) in zbLists" :key="zb.name+index">
                <img :src="zb.photo" alt class="zb_photo" />
                <div class="zb_base_info">
                  <p>
                    {{zb.name}}
                    <img src="../../assets/icon-jiazu.png" alt />
                    <img src="../../assets/icon-nv1.png" alt />
                  </p>
                  <p>
                    <img src="../../assets/icon-dengji.png" alt />
                    <span>排行:{{zb.rank}}</span>
                  </p>
                </div>
                <div class="get_touch">{{zb.touch_state}}</div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
    <div class="toolBottom">
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">
          <img src="../../assets/anzhuo.png" alt style="height:120px;width:120px" />
        </div>
        <img src="../../assets/phone01.png" alt />
      </el-tooltip>
      <el-tooltip class="item" effect="light" placement="right">
        <div slot="content">this is tooltips</div>
        <img src="../../assets/icon-help.png" alt />
      </el-tooltip>
    </div>
  </div>
</template>
<script>
import PopupPh from "../popups/PopupPh";
export default {
  name: "Tool",
  data() {
    return {
      zj: false,
      gz: false,
      ph: false,
      input2: "",
      pk: false,
      touch_state: "连麦中",
      zbLists: [
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        },
        {
          photo: require("../../assets/avatar_test.png"),
          name: "木木",
          rank: "1000+",
          touch_state: "连麦中"
        }
      ],
      icon_ph: "icon_ph",
      icon_pk: "icon_pk",
      icon_gz: "icon_gz",
      icon_zj: "icon_zj"
    };
  },
  components: {
    PopupPh
  },
  methods: {
    turnHome() {
      this.$router.push("/");
    },
    show(val) {
      switch (val) {
        case "zj":
          this.zj = true;
          this.icon_zj = "icon_zj_actived";
          break;
        case "gz":
          this.gz = true;
          this.icon_gz = "icon_gz_actived";
          break;
        case "ph":
          this.ph = true;
          this.icon_ph = "icon_ph_actived";
          break;
        case "pk":
          this.pk = true;
          this.icon_pk = "icon_pk_actived";
          break;
        default:
          break;
      }
    },
    hidden(val) {
      switch (val) {
        case "zj":
          this.zj = false;
          this.icon_zj = "icon_zj";
          break;
        case "gz":
          this.gz = false;
          this.icon_gz = "icon_gz";
          break;
        case "ph":
          this.ph = false;
          this.icon_ph = "icon_ph";
          break;
        case "pk":
          this.pk = false;
          this.icon_pk = "icon_pk";
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style scoped lang="less">
@import "../css/tool.less";
</style>