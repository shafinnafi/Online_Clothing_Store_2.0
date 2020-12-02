var express = require('express');
// var upload = require('express-fileupload');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');
var productModel = require.main.require('./models/product-model');
var ordermodel = require.main.require('./models/order-model');


// var app = express();

// app.use(upload());


var name1;
router.get('*', function (req, res, next) {
	name1 = req.cookies['uemail'];
	if (req.cookies['uemail'] == null) {
		res.redirect('/login');
	} else {
		next();
	}
});
router.get('/', function (req, res) {
	// adminModel.getByemail(req.cookies['uemail'], function (result) {
	// 	res.render('admin/index', {
	// 		user: result
	// 	});
	// });
	name1 = req.cookies['uemail'];
	res.render('admin/index', {name: name1});
});

var email;
router.get('/profile', function (req, res) {
	
	var email={
		email : req.cookies['uemail']
	};
	
	adminModel.getByemail(email,function (results){
		var user={
			email:results.email,
			password: results.password
		};
		res.render('admin/profile',{user:user});
	});
});


router.post('/profile', function (req, res) {
	
	var user = {
		email: req.body.email,
		password: req.body.password
	}

	adminModel.updateProfile(user, function (status) {
		if (status) {
			res.render('admin/profileupdated');
		} else {
			res.redirect('/logout');
		}
	});
	

	
});

router.get('/profileupdated', function (req, res) {
	res.render('admin/profileupdated');

});

router.get('/viewcustomer', function (req, res) {
	adminModel.getAllCustomer(function (results) {
		if (results.length > 0) {
			res.render('admin/viewcustomer', {
				customerlist: results
			});
		} else {
			res.redirect('/logout');
		}
	});
});

router.get('/deletecustomer/:email', function (req, res) {
	adminModel.deleteCustomer(req.params.email, function (results) {
			res.render('admin/deleted')
	});
	// var user = req.params.email;
	// adminModel.deleteCustomer(user,function(results){
    //     adminModel.getAllCustomer(function(results){
    //         res.render('admin/viewcustomer', {
	// 			customerlist: results
	// 		});
    //     });
    // });
});

router.get('/addproduct', function (req, res) {
	res.render('product/addproduct');
});

router.post('/addproduct', function (req, res) {

// 	if(req.files){

// 	var file = req.files.image;
// 	var filename = file.name;
// 	console.log(filename);

// 	file.mv('./upload', filename, function(err){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			console.log('no error');
// 		}


// 	})
// }
// else{
// 	res.send('first error');
// }


	var product = {
		name: req.body.name,
		description: req.body.description,
		image: req.body.image,
		// image: req.files.image,
		price : req.body.price,
		category : req.body.category,
		type : req.body.type,
		size : req.body.size

	};


	productModel.insertProduct(product, function (status){
		if (status) {
			res.send('added');
		} else {
			res.send('error');
		}
	});


});

router.get('/orders', function (req, res) {
	ordermodel.getAll(function (results) {
		if (results.length > 0) {
			res.render('admin/orders', {
				orderlist: results
			});
		} else {
			res.redirect('/logout');
		}
	});
});

router.get('/deleteorders/:id', function (req, res) {
	ordermodel.deleteorders(req.params.id, function (results) {
			res.render('admin/deleted')
	});
	// var user = req.params.email;
	// adminModel.deleteCustomer(user,function(results){
    //     adminModel.getAllCustomer(function(results){
    //         res.render('admin/viewcustomer', {
	// 			customerlist: results
	// 		});
    //     });
    // });
});

router.get('/viewproduct', function (req, res) {
	productModel.getAllProduct(function (results) {
		if (results.length > 0) {
			res.render('admin/viewproduct', {
				productlist: results
			});
		} else {
			res.redirect('/logout');
		}
	});
});

router.get('/deleteproduct/:id', function (req, res) {
	productModel.deleteproduct(req.params.id, function (results) {
			res.render('admin/deleted')
	});
	// var user = req.params.email;
	// adminModel.deleteCustomer(user,function(results){
    //     adminModel.getAllCustomer(function(results){
    //         res.render('admin/viewcustomer', {
	// 			customerlist: results
	// 		});
    //     });
    // });
});




// router.get('/view_Customers/:username', function (req, res) {
	// 	adminModel.getCutomerProfile(req.params.username, function (result) {
	// 		res.render('admin/getProfile', {
	// 			user: result,
	// 			table: 'customerinfo'
	// 		});
	// 	});
	
	// });


module.exports = router;