/**
 * app路由中间件
 * 对匹配的路由使用中间件app.use(path,middleware)
 * Created by SivenLee on 2017/3/14.
 */
module.exports = function(app){
    //首页路由
    app.use('/', require('../routes/index.server.route.js'));
    app.use('/user', require('../routes/user.server.route.js'));
    app.use('/u', require('../routes/u.server.route.js'));
    app.use('/explorer', require('../routes/explorer.server.route.js'));
    app.use('/extract',require('../routes/extractUbtc.server.route.js'));

    return app;
}