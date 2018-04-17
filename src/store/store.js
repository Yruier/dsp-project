import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '../utils/request';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: '',
        userid: ''
    },
    actions: {
        saveuname() {}
    },
    mutations: {

    }
})

export default store;