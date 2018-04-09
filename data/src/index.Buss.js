const Mock = require('mockjs')

module.exports = function(req,res) {
		var datas = Mock.mock({
			"data|10": [
			{	
				'id|+1':0,
				gid:"@Guid",
				logo: '../../../static/img/buss-img-',
				img:'@integer(1,10)',
				name: '@cword(2,4)',//店铺名
				addr:'@county',//店铺地址
				addr2:'@province@city@county',
				uname:"@cfirst",
				seven:'@boolean(1,5,true)',//是否7天保价
				tenfour:'@boolean(1,5,true)',//是否14天保价
				paid:'@boolean(1,3,true)',//是否赔付
				rest:'@boolean(1,2,true)',//是否休息
				selfSend:'@boolean(5,1)',//商家是否自送还是开通达达专送
				minute:'@integer(10,59)',//送达时间
				time:"@now('HH')",//是否夜间
				free:'@pick(["基础运费4元","免基础运费","基础运费7元"])',
				start:'@string(★★★★★,2,5)',//星星
				num:'@integer(1,3000)',
				'distance|0-9.1':1,//距离商家
				"float|3-4.1":1,
				'salecoupon|2-6':{'a':'8.8折','b':'满200元减20','c':'满39元减10','d':'满69元减20','e':'满49元减15'},//优惠券
				freight:"@pick(['满69减4元运费','满32减2元运费','满199包邮'])",
				first:'@integer(1,10)',//首单立减
				'MoneyOff|5-7':{'a':'部分商品满399减80','b':'部分商品满268减100','c':'精选个护满39减10','d':'思念汤圆满69减20','e':'纸巾大牌满49减15','f':'部分商品满80减10','g':'生活用品满99减20'},//优惠券
				menushow:'@boolean(4,2,true)',
				big:"@integer(60,99)",//满多少
				small:"@integer(1,29)",//到多少打折区间

				href:'#channelPage/channelId:3983/channelName::%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:2/res_name::%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
			}
		]
	})
	// console.log(datas.data)
	res.json(datas)
}