const Mock = require('mockjs')

module.exports = function(req,res) {
	var data = Mock.mock({
		"data|8":[
			{
				"id|+1":1,
				navName:"@pick([{title:'饼干'},{title:'牛奶'},{title:'饮料'},{title:'酸奶'},{title:'瓜子'},{title:'薯片'},{title:'黑米'},{title:'巧克力'}])"
			}
		]	
	})
	res.json(data)
}