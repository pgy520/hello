/**
 * 用户路由文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.redirect('/user/login');
});

router.get('/login', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'user/login.html'
    });
});

router.get('/register', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'user/register.html'
    });
});

router.get('/forgetLoginPwd', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'user/forgetLoginPwd.html'
    });
});


router.get('/modifyLoginPwd', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'user/modifyLoginPwd.html'
    });
});




module.exports = router;
