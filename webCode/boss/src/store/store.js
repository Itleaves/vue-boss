import Vue from 'vue'
import Vuex from 'vuex'
import {ADD_USER,CHANGEREGSTATE,CHANGLONGIN,ADD_WORKLIST} from './mutation-types'
import {postUser} from '../api/register'
import {getUser} from "../api/login";
import {getWorklist} from '../api/getworklist'
Vue.use(Vuex);

var store=new Vuex.Store({//创建一个仓库实例

  state: {//仓库存放数据的地方
    regInfo:{//注册状态
      name:null,
      pwd:null
    },
    loginInfo:{//登录状态
      lname:null,
      lpwd:null
    },
    isReg:null,    //是否注册
    isLogin:null, //是否登录
    errMsg:null,  //注册错误信息
    lerrMsg:null,  //登录错误信息
    worklist:null
  },

  getters:{//相当于state的计算属性，用来派生数据用的
      setErrMsg:(state)=>{
          return state.errMsg;
      }
  },



  mutations: {//更改状态的地方

      updateRegnName: function (state, {name}) { //修改注册用户名
          state.regInfo.name = name
      },
      updateRegnPwd: function (state, {pwd}) { //修改注册密码
          state.regInfo.pwd = pwd
          console.log(state.regInfo)
      },

      loginName: function (state, {lname}) { //修改登录用户名
          state.loginInfo.lname = lname
      },
      loginPwd: function (state, {lpwd}) { //修改登录密码
          state.loginInfo.lpwd = lpwd
          console.log(state.loginInfo)
      },

      [ADD_USER]: function (state, regInfo) { //添加用户
          state.users = regInfo
      },
      [CHANGEREGSTATE](state, obj) { //监听注册状态
          console.log(2);
          state.isReg = obj.isReg;
          state.errMsg = obj.errMsg;
          console.log(state.errMsg)
      },
      [CHANGLONGIN](state, obj) { //监听注册状态
          console.log(4);
          state.isLogin = obj.isLogin;
          state.lerrMsg = obj.lerrMsg;
          console.log(state.lerrMsg)
      },
      [ADD_WORKLIST](state,obj){//写入状态
          state.worklist=obj.list;
          console.log(state.worklist)
      }

  },

  actions: {//做异步操作，提交mutation
      postUserAction: function ({commit, state}) {
          postUser(state.regInfo).then((res) => {
              if (!Number(res.data.success)) {
                  commit('CHANGEREGSTATE', {isReg: false, errMsg: res.data.errMsg})
                  return;
              } else {
                  commit('CHANGEREGSTATE', {isReg: true, errMsg: res.data.errMsg})
              }
          })
      },

      getUserAction: function ({commit, state}) {
          getUser(state.loginInfo).then((res) => {
              console.log(res.data)
              if (!Number(res.data.success)) {
                  commit('CHANGLONGIN', {isLogin: false, lerrMsg: res.data.errMsg})
                  return;
              } else {
                  commit('CHANGLONGIN', {isLogin: true, lerrMsg: res.data.errMsg})
              }
          })
      },

      getworklistAction:function ({commit,state}) {
          getWorklist().then((res) => {
              console.log(res.data)
              commit('ADD_WORKLIST', {list:res.data})
          })
      }
  }
})

export default store
