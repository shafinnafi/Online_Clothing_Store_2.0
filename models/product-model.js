const db = require('./db.js');

module.exports= {


    insertProduct:function(product, callback){
        var sql = "INSERT INTO product (name,description,category,type,image,size,price) VALUES(?,?,?,?,?,?,?)";
        db.execute(sql, [product.name, product.description, product.category, product.type, product.image,product.size, product.price], function (status) {
            if (status) {
				callback(true);
				console.log(status);
            } else {
				callback(false);
				console.log(status);
            }
        });
    },



    // getAllCustomer: function (callback) {
	// 	var sql = "select * from product";
	// 	db.getResults(sql, [], function (results) {
	// 		if (results.length > 0) {
	// 			callback(results);
	// 		} else {
	// 			callback([]);
	// 		}
	// 	});
	// }


	getAllProduct: function (callback) {
		var sql = "select * from product";
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},

	getById: function(id, callback){
		var sql = "SELECT * FROM product WHERE id=?";
		db.getResults(sql,id, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},

	deleteproduct: function (id, callback) {
		var sql = "DELETE FROM product WHERE id=?";
		db.getResults(sql, [id], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},

	// getbymale: function(Male, callback){
	// 	console.log(Male);
	// 	var sql = "select * from product where category='"+Male+"'";
	// 	db.getResults(sql, function(results){
	// 		if(results.length >0 ){
	// 			callback(results[0]);
	// 		}else{
	// 			callback(false);
	// 		}
	// 	});
	// }






}