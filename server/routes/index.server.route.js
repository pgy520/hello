/**
 * 首页路由文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //判断是否是手机端
    // var deviceAgent = req.headers["user-agent"].toLowerCase();
    // var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    // if(agentID){
    //     res.render(TEMP_MOBILE,{
    //         templateMain:'mobile/index.html'
    //     });
    // }else{
        res.render(TEMP_HOME,{
            templateMain:'index.html'
        });
    // }


});


//移动端路由
router.get('/mobileindex', function(req, res, next) {

    res.render(TEMP_MOBILE,{
        templateMain:'mobile/index.html'
    });



});


router.get('/test', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'include/test.html'
    });
});


router.get('/project/wallet', function(req, res, next) {
    renderByLan('project/wallet.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});

router.get('/project/features', function(req, res, next) {
    renderByLan('project/features.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
})




router.get('/project/ide', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'project/ide.html'
    });
});




router.get('/project/get', function(req, res, next) {
    renderByLan('project/get.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});








router.get('/project/overview', function(req, res, next) {
    renderByLan('project/overview.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});






router.get('/about/team', function(req, res, next) {
    renderByLan('about/team.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});

router.get('/about/contact', function(req, res, next) {
    renderByLan('about/contact.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});


router.get('/about/joinus', function(req, res, next) {
    renderByLan('about/joinus.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});

router.get('/about/businesscooperation', function(req, res, next) {
    renderByLan('about/businesscooperation.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});



router.get('/project/ecosystem', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'project/ecosystem.html'
    });
});



router.get('/project/ecosystem/exchanges', function(req, res, next) {
    renderByLan('project/exchanges.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});






router.get('/news', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'news/index.html'
    });
});

router.get('/news/detail', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'news/details.html'
    });
});

router.get('/distribution/qtum', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'distribution/qtum.html'
    });
});



router.get('/tutorial/qt', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'tutorial/qt.html'
    });
});


router.get('/tutorial/electrum', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'tutorial/electrum.html'
    });
});





router.get('/support/faq', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'support/faq.html'
    });
});



router.get('/support/whitepaper', function(req, res, next) {
    renderByLan('support/whitepaper.html',function (temp) {
        res.render(TEMP_MAIN,{
            templateMain: temp
        });
    })
});

router.get('/ub', function(req, res, next) {
    res.render('cn/unitedbitcoin.html');
});
router.get('/otc', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'otc/index.html'
    });
});
router.get('/500', function(req, res, next) {
    res.render('500.html');
});
router.get('/404', function(req, res, next) {
    res.render('404.html');
});
router.get('/sorry', function(req, res, next) {
    res.render('sorry.html');
});
router.get('/setLan', function(req, res, next) {
    res.end();
});
router.get('/getServerTime', function(req, res, next) {
    var result = {};
    result.timestamp = Date.parse(new Date());
    res.jsonp(result);
});
module.exports = router;
