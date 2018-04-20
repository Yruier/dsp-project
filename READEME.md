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

### 1、项目整体技术选型

        本项目主要是采用 vue+webpack 来搭建的，页面的ui排版布局使用了 Element-ui ，js逻辑大部分采用的是 ES6 语法。
        vue是mvvm框架，便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也  
    完全能够为复杂的单页应用提供驱动。


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

        核心功能是广告数据的选择与展示，这一功能在 首页 和 数据中心页 都有用到，特别是在首页可以选取 ‘近7天/近30天/指定   
    日期范围’的数据，并根据日期请求数据，在折线图上展示相应的数据。当数据范围不跨月份时，按天绘制折线图；当数据范围跨月份时，按月份绘制折线图；当数据范围跨年时，就按照年份绘制折线图。折线图是使用 echarts 插件，动态生成x轴和y轴数据，然后渲染折线图。


### 5、数据管理

### 6、遇到的困难及解决方法



## 项目流程图

![avatar](/static/project.png)


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
