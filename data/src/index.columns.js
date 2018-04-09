const Mock = require('mockjs')

module.exports = function(req,res) {
		var data = Mock.mock({
			"data1": [
			{
				id: 1,
				img: 'static/img/index-columns-1.png',
				href:'#channelPage/channelId:3983/channelName:%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:2/res_name:%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
			}, {
				id: 2,
				img: 'static/img/index-columns-2.jpg',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}
		],
		"data2": [
			{
				id: 3,
				img: 'static/img/index-columns-3.png',
				title:'满29减15',
				info:'千禧6.8/盒',
				href:'#channelPage/channelId:3983/channelName:%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:2/res_name:%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
			}, {
				id: 4,
				img: 'static/img/index-columns-4.png',
				title:'健康团圆',
				info:'68减30',
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}, {
				id: 5,
				img: 'static/img/index-columns-5.png',
				title:'永辉蔬果',
				info:'限量7折',				
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			},
			 {
				id: 6,
				img: 'static/img/index-columns-6.png',
				title:'阳光菜园',
				info:'满35减15',				
				href:'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:2/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
			}
		]
	})
	res.json(data)
}