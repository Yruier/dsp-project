<template>
    <div class="select-plan">
        <h3>广告创意</h3> 
        <h4>落地页</h4>
        <p>着陆页地址：<input type="text" placeholder="请设置广告名称"><span>预览</span></p>

        <div class='upload-creative'>
            <h4>上传创意</h4>

        <!-- <div class='add-creative'> -->
            <div class='add-creative'>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane v-for='(val,index) in creativeData[0]' :key='index' :label="val" :name='`cy${index+1}`'>
                        <show-tab-pane></show-tab-pane>
                    </el-tab-pane>
                    <el-tab-pane :label="creativeData[1]" name="addcy"></el-tab-pane>
                </el-tabs>
            </div>
            <div style='{height:"10px"}'></div>
            <div><el-button type="primary">提交</el-button></div>
        </div>
        <el-dialog
            title="选择模板"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <!-- <span>单图</span><span>多图</span> -->
            <span slot="footer" class="dialog-footer">
                <el-button @click="singlePic">单  图</el-button>
                <el-button type="primary" @click="multiplePic">多 图</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ShowTabPane from '../ShowTabPane/ShowTabPane'

export default {
    data() {
        return {
            creativeData:[[],'+添加创意'],
            centerDialogVisible: false,
            activeName: 'addcy',
            creativeNum:0
        };
    },
    methods: {
        handleClick(tab, event) {
            if(tab.name==='addcy'){
                this.centerDialogVisible = true
            }
            console.log(tab, event);
        },
        singlePic(){
            this.centerDialogVisible = false;
            let creativeNum=++this.creativeNum;
            this.creativeData[0].push(`创意${creativeNum}`)
            this.activeName=`cy${creativeNum}`
        },
        multiplePic(){
            this.centerDialogVisible = false
        }
    },
    components:{
        ShowTabPane
    }
     
    
  }
</script>

<style>
.addAdvertisement-views{
    padding:20px;
}
.upload-creative{
    width:100%;
    height:100%;
}
.add-creative{
    min-height:60px;
}
</style>
