/**
 * 用户路由文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

/*/u的路由*/


// router.use(function (req, res, next) {
//     var url = req.originalUrl;
//
//     //window.localStorage.setItem("mail",res.content.mail);
//     if (url != "/user/login"&&!window.localStorage.getItem("mail")) {
//         return res.redirect("/user/login");
//     }
//     next();
// });


router.get('/', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/usercenter.html'
    });
});
/*用户中心路由示例*/
router.get('/service', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/service.html'
    });
});

router.get('/confirm', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/confirm.html'
    });
});

router.get('/confirmno', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/confirm-no.html'
    });
});

router.get('/claims', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/claims.html'
    });
});

router.get('/validation', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/validation.html'
    });
});

router.get('/confirmok', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/confirm-ok.html'
    });
});


//其他币种领取UBTC申请
router.get('/others', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/others.html'
    });
});

router.get('/othersConfirm', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/others-confirm-ok.html'
    });
});

router.get('/othersValidation', function(req, res, next) {
    res.render(TEMP_USER,{
        templateMain:'usercenter/others-validation.html'
    });
});


module.exports = router;
