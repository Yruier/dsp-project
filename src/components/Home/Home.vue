<template>
    <div class='home'>
        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="always">
                现金账户
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="always">
                今日消耗
                </el-card>
            </el-col>
        </el-row>

        <div class='home-content'> 
            <div class='home-content-nav'>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <div><el-tab-pane label="整体情况" name="zero"></el-tab-pane></div>
                    <div>
                        <el-tab-pane label="近7天" name="first"></el-tab-pane>
                        <el-tab-pane label="近30天" name="second"></el-tab-pane>
                    </div>
                </el-tabs>
                <!-- <div class="block"> -->

                    <el-date-picker 
                        v-model="value"
                        format='yyyy/MM/dd'
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options='pickerOptions'>
                    </el-date-picker>
                <!-- </div> -->
            </div>
            <div id='home-echarts'></div>
        </div>
        
    </div>
</template>

<script>

import drawLine from '../../utils/drawLine';

export default {
     data() {
        return {
            activeName: 'first', //导航默认选中‘近7天’
            value: '',
            pickerOptions:{
                onPick:function({minDate,maxDate}){
                    if(minDate && maxDate){
                        let startDate={
                            year:minDate.getFullYear(),
                            month:minDate.getMonth()+1,
                            date:minDate.getDate()
                        };
                        let endDate={
                            year:maxDate.getFullYear(),
                            month:maxDate.getMonth()+1,
                            date:maxDate.getDate()
                        }
                       
                        let xAxis=[];
                        if(startDate.year===endDate.year){
                            if(startDate.month===endDate.month){
                                let xAxis1=[];
                                for(let i=startDate.date;i<=endDate.date;i++){
                                    xAxis1.push(`${startDate.year}/${startDate.month}/${i}`)
                                }
                                xAxis=xAxis1;
                                console.log(xAxis1,'xAxis 不跨月')
                            }else {
                                let xAxis2=[];
                                for(let i=startDate.month;i<=endDate.month;i++){
                                    xAxis2.push(`${startDate.year}/${i}`)
                                }
                                xAxis=xAxis2;
                                console.log(xAxis,'xAxis  跨月')
                            }
                        }else if(startDate.year+1===endDate.year){
                            // 2018年4月 --- 2019年6月
                            let xAxis3=[];
                            for(let i=startDate.month;i<=12;i++){
                                xAxis3.push(`${startDate.year}/${i}`)
                            }
                            for(let j=1;j<=endDate.month;j++){
                                xAxis3.push(`${endDate.year}/${j}`)
                            }
                            xAxis=xAxis3;
                            console.log(xAxis,'xAxis  跨一年')
                        }else if(startDate.year+1<endDate.year){
                            // 跨多个年份
                            let xAxis4=[];
                            for(let i=startDate.year;i<=endDate.year;i++){
                                xAxis4.push(i)
                            }
                            xAxis=xAxis4;
                            console.log(xAxis,'xAxis  跨多个年份')
                        }

                        // 绘制图表
                        drawLine(xAxis)
                    }
                }
            }
        }
    },
    mounted() {
        let xAxis=['周一','周二','周三','周四','周五','周六','周日'];
        drawLine(xAxis);
    },
    methods: {
        // 选‘近7天’ ‘近30天’的回调函数
        handleClick(tab, event) {
            let xAxis=[];
            if(tab.$options.propsData.name==='first'){
                xAxis=['周一','周二','周三','周四','周五','周六','周日'];
            }else if(tab.$options.propsData.name==='second'){
                for(let i=0;i<30;i++){
                    xAxis.push(i)
                }
                console.log(xAxis)
            }else if(tab.$options.propsData.name==='zero'){
                xAxis=['z1','z2','z3','z4','z5','z6','z7'];
            }

            drawLine(xAxis);
            console.log(tab.$options.propsData, event,'近7天');
        }
    }
}
</script>

<style>
    .home{
        width:100%;
        height:100%;
        padding:20px;
        box-sizing: border-box;
    }
    .home-content{
        height:580px;
        background-color: #fff;
        margin-top:20px;
    }
    .home-content-nav{
        width:100%;
        height:55px;
        padding: 20px;
    }
    #home-echarts{
        height:400px;
    }
    .el-tabs.el-tabs--top{
        height:100%;
        float:left;
        display: flex;
        justify-content: space-around;
    }
    
    .el-date-editor{
        float: right;
    }
    
</style>
