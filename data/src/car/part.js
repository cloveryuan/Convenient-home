module.exports = function (req, res) {
    const conn = require('../conn');
    const id = req.query.id;
    var sql = "select * from `part` where `pid` = '"+ id +"'";
    conn.query(sql, function (error,result) {
        console.log(result)
        if (error == null) {
            res.json({
                error: 0,
                message: '成功',
                data: result,
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