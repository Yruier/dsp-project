<template>
    <div class='index'>
        
            <el-menu default-active="/index/home" class="el-menu-vertical-demo" router :collapse="isCollapse">
                <el-menu-item index="">
                    <i class="el-icon-star-on"></i>
                    <span slot="title">智能投放系统</span>
                </el-menu-item>

                <el-menu-item index="/index/addAdvertisement">
                    <i class="el-icon-plus"></i>
                    <span slot="title">新建广告</span>
                </el-menu-item>

                <el-menu-item index="/index/home">
                    <i class="el-icon-menu"></i>
                    <span slot="title">首页概览</span>
                </el-menu-item>

                <el-submenu index='advertisement'>
                    <template slot="title">
                        <i class="el-icon-news"></i>
                        <span slot="title">广告管理</span>
                    </template>
                    <el-menu-item-group default-active="/index/home">
                        <el-menu-item index="/index/plan">广告计划</el-menu-item>
                        <el-menu-item index="/index/unit">广告单元</el-menu-item>
                        <el-menu-item index="/index/creative">广告创意</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                
                <el-menu-item index="/index/dataCenter">
                    <i class="el-icon-sold-out"></i>
                    <span slot="title">数据中心</span>
                </el-menu-item>
                <el-menu-item index="/index/toolcase">
                    <i class="el-icon-printer"></i>
                    <span slot="title">工具箱</span>
                </el-menu-item>
            </el-menu>

            <el-container>
                <el-header>
                    <el-radio-group v-model="isCollapse">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <div class='user-info'>
                        <div>用户名：{{username}}</div> 
                        <div>账号ID：{{userid}}</div> 
                    </div>
                    <div @click='exit'>退出</div>
                </el-header>
                
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true,
                username:'000',
                userid:'000'
            };
        },
        methods: {
            goPlan(){
                this.$router.push('/index/plan')
            },
            exit(){
                localStorage.setItem('username','')
                localStorage.setItem('userid','')
                this.$router.push('/login')
                
                this.$alert('确定退出当前账号吗', '退出登录', {
                confirmButtonText: '确定',
                callback: action => {
                    console.log(action,'action')
                    this.$message({
                        type: 'info',
                        message: `action: ${ action }`
                    });
                }
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                let username = localStorage.getItem('username');
                let userid = localStorage.getItem('userid')
                // 通过 `vm` 访问组件实例
                vm.username = username;
                vm.userid = userid;
            })
        }
    }
</script>

<style>
    .index{
        width:100%;
        height:100%;
        display: flex;
    }
    .el-menu-vertical-demo {
        background-color: #022050;
    }
    .el-menu-item-group{
        background: #1C2941;
    }
    .el-container{
        flex:1;
    }
    .el-header{
        background-color: #fff;
        border-bottom:2px solid #eee;
    }
    .el-menu-item,.el-submenu__title,.el-menu-item i,.el-submenu__title i{
        color:#fff;
    }
    .el-menu-item:hover,.el-submenu__title:hover{
        background-color: #2873FF;
    }
    .el-menu-item.is-active{
        background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .el-main{
        width:100%;
        height:100%;
        padding:0;
    }
</style>
