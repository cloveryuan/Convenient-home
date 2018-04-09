const Mock = require('mockjs')

module.exports = function(req,res) {
	var data = Mock.mock({
		"data":[
			{
				'img':'../../../static/img/'
			}
		]
	})
	res.json(data)
}