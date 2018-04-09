module.exports = function(req,res){
	const conn = require('./conn');	
	const md5 = require('md5');
	var phone = req.body.tel; 
	var password = md5(req.body.password);

	var sql = "insert into `reg` (`phone`,`password`) values ('"+ phone +"','"+ password +"')";

	conn.query(sql,function(error,result){
		if (error == null) {
			res.json({
				error: 0,
				message: '成功',
				data:result,
			})
		} else {
			res.json({
				error: 1,
				message: '失败',
				data: error
			})
		}
	})

}