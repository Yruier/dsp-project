// 封装  登录请求
import instance from './intercept';

// 登录请求
export function login(username, password, identifyCode) {
    return new Promise((resolve, reject) => {
        instance.post('/dsp-admin/user/login', {
            username,
            password,
            identifyCode
        }).then((res) => {
            resolve(res)
        })
    })
}

// 获取广告创意页面table 数据请求
export function getTableData(token) {
    return new Promise((resolve, reject) => {
        instance.post('/dsp-admin/addAdvertisement/creative').then((res) => {
            resolve(res)
        })
    })
}