//declaration
var express = require('express');


var login = require('./controllers/login');
var logout = require('./controllers/logout');
var signup = require('./controllers/signup');
var admin = require('./controllers/admin/admin');
var customer = require('./controllers/customer/customer');
var upload = require('express-fileupload');




var exSession 		= require('express-session');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');

//configuration
app.set('view engine', 'ejs');


//middleware 
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cookieParser());+
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
app.use(upload());

app.use('/assets', express.static('assets'));

app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/admin', admin);
app.use('/customer', customer);
app.set('views', __dirname + '/views');

//routes
app.get('/', function (req, res) {
	res.render('home/index');
});

//server startup
app.listen(5000, function () {
	console.log('sever up & running @5000 port!');
});


