import axios from 'axios'

const urlMap = {
    development: 'http://localhost:3000/',
    production: 'http://localhost:3000/'
};
const baseUrl = urlMap[process.env.NODE_ENV];
const ERR_OK = 0;
const NoNetWorkMsg = '没有网络哟';
const NetworkResponse = (suc = false, data = null, msg = null) => {
    return {suc, data, msg}
};
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 1000 * 10,
    headers: {'Content-Type': 'application/json;charset=utf-8'},// 设置传输内容的类型和编码
    withCredentials: true// 指定某个请求应该发送凭据。允许客户端携带跨域cookie，也需要此配置
});

export function get(url) {
    return function (params = {}) {
        return axiosInstance.get(url, {
            params
        }).then((res) => {
            console.log(url, "res = " + res);
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
        return axiosInstance.post(url, {
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
