const Mock = require('mockjs')

module.exports = function(req,res) {
		var data = Mock.mock({
			"data": [
			{
				id:1,
				img:'static/img/banner-1.png',
				// href:
			},
			{
				id:2,
				img:'static/img/banner-2.png',
				// href:
			},
			{
				id:3,
				img:'static/img/banner-3.png',
				// href:
			},
			{
				id:4,
				img:'static/img/banner-4.png',
				// href:
			},
			{
				id:5,
				img:'static/img/banner-5.png',
				// href:
			},
			{
				id:6,
				img:'static/img/banner-6.png',
				// href:
			},
			{
				id:7,
				img:'static/img/banner-7.png',
				// href:
			},
		]
	})
	res.json(data)
}