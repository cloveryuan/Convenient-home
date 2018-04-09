const Mock = require('mockjs')

module.exports = function(req,res) {
		var data = Mock.mock({
			"code|6":"@integer(0,9)",//随机生成6位验证码
		
	})
	// console.log(data)
	res.json(data)
}