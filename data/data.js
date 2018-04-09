const express = require('express')
const app = express()
const Mock = require('mockjs')
const conn = require('./src/conn')
const md5 = require('md5');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})


//index 
	//header导航10个的图片文字
	app.get('/lists',require('./src/index.navList.js'))
	//header搜索框下面的导航
	app.get('/headernav',require('./src/index.headernav.js'))
	//header头部轮播图图片
	app.get('/NewBanner',require('./src/index.NewBanner.js'))
	//中间分栏展示图图片
	app.get('/Columns',require('./src/index.columns.js'))

	// 秒杀
	app.get('/kill',require('./src/index.kill.js'))

	// 中部轮播图片
	app.get('/MiddleBanner',require('./src/index.MiddleBanner.js'))

	// 商家buss信息，店铺
	app.get('/Buss',require('./src/index.Buss.js'))


//店铺详情页，获取产品分类展示信息
	app.get('/group',require('./src/car/group.js'))
	
	app.get('/part', require('./src/car/part.js'))

//分类页
	app.get('/classify', require('./src/classify.js'))
	app.get('/classlists', require('./src/lists.js'))


//注册页，随机获取验证码
app.get('/getCode',require('./src/getCode.js'))

// 查重手机号
app.get('/Sametel',require('./src/Sametel.js'))

//注册页，存密码手机号
app.post('/passw',require('./src/savepassw.js'))

// 登录页
app.post('/banklogin', require('./src/banklogin.js'))





app.listen('80')