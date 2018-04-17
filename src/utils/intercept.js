import axios from 'axios';
import Vue from 'vue';
// 添加拦截器
const instance = axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 1000
});

// 请求拦截
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use(config => {
    if (config.status === 200) {
        return config.data;
    } else {
        return Promise.reject({
            status: config.status
        })
    }
}, error => {
    return Promise.reject(error)
})


// 将 instance 挂载到vue原型上
// Vue.prototype.$http=instance;  相当于
Object.defineProperty(Vue.prototype, '$http', {
    value: instance
})
export default instance;