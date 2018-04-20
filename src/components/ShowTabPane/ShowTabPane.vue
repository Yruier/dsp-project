<template>
    <div>
        <el-upload
            action="http://localhost:8090/dsp-creative/creative/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <div>
            <div>广告文案：<input type="text" placeholder="请设置广告名称">0/18字</div>
            <div>监控链接：<input type="text" placeholder="请设置监控链接："></div>
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            };
        },
        methods: {
            handleRemove(file, fileList) {
                this.imageUrl = "http://localhost:8090/" + res.data.value;
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style>
.pic{
    width:180px;
    height:180px;
    text-align: center;
    line-height: 180px;
}
</style>
