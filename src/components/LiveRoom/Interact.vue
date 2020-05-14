<template>
  <div class="interact">
      <div class="rank_daily">
          <div class="rank_daily_title">
              <h4><div>日榜</div><div>榜单</div></h4>
              <i></i>
          </div>
          <ul class="rank_daily_content">
              <li>
                  <span>NO.1</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
              <li>
                  <span>NO.2</span>
                  <i></i>
                  <p>暖暖的张先生。。。</p>
              </li>
          </ul>
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
        }
    },
    methods:{
        changeAct(ind){
            this.current = ind
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
        height:88px;
        background-color: rgba(0,0,0,0.46);
        .rank_daily_title{
            display: inline-block;
            height: 88px;
            width: 17%;
            h4{
                position: absolute;
                width: 34px;
                text-align: center;
                left: 50%; 
                top:50%;
                transform: translate(-50%,-50%);
                text-align: center;
                color: #ff33cc;
                font-weight: 400;
            }
        }
        .rank_daily_content{
            display: inline-block;
            width: 76%;
            position: absolute;
            right: 20px;
            li{
                height: 36px;
                line-height: 36px;
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
            width: 100%;
            height: 755px;
            background-color: #fff;
        }
    }
}
</style>