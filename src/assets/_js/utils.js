var utils;
(function (utils) {
    var _UA = navigator.userAgent.toLocaleLowerCase();
    utils.device = {
        iphone: /iphone/.test(_UA),
        ipad: /ipad/.test(_UA),
        android: /android/.test(_UA),
        mobile: /mobile/.test(_UA),
        windowsPhone: /windows phone/.test(_UA),
        safari: /safari/.test(_UA) && !/edge/.test(_UA),
        chrome: /chrome/.test(_UA) && !/edge/.test(_UA),
        edge: /edge/.test(_UA),
        msie: (_UA.indexOf('msie') >= 0 || _UA.indexOf('trident') >= 0)
    };
    utils.isPC = !(utils.device.iphone || utils.device.ipad || utils.device.android || utils.device.windowsPhone);
    utils.isSP = (utils.device.iphone || (utils.device.android && utils.device.mobile) || utils.device.windowsPhone);
    utils.isIOS = (utils.device.iphone || utils.device.iphone);
    // tablet only
    utils.isTablet = (utils.device.ipad || (utils.device.android && !utils.device.mobile));
    // smartphone & tablet
    utils.isMobile = (function () {
        return utils.isSP || utils.isTablet;
    })();
    utils.isLegacyIE = !('addEventListener' in window);
})(utils || (utils = {}));
