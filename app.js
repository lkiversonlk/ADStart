var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config/config").config;
//var routes = require('./routes/index');
var users = require('./routes/users');
var brands = require("./routes/brands");
var templates = require("./routes/templates");
var delegaions = require("./routes/delegations");
var apply = require("./routes/apply");
var wechatRouter = require("./routes/wechat-router").wechatRouter;
var config = require("./config/config").config;
var appConfig = new config(process.cwd());
var wechatapi = require("wechat-api");
var wechatOauth = require("wechat-oauth");
var winston = require("winston");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.query());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

//app.use('/', routes);
app.use("/wechat", wechatRouter(appConfig.data));
app.use('/users', users);
app.use('/brands', brands);
app.use("/templates", templates);
app.use("/apply", apply);
app.use("/delegations", delegaions);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

if(appConfig.data.log_level){
    winston.level = appConfig.data.log_level;
}

//initial Dao
var Dao = require("./data/dao").Dao;
try {
    var dao = new Dao(appConfig.data.database);
    app.set("dao", dao);
} catch (error) {
    winston.log("error", "fail to load database", error)
    process.exit(1);
}

var api = new wechatapi(appConfig.data.appid, appConfig.data.appSecret);
app.set("wechat-api", api);
winston.log("info", "wechat-api loaded");

var oauth = new wechatOauth(appConfig.data.appid, appConfig.data.appSecret);
app.set("wechat-oauth", oauth);
winston.log("info", "wechat oauth loaded");

module.exports = app;
