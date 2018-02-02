/**
 * 生产环境下的配置信息
 * Created by SivenLee on 2017/3/15.
 */
module.exports = {
    //环境变量前缀(用于cookie前缀区分环境)
    ENV : "z",
    //静态目录
    STATIC : "/src",
    //默认语言
    LAN : "en",
    //网站端口
    PORT : "3009",
    //版本号
    VERSION : Date.now(),
    //域配置
    DOMAIN_BASE : "ub.com",
    DOMAIN_WEB : "http://www.ub.com",
    DOMAIN_MAIN : "http://main.ub.com",
    API_PREFIX : "/api/web/V1_0/"
}
/* * 本机前端 + 预生产环境后端* */