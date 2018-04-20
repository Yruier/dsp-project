import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '../utils/request';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: '',
        username: '请登录',
        creativeTplType: ''
    },
    actions: {
        getToken({ commit }, { data, notify, router }) {
            login(data.username, data.password, '1314000').then((res) => {
                if (res.code === 0) {
                    commit('saveToken', res.token);
                    commit('saveUser', res.username)
                    localStorage.setItem('token', res.token)
                    localStorage.setItem('username', res.userInfo.username)
                    localStorage.setItem('userid', res.userInfo.userid)

                    notify({
                        title: '登录成功',
                        message: '跳转首页',
                        type: 'success',
                        duration: 2000
                    })

                    setTimeout(() => {
                        router.push({
                            path: '/index/home'
                        })
                    }, 1000);
                } else {
                    notify({
                        title: '登录出错',
                        message: '用户名或密码错误',
                        type: 'error',
                        duration: 2000
                    })
                }
            })
        }
    },
    mutations: {
        saveToken(state, payload) {
            state.token = payload
        },
        saveUser(state, payload) {
            state.username = payload
        },
        updateCreativeTplType(state, payload) {
            state.creativeTplType = payload
        }
    }
})

export default store;