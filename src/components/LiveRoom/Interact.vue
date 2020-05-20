<template>
  <div class="interact">
      <div class="rank_daily" ref="rankDaily">
          <div class="expansion_box">
          <div class="rank_daily_title" @click="upOrDown">
              <h4><div>日榜</div><div>榜单</div></h4>
              <i :class="icon"></i>
          </div>
          <ul class="rank_daily_content">
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
          </ul>
          </div>
      </div>
      <div class="interact_area">
          <ul class="interact_title">
              <li v-for="(item,index) in interact_title" :key="item" @click="changeAct(index)" :class="{interact_active:current === index}">{{item}}</li>
          </ul>
          <div class="interact_content">
              <div v-if="current == '0'"><InteractAll></InteractAll></div>
              <div v-else-if="current == '1'"><Chat></Chat></div>
              <div v-else-if="current == '2'"><OrderAct></OrderAct></div>
              <div v-else-if="current == '3'"><GiftList></GiftList></div>
              <div v-else-if="current == '4'"><Activities></Activities></div>
              <div v-else-if="current == '5'"><Car></Car></div>
          </div>
      </div>
  </div>
</template>

<script>
import InteractAll from './InteractBox/InteractAll'
import Chat from './InteractBox/Chat'
import OrderAct from './InteractBox/OrderAct'
import GiftList from './InteractBox/GiftList'
import Activities from './InteractBox/Activities'
import Car from './InteractBox/Car'
export default {
    name:'Interact',
    data(){
        return{
            interact_title:['全部','聊天','点才艺','礼单','活动','座驾'],
            current:0,
            icon:'el-icon-arrow-down'
        }
    },
    methods:{
        changeAct(ind){
            this.current = ind
        },
        // 日榜榜单展开和收起
        upOrDown(){
            if(this.icon === 'el-icon-arrow-down'){
                this.icon = 'el-icon-arrow-up'
                this.$refs.rankDaily.style.overflow = 'visible'
            }else if(this.icon === 'el-icon-arrow-up'){
                this.icon = 'el-icon-arrow-down'
                this.$refs.rankDaily.style.overflow = 'hidden'
                
            }
        }
    },
    components:{
        InteractAll, Chat, OrderAct, GiftList, Car, Activities
    }
}

</script>
<style scoped lang="less">
.interact{
    position: absolute;
    left: 1124px;
    width: 480px;
    height: 966px;
    top:22px;
    .rank_daily{
        width:480px;
        height: 88px;
        overflow: hidden;
        background-color: rgba(0,0,0,0.46);
        .expansion_box{
            height: 898px;
            width: 480px;
            z-index: 999;
            background-color: rgba(0,0,0,0.46);
        }
        .rank_daily_title{
            min-height: 88px;
            width: 17%;
            left: 0;
            top: 0;
            position: absolute;
            z-index: 1000;
            h4{
                width: 34px;
                color: #ff33cc;
                font-weight: 400;
                position: relative;
                top: 20px;
                left: 24px;
            }
            i{
               width: 19px;
               height: 10px;
               background-size: cover;
               color: white;
               position: relative;
               top:20px;
               left: 40px;
               transform: translateX(-50%);
            }
        }
        .rank_daily_content{
            max-height: 898px;
            overflow: auto;
            width: 83%;
            padding-left: 22px;
            z-index: 1000;
            left: 17%;
            li{
                height: 42px;
                line-height: 42px;
                width: 100%;
                border-bottom:1px solid rgba(150, 149, 149, 0.66);
                span{
                    color: white;
                    margin-right: 20px;
                }
                i{
                    display: inline-block;
                    height: 22px;
                    width: 44px;
                    margin-right: 20px;
                    background-image: url(../../assets/icon-qinwang.png);
                    background-size: cover;
                    position: relative;
                    top:4px;
                }
                p{display: inline-block;color: white;}
            }
        }
    }
    .interact_area{
        .interact_title{
            height: 39px;
            width: 100%;
            margin-top:12px;
            li{
                float: left;
                width:80px;
                height:39px;
                color: white;
                text-align: center;
                border-right: 1px solid #003366;
                background-color: rgba(0,0,0,0.46);
                line-height: 39px;
                cursor: pointer;
                &:last-child{
                    border:none
                }
            }
            .interact_active{
                background-color: #fff;
                color: #ff3399;
            }
        }
        .interact_content{
            width: 99.9%;
            height: 755px;
            background-color: #fff;
        }
    }
}
</style>