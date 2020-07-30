import Vue from 'vue'
import Vuex from 'vuex'
import request from '../network/index'
import _ from 'lodash'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    doctors:[],
    breadCrumb:null,
    screenHeight:'',
  },
  actions:{
    initDoctors(context){
       request('/springDemo/api/getDoctors.do')
          .then(response=>{
            context.commit('getDoctors',response.data)
          })
    }
  },
  mutations: {
    getDoctors(state,payload){
      state.doctors=payload
    },
    setBreadCrumb(state,payload){

      if(payload){

        state.breadCrumb=payload
      }
    },
    setScreenHeight(state,payload){
      state.screenHeight=payload;
    }
  }
})

export default store
