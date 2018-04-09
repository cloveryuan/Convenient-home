module.exports = function(req,res){
	const conn = require('./conn');	
	var phone = req.body.phone;
	const md5 = require('md5');
	var password = md5(req.body.password);
	var sql = "select `password` from `reg` where `phone` = '" + phone+"'";
	conn.query(sql,function(error,result){
		if(error){
			res.json({
				error:3,
				message:'失败',
				data:null,
				errorInfo:null,
			})
		}else{
			if(result == ''){
				res.json({
					error:1,
					message:'用户名不存在',
					data:null,
					errorInfo:null
				})
			}else{
				console.log(result[0])
				console.log(password)
				if (password == (result[0].password)){			
					res.cookie('phone', result[0].photo);
					res.json({
						error:0,
						message:'成功',
						data:result[0],
						errorInfo:null
					})
				}else{
					res.json({
						error:2,
						message:'用户名与密码不匹配',
						data:null,
						errorInfo:null
					})
				}
			}
		}
	})
}