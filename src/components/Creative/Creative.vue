<template>
    <div>
        <div class="creative-table">
            <template>
                <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column v-if='tableTitle.length>0' v-for='(item,index) in tableTitle' :key='index' :prop='item.name' :label='item.title'></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button><br/>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <el-button @click="toggleSelection([tableList[1], tableList[2]])">切换第二、第三行的选中状态</el-button>
                    <el-button @click="toggleSelection()">取消选择</el-button>
                </div>
            </template>
        </div>
        <div class="block">
            <span>选择显示条数</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-sizes="[20, 50, 100]"
                :page-size="20"
                layout="sizes, prev, pager, next, jumper"
                :total="this.tableList.length">
            </el-pagination>
        </div>


    </div>
</template>

<script>
// import tabelList from '../../server/data/creativeData'
import {getTableData} from '../../utils/request'

export default {
    data() {
        return {
            tableTitle:['title'],
            tableList: [],
            multipleSelection: [],
            currentPage:2
        }
    },
    methods: {
        // 选中
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
                this.multipleSelection = val;
        },
        // 编辑 删除
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        // 分页器
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
    created(){
        getTableData("token").then(res=>{
            this.tableTitle=res.tableTitle;
            this.tableList=res.tableList;
            console.log(this.tableList,'tableList')

            // console.log(res,'table-----data')
        })
    }
}
</script>

<style>
.creative-table{
    width:100%;
    height:500px;
    overflow: scroll;
}
.el-button{
    margin:2px;
}
.block{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:20px;
}
</style>
