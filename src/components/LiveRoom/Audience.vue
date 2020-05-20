<template>
  <div class="audience">
    <div class="care">
      <div class="care_title">
        <h4>守护（<span>4</span> / 31）</h4>
        <button>开通</button>
      </div>
      <div class="sh_box">
        <ul class="care_zb">
          <li>
            <img src="../../assets/logo.png" alt="">
            <i></i>
            <p>这是谁</p>
          </li>
          <li>
            <img src="../../assets/logo.png" alt="">
            <i></i>
            <p>这是谁</p>
          </li>
          <li>
            <img src="../../assets/logo.png" alt="">
            <i></i>
            <p>这是谁</p>
          </li>
          <li>
            <img src="../../assets/logo.png" alt="">
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
              <p><img src="../../assets/icon-gj.png" alt=""><span>34234</span></p>
              <p><img src="../../assets/icon-jiazu.png" alt=""><span>这是谁</span></p>
            </li>
            <li>
              <p><img src="../../assets/icon-gj.png" alt=""><img src="../../assets/icon-gj.png" alt=""><span>34234</span></p>
              <p><img src="../../assets/icon-jiazu.png" alt=""><span>这是谁</span></p>
            </li>
          </ul>
        </div>
        <div v-else>
           <ul>
            <li>
              <p><img src="../../assets/icon-gj.png" alt=""><img src="../../assets/icon-gj.png" alt=""><span>34234</span></p>
              <p><img src="../../assets/icon-jiazu.png" alt=""><span>这是谁</span></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Audience',
  data(){
    return{
      isActive:'gz'
    }
  },
  methods:{
    changeType(){
      if(this.isActive === 'gz'){
        this.isActive = 'gl'
      }else if(this.isActive === 'gl'){
        this.isActive = 'gz'
      }
    }
  }
}

</script>
<style scoped lang="less">
@import '../css/audience.less';
</style>