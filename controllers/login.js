var express = require('express');
var router = express.Router();
const adminModel = require.main.require('./models/admin-model');
const customerModel = require.main.require('./models/customer-model');


router.get('/', function (req, res) {
	req.session.destroy();
	res.render('login/index');
});

router.get('/signup', function (req, res) {
	res.render('signup/index');
});

router.post('/', function (req, res) {
	if (req.body.usertype == "admin") {
		var user = {
			email: req.body.email,
			password: req.body.password
		};
		adminModel.validate(user, function (status) {
			if (status) {
				// res.cookie('usertype', req.body.usertype);
				res.cookie('uemail', req.body.email);
				res.redirect('/admin');
			} else {
				res.render('login/error');
			}
		}); 
	}   else if (req.body.usertype == "customer") {
		var user = {
			email: req.body.email,
			password: req.body.password
		};
		customerModel.validate(user, function (status) {
			if (status) {
				// res.cookie('usertype', req.body.usertype);
				res.cookie('uemail', req.body.email);

				res.redirect('/customer');
			} else {
				res.render('login/error');
			}
		});

	} else {
		res.send('invalid username/password');
	}
});


module.exports = router;