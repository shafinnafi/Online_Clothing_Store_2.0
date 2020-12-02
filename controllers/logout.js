var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.clearCookie('uemail');
    res.clearCookie('usertype');
	res.redirect('/login');
});

module.exports = router;