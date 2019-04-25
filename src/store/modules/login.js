import {dologin} from '../../../src/common/api'

const state = {
    isLoading: false,
    data:null,
    msg:null
};

const mutations = {
    setIsLoading:(state,isLoading) => {
        state.isLoading = isLoading;
    },

    loginSuccess:(state, data) => {
        state.data = data;
    },

    loginFailed:(state, msg) => {
        state.msg = msg;
    }
};

const actions = {
    /// 登录Action
    actionLogin:(context, username, password)=>{
        context.commit("setIsLoading",true);
        return new Promise((resolve, reject) => dologin({'username':username,'password':password}).then((res) =>{
            let {suc, data, msg} = res;
            context.commit("setIsLoading",false);
            if (suc){
                context.commit('loginSuccess',data);
                resolve(data);
            }else {
                context.commit('loginFailed',msg);
                reject(msg);
            }
        }));
    }
};

export default {
    namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    mutations,
    actions
}