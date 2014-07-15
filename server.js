var express = require('express')
  , hbs = require('hbs')
  , path = require('path')
  , favicon = require('static-favicon')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  ;

  conf = require('./conf')();
  data = require('./data');

// Instantiate routes.
var routes = require('./routes/index');

var server = express();

// View engine setup.
server.set('view engine', 'hbs');
server.set("view options", { layout: false });

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('stringify', function (data) {
    return JSON.stringify(data);
});

server.use(favicon());
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(cookieParser());
server.use(require('less-middleware')(path.join(__dirname, 'public')));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', routes);

// Catch 404 and forward to error handler.
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  res.redirect('/');

  next(err);
});

/// Error handlers

// Development error handler
// will print stacktrace.
if (server.get('env') === 'development') {
    server.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// Production error handler
// no stacktraces leaked to user.
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

server.listen(3000);

module.exports = server;
