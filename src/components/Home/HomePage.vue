<template>
  <div class="home-page">
        <TopRecommend></TopRecommend>
        <div class="container">
            <div class="liu_recommend">
                <SubTitle title="六颜推荐" more="" icons='icon1'></SubTitle>
                <AnchorBox :anchorLists = anchor1></AnchorBox>
            </div>
            <div class="liu_recommend">
                <SubTitle title="在线直播" more="更多 >"  icons='icon2'></SubTitle>
                <AnchorBox :anchorLists = anchor2></AnchorBox>
            </div>
            <div class="liu_recommend">
                <div class="activity">
                    <div class="active-view">
                        <SubTitle title="推荐活动" more="更多 >"  icons='icon3' pathName="Actions"></SubTitle>
                        <div class="block">
                            <el-carousel trigger="click" height="2.08rem">
                            <el-carousel-item v-for="(img,index) in imgLists" :key="index">
                                <img v-bind:src="img.url">
                            </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="view_left">
                            <div class="small_box">
                                <img src="../../assets/icon-huodong.png" alt="">
                            </div>
                            <div class="small_box">
                                <img src="../../assets/icon-huodong.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="news">
                        <SubTitle title="最新消息" more="更多 >"  icons='icon4'></SubTitle>
                        <News></News>
                    </div>
                </div>
            </div>
            <div class="recharge"></div>
            <div class="liu_recommend">
                <SubTitle title="短视频" more="更多 >"  icons='icon5'></SubTitle>
                <AnchorBox :anchorLists = anchor3></AnchorBox>
            </div>
            <div class="example">
                <div class="hot">
                    <SubTitle title="热门主播榜" more=""  icons='icon6'></SubTitle>
                    <div class="example_box">
                        <ul class="hot">
                            <li>
                                <i class="badge"></i>
                                <img src="../../assets/logo.png" alt="">
                                <div class="uname">
                                    <p>小冷</p>
                                    <p>高颜值主播等你来</p>
                                </div>
                                <button class="attention">{{attention}}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="earn">
                    <SubTitle title="收益榜" more="更多 >"  icons='icon7'></SubTitle>
                    <div class="example_box rank_box">
                        <ul class="times">
                            <li>日榜</li>
                            <li>周榜</li>
                            <li>月榜</li>
                        </ul>
                        <ul class="top3">
                            <li>
                                <div class="num">NO.1</div>
                                <i class="badge top3-badge"></i>
                                <img src="../../assets/logo.png" alt="">
                                <div class="uname">
                                    <p>小冷</p>
                                    <p>高颜值主播等你来</p>
                                </div>
                                <button class="attention">{{attention}}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="contribute">
                    <SubTitle title="贡献榜" more="更多 >"  icons='icon8'></SubTitle>
                    <div class="example_box rank_box">
                         <ul class="times">
                            <li>日榜</li>
                            <li>周榜</li>
                            <li>月榜</li>
                        </ul>
                        <ul class="top3">
                            <li>
                                <div class="num">NO.1</div>
                                <i class="badge top3-badge"></i>
                                <img src="../../assets/logo.png" alt="">
                                <div class="uname">
                                    <p>小冷</p>
                                    <p>高颜值主播等你来</p>
                                </div>
                                <button class="attention">{{attention}}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <FloatWin></FloatWin>
  </div>
</template>

<script>
import TopRecommend from './TopRecommend'
import SubTitle from '../Common/SubTitle'
import AnchorBox from '../Common/AnchorBox'
import News from './News'
import FloatWin from './FloatWin'
export default {
    data(){
        return{
            anchor1:5,
            anchor2:10,
            anchor3:10,
            imgLists:[
                {'url':require('../../assets/tj.png')},
                {'url':require('../../assets/tj.png')},
                {'url':require('../../assets/tj.png')},
                {'url':require('../../assets/tj.png')},
            ],
            attention:'关注',
            
        }
    },
    components:{
        TopRecommend, SubTitle, AnchorBox,News, FloatWin
    }
}

</script>
<style lang="less" scoped>
    @import '../css/home.less';
</style>