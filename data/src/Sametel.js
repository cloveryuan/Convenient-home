module.exports = function(req,res){
	const conn = require('./conn');	
	var phone = req.query.tel;
	var sql = 'select `phone` from `reg` where `phone` = "' + phone + '"';
	conn.query(sql,function(error,result){
		if(error==null){
			if (result.length == 0) {
				res.send('true')
			} else {
				res.send('false')
			}			
		}else{
			res.send(error)
		}
	})	
}