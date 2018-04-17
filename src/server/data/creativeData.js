const Mock = require('mockjs')


const tableList = [];
const random = Math.random() * 100;

for (let i = 0; i < 100; i++) {
    const data = Mock.mock({
        matter: Mock.Random.date(),
        id: 0 + i,
        type: '图文(单)',
        size: '320*240',
        fallConnect: Mock.Random.url(),
        watchConnect: Mock.Random.url(),
        unit: '单元',
        plan: '广告测试',
        'exposure|1000-5000': 2000,
        'clickRate|1000-4000': 1000,
        stutas: '投放中'
    })
    tableList.push(data)
}

const tableTitle = [{
    title: '创意素材',
    name: 'matter'
}, {
    title: '创意ID',
    name: 'id'
}, {
    title: '创意类型',
    name: 'type'
}, {
    title: '尺寸',
    name: 'size'
}, {
    title: '落地页链接',
    name: 'fallConnect'
}, {
    title: '监测链接',
    name: 'watchConnect'
}, {
    title: '所属单元',
    name: 'unit'
}, {
    title: '所属计划',
    name: 'plan'
}, {
    title: '曝光量',
    name: 'exposure'
}, {
    title: '点击量',
    name: 'clickRate'
}, {
    title: '状态',
    name: 'stutas'
}]

module.exports = {
    tableTitle: tableTitle,
    tableList: tableList
}