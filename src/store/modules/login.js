import {dologin} from '../../../src/common/api'
import { setUser } from '@/common/userStorage'

const state = {
    isLoading: false,
    data:null,
    msg:""
};

const mutations = {
    setIsLoading:(state,isLoading) => {
        state.data = null;
        state.isLoading = isLoading;
        state.msg = "";
    },

    loginSuccess:(state, data, msg) => {
        state.data = data;
        state.msg = msg;
    },

    loginFailed:(state, msg) => {
        state.msg = msg;
        state.data = null;
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
                setUser(data);
                context.commit('loginSuccess',data, msg);
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