/**
 * 用户路由文件
 * Created by SivenLee on 2017/3/14.
 */
var express = require('express');
var router = express.Router();

/*/提取ubtc的路由*/



router.get('/', function(req, res, next) {
    res.render(TEMP_EXTRACT,{
        templateMain:'extract/index.html'
    });
});


module.exports = router;
