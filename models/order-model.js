const db = require('./db.js');

module.exports= {

    insert:function(order, callback){
        var sql = "INSERT INTO orders (cemail,pid,pname,quantity,size,price) VALUES (?,?,?,?,?,?)";
        db.execute(sql, [order.cemail, order.pid, order.pname, order.quantity, order.size,order.price], function (status) {
            if (status) {
				callback(true);
				console.log(status);
            } else {
				callback(false);
				console.log(status);
            }
        });
    

},

    getAll: function (callback) {
		var sql = "select * from orders";
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
    },
    
    deleteorders: function (id, callback) {
		var sql = "DELETE FROM orders WHERE id=?";
		db.getResults(sql, [id], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	}

}