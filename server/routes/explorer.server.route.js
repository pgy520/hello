/**
 * 区块浏览器路由文件
 * Created by SivenLee on 2017/12/18
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'explorer/index.html'
    });
});

router.get('/address', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'explorer/address.html'
    });
});
router.get('/block', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'explorer/block.html'
    });
});
router.get('/blocks', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'explorer/blocks.html'
    });
});
router.get('/tx', function(req, res, next) {
    res.render(TEMP_MAIN,{
        templateMain:'explorer/tx.html'
    });
});

module.exports = router;
