import {dologin} from '../../../src/common/api'

const state = {
    username:'dengjie',
    password:'1234',
    sms:'',
    isLoading:false,
    leftTimes:0,
    errorMessage:''
};

const mutations = {
    loginSuccess:(state,payload)=>{
        state.isloading = false;
        console.log(payload)
    },
    loginFailed:(state,payload)=>{
        state.isloading = false;
        state.errorMessage = payload;
    },
    updateUsername:(state,username)=>{
        state.username = username;
    },
    updatePassword:(state,username)=>{
        state.password = username;
    }
};

const actions = {
    actionLogin:(context)=>{
        console.log(state.username,state.password);
        dologin({'username':state.username,'password':state.password}).then((suc,data,msg) =>{
            if (suc){
                context.commit('loginSuccess',data);
            }else {
                context.commit('loginFailed',msg);
            }
        });
    }
};

export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    mutations,
    actions
}