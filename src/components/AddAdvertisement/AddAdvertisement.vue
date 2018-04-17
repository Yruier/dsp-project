<template>
<div class='addAdvertisement'>
    <div class='addAdvertisement-navs'>
        <el-menu default-active="2" 
            router
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#ccc"
            text-color="#000"
            active-text-color="#ffd04b">
            <el-menu-item-group>
                <template slot="title">
                    <span>建立广告计划</span>
                </template>
                <el-menu-item index="/index/addAdvertisement/selectPlan">选择计划</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">
                    <span>广告单元</span>
                </template>
                <el-menu-item index="2-1">基本信息</el-menu-item>
                <el-menu-item index="2-2">定向</el-menu-item>
                <el-menu-item index="2-3">广告位</el-menu-item>
                <el-menu-item index="2-4">出价</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
                <template slot="title">
                    <span>广告创意</span>
                </template>
                <el-menu-item index="3-1">落地页</el-menu-item>
                <el-menu-item index="13-2">上传创意</el-menu-item>
            </el-menu-item-group>
        </el-menu>
    </div>
    
    <div class='addAdvertisement-views'>
        <router-view/>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang='css'>
.addAdvertisement{
    width: 100%;
    height:100%;
    display: flex;
}
.addAdvertisement-navs{
    height:100%;
    background-color:#ccc;
}
.addAdvertisement-views{
    flex:1;
    background-color: #fff;
}
.addAdvertisement-navs .el-menu-item-group__title{
    height:50px;
    line-height: 36px;
}
.addAdvertisement-navs .el-menu-item{
    text-indent: 20px;
    height: 40px;
    line-height: 40px;
}
</style>
