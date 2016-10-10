
/**
 * Module dependencies.
 */
//Create an Express application that will accept a route /inventors 
//and display a table of inventories(using any template engine of your choice)

var express = require('express')

  , routes = require('./routes')
  , user = require('./routes/user')//this is refering or importing other js class
  ,inventors = require('./routes/inventors')
 // ,inventor = require('./views/inventors')//we cant refer other than js file
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('x-powered-by', false);
app.enable('case sensitive routing');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', function(req, res) {
//    res.render('/index');
//});


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/inventors', inventors.list);
//app.get('/inventors', function(req, res) {
//					  res.render('/inventors');
//						});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
