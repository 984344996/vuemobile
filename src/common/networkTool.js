import axios from 'axios'

const urlMap = {
    development: 'localhost:8080/',
    production: 'http://ustbhuangyi.com/sell/'
};
const baseUrl = urlMap[process.env.NODE_ENV];
const ERR_OK = 0;
const NoNetWorkMsg = '没有网络哟';
const NetworkResponse = (suc = false, data = null, msg = null) => {
    return {suc, data, msg}
};

export function get(url) {
    return function (params = {}) {
        return axios.get(baseUrl + url, {
            params
        }).then((res) => {
            const {status, data, msg} = res.data;
            if (status === ERR_OK) {
                return NetworkResponse(true, data, msg)
            } else {
                return NetworkResponse(false, null, msg)
            }
        }).catch((e) => {
            console.log(url,"request error:",e.toString());
            return NetworkResponse(false, null, NoNetWorkMsg)
        })
    }
}

export function post(url) {
    return function (params = {}) {
        return axios.post(baseUrl + url, {
            params
        }).then((res) => {
            const {status, data, msg} = res.data;
            if (status === ERR_OK) {
                return NetworkResponse(true, data, msg)
            } else {
                return NetworkResponse(false, null, msg)
            }
        }).catch((e) => {
            console.log(url,"request error:",e.toString());
            return NetworkResponse(false, null, NoNetWorkMsg)
        })
    }
}
