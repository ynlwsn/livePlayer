import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        showMask:false,//登陆注册蒙层
    },
    mutations:{
        // 控制登陆注册的展示
        toggleMask(state){
            if(state.showMask == false){
                state.showMask = true
            }else{
                state.showMask = false
            }
        }
    },
    getters:{
        
    },
    actions:{},
    modules:{}
})