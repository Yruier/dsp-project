import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import Index from '@/components/Index/Index'
import AddAdvertisement from '@/components/AddAdvertisement/AddAdvertisement'
import Home from '@/components/Home/Home'
import Advertisement from '@/components/Advertisement/Advertisement'
import DataCenter from '@/components/DataCenter/DataCenter'
import ToolCase from '@/components/ToolCase/ToolCase'
import Plan from '@/components/Plan/Plan'
import Unit from '@/components/Unit/Unit'
import Creative from '@/components/Creative/Creative'
import SelectPlan from '@/components/SelectPlan/SelectPlan'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [{
                path: 'addAdvertisement',
                component: AddAdvertisement,
                children: [{
                    path: 'selectPlan',
                    component: SelectPlan
                }]
            }, {
                path: 'home',
                component: Home
            }, {
                path: 'plan',
                component: Plan
            }, {
                path: 'unit',
                component: Unit
            }, {
                path: 'creative',
                component: Creative
            }, {
                path: 'dataCenter',
                component: DataCenter
            }, {
                path: 'toolCase',
                component: ToolCase
            }]
        }
    ]
})