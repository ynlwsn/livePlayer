<template>
  <div class="aside">
    <div class="classify" v-show="isOn">
        <div class="aside_title"><img src="../../assets/logo.png" alt=""><span>六颜直播</span></div>
         <div class="search-id"><input type="text" placeholder="搜索"><i></i></div>
        <div class="all">
            <div class="classify_title">
                <i></i>
                <h4>全部分类</h4>
            </div>
            <div class="classify_item">
                 <button>热门</button>
                 <button>热门</button><button>热门</button><button>热门</button><button>热门</button>
                 <button>热门</button>
                 <button>热门</button><button>热门</button><button>热门</button><button>热门</button>
            </div>
        </div>
    </div>
    <div class="btn" @click="showAside">
    </div>
  </div>
</template>

<script>
export default {
  name: "Aside",
  mounted() {

  },
  data() {
    return {
        isOn : false,
        input1:''
    };
  },
  methods: {
      showAside(){
          this.isOn = !this.isOn;
          this.$emit('turnOn',this.isOn)
      }
  }
};
</script>
<style scoped lang="less">
@import '../css/aside.less';//一定要加；号，不然会报错
</style>