const Mock = require('mockjs')

module.exports = function(req,res) {
		var data = Mock.mock({
			"data": [
			{
				id: 1,
				img: 'static/img/nav-1.png',
				text: '超市生鲜',
				href:'#channelPage/channelId:3983/channelName:%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:2/res_name:%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
			}, {
				id: 2,
				img: 'static/img/nav-2.png',
				text: '新鲜水果',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 3,
				img: 'static/img/nav-3.png',
				text: '美食烘焙',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 4,
				img: 'static/img/nav-4.png',
				text: '鲜花蛋糕',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 5,
				img: 'static/img/nav-5.png',
				text: '医药健康',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 6,
				img: 'static/img/nav-6.png',
				text: 'VIP会员',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 7,
				img: 'static/img/nav-7.png',
				text: '新人专享',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 8,
				img: 'static/img/nav-8.png',
				text: '帮助中心',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 9,
				img: 'static/img/nav-9.png',
				text: '分享有礼',
				href:'https://daojia.jd.com/activity/invite/index.html?channel=fxyl_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.7945&lat=32.03899&coordType=&djAppVersion=5.0.0&res_unit=9&res_type=ball_10&unit_index=2&res_name=%E5%88%86%E4%BA%AB%E6%9C%89%E7%A4%BC'
			}, {
				id: 10,
				img: 'static/img/nav-10.png',
				text: '签到',
				href:'https://daojia.jd.com/activity/market/signIn/index.html?channel=qiandao_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.7945&lat=32.03899&coordType=&djAppVersion=5.0.0&res_unit=10&res_type=ball_10&unit_index=2&res_name=%E7%AD%BE%E5%88%B0'
			}
		]
	})
		// console.log(data)
	res.json(data)
}