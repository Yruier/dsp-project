const app = require('express')();
const bodyParser = require('body-parser');
const api = require('./api');
// 用于解析post请求参数
app.use(bodyParser.json());

// 设置允许跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json;chatset=utf-8'); // 用于解析post请求参数
    next();
});

api(app)

app.listen(8090, function() {
    console.log('success listen 8090')
});