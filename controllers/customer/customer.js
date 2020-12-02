var express = require('express');
var router = express.Router();
var customer_model = require.main.require('./models/customer-model');
var productmodel = require.main.require('./models/product-model');
var ordermodel = require.main.require('./models/order-model');


router.get('*', function (req, res, next) {
	if (req.cookies['uemail'] == null) {
		res.redirect('/login');
	} else {
		next();
	}
});
router.get('/', function (req, res) {
	customer_model.getByemail(req.cookies['uemail'], function (result) {

		res.render('customer/index', {
			user: result
		});
	});
});

router.get('/product', function (req, res) {
	productmodel.getAllProduct(function (results) {
		if (results.length > 0) {
			res.render('customer/customer', {
				productlist: results
			});
		} else {
			res.redirect('/logout');
		}
	});
});

router.get('/product/male', function (req, res) {
	var Male = "Male";
	productmodel.getbymale(Male,function (results) {
		if (results.length > 0) {
			res.render('customer/customer', {
				productlist: results
			});
		} else {
			res.redirect('/logout');
		}
	});
});


var email;
router.get('/profile', function (req, res) {
	
	var email={
		email : req.cookies['uemail']
	};
	console/console.log(email);
	
	customer_model.getByemail(email,function (results){
		var user={
			email:results.email,
			name: results.name,
			password: results.password,
			address: results.address,
			phone: results.phone,
			gender: results.gender

		};
		res.render('customer/profile',{user:user});
	});
});

router.post('/profile', function (req, res) {
	var user = {
		email: req.body.email,
		password: req.body.password,
		address: req.body.address,
		phone: req.body.phone,
		name: req.body.name
	}

	customer_model.updateProfile(user, function (status) {
		if (status) {
			res.render('customer/profileupdated');
		} else {
			res.redirect('/logout');
		}
	});
	
});


router.get('/product/cart/:id', function (req, res) {
	var id=req.params.id;
	productmodel.getById(id, function(results){
		var product={
            id:results.id,
            name:results.name,
            description:results.description,
            //image:results.image,
            price:results.price,
            size:results.size,
            category:results.category,
            type:results.type
		}
		console.log(product)
        res.render('customer/cart',product);
	})
	
});


// router.post('/post', function (req, res) {
// 	var user = {
// 		email: req.body.email,
// 		password: req.body.password,
// 		address: req.body.address,
// 		phone: req.body.phone,
// 		name: req.body.name
// 	}

// 	customer_model.updateProfile(user, function (status) {
// 		if (status) {
// 			res.render('customer/profileupdated');
// 		} else {
// 			res.redirect('/logout');
// 		}
// 	});
	
// });

router.post('/product/cart/:id', function (req, res) {

	var cemail = req.cookies['uemail'];
	var order = {
		pid: req.body.id,
		cemail: cemail,
		pname: req.body.name,
		quantity: req.body.quantity,
		size: req.body.size,
		price: req.body.tprice
	}
	console.log(order.cemail);
	console.log(order.pid);
	console.log(order.pname);
	console.log(order.quantity);
	console.log(order.size);
	console.log(order.price);

	ordermodel.insert(order, function(status){
		if (status) {
			res.send('order done!');
		} else {
			res.send('error');
		}
	});


});



module.exports = router;