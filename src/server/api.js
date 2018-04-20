const fs = require('fs');
const jwt = require('jsonwebtoken'); //用户登录加密
const tableData = require('./data/creativeData.js')

// 上传图片的插件
const multer = require('multer')
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        let filename = file.originalname.split('.')
        cb(null, filename[0] + '-' + Date.now() + '.' + filename[1])
    }
})

let upload = multer({ storage: storage })


// console.log(aa, 'aa')

module.exports = function(app) {

    // 登录页面接口 
    app.post('/dsp-admin/user/login', (req, res) => {
        // console.log(req.body)
        fs.readFile('./data/user.json', { encoding: 'utf-8' }, (err, userInfo) => {
            if (err) { throw err; }
            let login = {
                code: 1,
                message: 'login faild',
                username: '',
                token: ''
            };
            userInfo = JSON.parse(userInfo)
            userInfo.forEach((item, index) => {
                if (item.username === req.body.username && item.password === req.body.password) {
                    login = {
                        code: 0,
                        message: 'login sucess',
                        token: jwt.sign(req.body, '1511', { // 对用户信息进行加密
                            expiresIn: '1h' // 设置有效时长
                        }),
                        userInfo: {
                            username: req.body.username,
                            userid: item.userid,
                            time: new Date().getTime()
                        }
                    }
                }
            })
            res.send(login)
        });
    });

    // 注册页面接口
    app.post('/dsp-admin/user/register', (req, res) => {
        let userInfo = fs.readFileSync('./data/user.json', 'utf-8')
        userInfo = JSON.parse(userInfo)

        let register = {};
        let flag = false; // 用来判断用户是否重复注册
        userInfo.forEach(item => {
            if (item.user === req.body.user) {
                register = {
                    code: 0,
                    message: 'this Phone already register'
                };
                flag = true; //重复注册
            }
        })
        if (!flag) {
            userInfo.push(req.body);
            fs.writeFile('./data/user.json', JSON.stringify(userInfo), () => {
                register = {
                    code: 1,
                    message: 'register sucess'
                }
            })
        }

        res.send(register)
    });

    // 广告创意 table 数据接口
    app.post('/dsp-admin/addAdvertisement/creative', (req, res) => {
        console.log(req.body)
        res.send(tableData)
    })

}