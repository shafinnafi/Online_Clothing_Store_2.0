const db = require('./db.js');

module.exports= {
	
	validate: function (user, callback) {
		var sql = "SELECT * FROM customer where email=? and password=?";
		db.getResults(sql, [user.email, user.password], function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
// start from here
	getByemail: function (email, callback) {
		var sql = "SELECT * FROM customer WHERE email=?";
		db.getResults(sql, [email.email], function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	createuser:function(user, callback){
		var sql = "insert into customer (email,name,password,phone,address,gender) values('"+user.email+"','"+user.name+"','"+user.password+"','"+user.phone+"','"+user.address+"','"+user.gender+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},

	updateProfile: function (user, callback) {
		var sql = "UPDATE customer SET password=?, name=?, address=?, phone=? WHERE email=?";
		db.execute(sql, [user.password, user.name, user.address, user.phone, user.email ], function (status) {
			
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	}
    // getByEmail: function(email, callback){
	// 	var sql = "SELECT * FROM `admin` WHERE email='"+email+"'";
	// 	db.getResults(sql, function(results){
	// 		callback(results);
	// 	});
	// },


    
}