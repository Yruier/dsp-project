# dsp-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install / yarn 

# serve with hot reload at localhost:8080
npm run dev
cd server  => node-dev server

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


## dsp后台管理项目总结

##### 未完待续。。。

### 1、项目整体技术选型

        本项目主要是采用 vue+webpack+vuex 来搭建的，页面的ui排版布局使用了 Element-ui ，js逻辑大部分采用的是 ES6 语法。
        vue是mvvm框架，便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也  
    完全能够为复杂的单页应用提供驱动。Vue 的整体思想是拥抱经典的 Web 技术，并在其上进行扩展。Vue 使用自身独有的 .vue 文
    件，可以直接在一个文件中写 html、css、js，对开发人员来说是非常灵活便捷的，只需要通过 vue-loader，你可以使用任意预处
    理器、后处理器，甚至深度集成 CSS Modules——全部都在 <style> 标签内。同时，Vue有自己独有的数据管理插件--vuex。更加深入集成 Vue 的状态管理解决方案的 Vuex 为开发者带来了更好的开发体验。使用 vuex 可以在定义的 store 中做一些异步请求，数据
    更新等操作。而且Vue 访问 store 的方法非常简单，只需要将store引进入口文件，并挂载到 new Vue() 中即可。
        对比React，React 使用 JSX 语法，对于很多习惯了 HTML 的开发者来说，Vue的模板比起 JSX 读写起来更自然，基于 HTML
    的模板使得将已有的应用逐步迁移到 Vue 更为容易。Vue 模板语法简单易学，但 JSX 对于不熟悉 js 的开发人员来说，学习成本会
    更高。


### 2、路由搭建，路由拦截的实现，权限接口设计

        使用 vue-router 搭建路由。
        该项目中路由分为一级路由和二级路由。

        一级路由页面：
            登录页  /login (用户打开网站，会从/路径重定向/login)
            默认页  /index (用户登录后，默认展示的页面)
        
        二级路由页面：(/index页面下的二级页面)
            新建广告  /index/addAdvertisement
            首页概览  /index/homr
            广告计划  /index/plan
            广告单元  /index/unit
            广告创意  /index/creative
            数据中心  /index/dataCenter
            工具箱    /index/toolCase

        三级路由页面：(/index/addAdvertisement页面下的三级路由)
            选择计划  /index/addAdvertisement/selectPlan
            (其他页面暂时未提供)


### 3、数据请求以及如何封装全局请求接口

### 4、项目中的核心功能和难点功能介绍

        核心功能：
        首页折线图广告数据的选择与展示，这一功能在 首页 和 数据中心页 都有用到，特别是在首页可以选取 ‘近7天/近30天/指定日
    期范围’的数据，并根据日期请求数据，在折线图上展示相应的数据。当数据范围不跨月份时，按天绘制折线图；当数据范围跨月时，
    按月份绘制折线图；当数据范围跨年时，就按照年份绘制折线图。折线图是使用 echarts 插件，动态生成x轴和y轴数据，然后渲染
    折线图。

        难点功能：
        分页功能，广告创意页面数据比较多时，可以根据用户选择的每一数据的条数，动态的将数据分为不同的页数。这一功能将表格
    和底部的分页器分为了两个独立的组件，使用 Element-ui 中的组件很快就能完成该页面的排版，表格数据在路由生命周期 created 
    中通过 $http 请求取得（暂时未将数据存入 store ，后续会完善），并渲染表格。底部分页器可点击选择，也可输入选择。（。。。
    但是。。。点击选择数据，表格数据同时更新的功能尚未完成，由于使用的是 Element-ui 的组件，还未找到数据更新的方法。。。
    待解决！！！）
    

### 5、数据管理

        该项目中数据管理使用了 Vuex 。Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组
    件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。定义 store 并在组件内访问数据的方法很简单，(如下)
    只需将是 store 引入主入口文件，并挂载到 new Vue() 中即可。

        new Vue({
            el: '#app',
            router,
            store,
            components: { App },
            template: '<App/>'
        })


### 6、遇到的困难及解决方法




## 项目流程图

![avatar](/static/project.png)


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
