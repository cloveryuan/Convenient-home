module.exports = function(req,res){
	const conn = require('./conn');
	var sql = "select `id`,`pid`,`name`,`img` from `classify`";
	conn.query(sql,function(error,result){
		var data = [];
		for (var i = 0; i < result.length; i++) {
			if (result[i].pid == 0) {
				result[i].lists = [];
				result[i].show = false;
				data.push(result[i]);
				for (var j = 0; j < result.length; j++) {
					if (result[j].pid == result[i].id) {
						// result[j].child = [];
						result[i].lists.push(result[j])
					}
				}
			}
		}
		if (error == null) {
			res.json({
				error: 0,
				message: '成功',
				data: data,
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