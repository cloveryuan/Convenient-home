const Mock = require('mockjs')

module.exports = function(req,res) {
		var data = Mock.mock({
			"data": [
			{
				id:1,
				img:'static/img/index-middle-banner-1.png',
				// href:
			},
			{
				id:2,
				img:'static/img/index-middle-banner-2.png',
				// href:
			},
			{
				id:3,
				img:'static/img/index-middle-banner-3.png',
				// href:
			},
			{
				id:4,
				img:'static/img/index-middle-banner-4.jpg',
				// href:
			}
		]
	})
	res.json(data)
}