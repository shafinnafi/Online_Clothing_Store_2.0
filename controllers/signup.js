var express = require('express');
var router = express.Router();
var customerModel		= require.main.require('./models/customer-model');

router.get('/', function (req, res) {
	res.render('signup/index');
});

router.post('/', (req, res)=>{
	var user = {
		email: req.body.email,
		name: req.body.name,
		phone: req.body.phone,
		address : req.body.address,
		gender : req.body.gender,
		password : req.body.password

	};
	
	
	customerModel.createuser(user, function(status){
		//console.log(status);
			res.redirect('/login');
		
	
	});
});


module.exports = router;
