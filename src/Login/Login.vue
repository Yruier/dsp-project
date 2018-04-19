<template>
    <div class='login'>
        <el-tabs type="border-card">
            <el-tab-pane label="快速登录">
                <el-form status-icon label-width="100px" class="demo-ruleForm" ref='loginBox'><!-- :model='formData'-->
                    <el-form-item label="用户名" prop='username'><!--:reles='userRules'-->
                        <el-input type="text"></el-input><!-- v-model="formData.username"-->
                    </el-form-item>
                    <el-form-item label="密码" prop="password"><!-- :rules='passRules'-->
                        <el-input type="password"></el-input><!-- v-model='formData.password'-->
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" v-on:click.native='login'>登录</el-button>
                        <el-button @click="register">重置</el-button>
                        <el-button @click="register">注册</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="注册账号">
                <!-- <el-form status-icon label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号" prop="pass">
                        <el-input type="text" v-model="ruleForm1.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="设置密码" prop="checkPass">
                        <el-input type="password" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login">立即注册</el-button>
                    </el-form-item>
                </el-form> -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Vue from 'vue'
import {login} from '../../utils/request'

export default {
    data() {
      return{
        username:'',
        password:''
        // formData:{
        //     username:'qw',
        //     password:''
        // },
        // userRules:[{
        //     required:true,
        //     message:'用户名不可省略'
        // },{
        //     type:'phone',
        //     message:'请输入正确格式的手机号'
        // }],
        // passRules:{
        //     required:true,
        //     message:'密码不可省略'
        // }
      }
    },
    methods: {
        login() {
            // validate 是element-ui组件提供的表单验证函数
            // this.$refs.loginBox.validate((isValid,options)=>{
            //     if(isValid){
            //         this.$store.dispatch('getToken',{
            //             data:this.formData,
            //             notify:this.$notify,
            //             router:this.$router
            //         })
            //     }else{
            //         this.$notify({
            //             title:'出错了',
            //             message:'请填写正确的用户名和密码',
            //             type:'warning'
            //         })
            //     }
            // })
            login(this.username,this.password,'1314').then(res=>{
                // localStorage.setItem('username',res.userInfo.username)
                // localStorage.setItem('userid',res.userInfo.id)
                // localStorage.setItem('password',res.userInfo.id)
                if(!res.code){this.$router.push('/index/home')}
            })
      },
      register() {
        // this.$refs[formName].resetFields();
      }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            let username=localStorage.getItem('username');
            let userid=localStorage.getItem('userid');
            if(username!==''){
                // Vue.set(vm.data,'username',username)
            }
            console.log(username,userid,'before router enter')
        })
    }
}
</script>

<style>

.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png')  no-repeat;
  background-size: 100% 100%;
  position: relative;

}
.el-tabs--border-card{
    width:500px;
    height:400px;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    margin:auto;
}
.el-form{
    width:80%;
    height:50%;
    margin:0 auto;
}
.el-tabs__nav{
    width:60%;
    margin:0 auto;
    float:none;
}
.el-tabs__item {
    width: 50%;
    text-align: center
}
.el-tabs--border-card>.el-tabs__content{
    padding:50px 50px 50px 20px;
}

</style>
