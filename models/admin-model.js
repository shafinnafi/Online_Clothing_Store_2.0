const db = require('./db.js');

module.exports= {
	
	validate: function (user, callback) {
		var sql = "SELECT * FROM admin where email=? and password=?";
		db.getResults(sql, [user.email, user.password], function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},


	getByemail: function (email, callback) {

		var sql = "SELECT * FROM admin WHERE email=?";

		db.getResults(sql, [email.email],function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},

	updateProfile: function (user, callback) {
		var sql = "UPDATE admin SET password=?  WHERE email=?";
		db.execute(sql, [user.password, user.email ], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},

	getAllCustomer: function (callback) {
		var sql = "select * from customer";
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},

	deleteCustomer: function (email, callback) {
		var sql = "DELETE FROM customer WHERE email=?";
		db.getResults(sql, [email], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	}
    
}