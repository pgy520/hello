/**
 * 网站信息配置
 * Created by SivenLee on 2017/3/14.
 */
module.exports = function(LAN) {
    //配置信息多语言支持
    var LANG = global.LANG(LAN);

    return {
        NAME : LANG('网站通用名称'),
        TITLE : LANG('网站通用标题'),
        KEYWORD : LANG('网站通用关键字'),
        DESCRIPTION : LANG('网站通用描述'),
        ICO : LANG('网站通用ICO',STATIC),
        LOGO : LANG('网站通用LOGO',STATIC),
        LOGO_FOOT : LANG('网站底部LOGO',STATIC),
        ICP : LANG('网站ICP备案号'),
        LAN : {
            en : 'English',
            cn : '简体中文',
            hk : '繁体中文',
            jp : '日本語',
            kr : '한국어'
        }
    }
}
