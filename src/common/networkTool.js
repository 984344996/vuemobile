import axios from 'axios'

const urlMap = {
    development: '/',
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
            const {errno, data, msg} = res.data;
            if (errno === ERR_OK) {
                return NetworkResponse(true, data, msg)
            } else {
                return NetworkResponse(false, null, msg)
            }
        }).catch((e) => {
            return NetworkResponse(false, null, e.errorMessage.length > 0 ? e.errorMessage : NoNetWorkMsg)
        })
    }
}

export function post(url) {
    return function (params = {}) {
        return axios.post(baseUrl + url, {
            params
        }).then((res) => {
            const {errno, data, msg} = res.data;
            if (errno === ERR_OK) {
                return NetworkResponse(true, data, msg)
            } else {
                return NetworkResponse(false, null, msg)
            }
        }).catch((e) => {
            return NetworkResponse(false, null, e.errorMessage.length > 0 ? e.errorMessage : NoNetWorkMsg)
        })
    }
}
