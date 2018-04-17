<template>
    <div class="select-plan">
        <h3>广告创意</h3> 
        <h4>落地页</h4>
        <p>着陆页地址：<input type="text" placeholder="请设置广告名称"><span>预览</span></p>
        <h4>上传创意</h4>
        <template>
            <el-button type="text" @click="open">+添加创意</el-button>
        </template>
        <div>提交</div>
    </div>
</template>

<script>
export default {
    methods: {
      open() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '单图 '),
            h('span', { style: 'margin: 10px' }, '多图')
          ])
        });
      }
    }
  }
</script>

<style>

</style>
