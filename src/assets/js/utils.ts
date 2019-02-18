let _UA = navigator.userAgent.toLocaleLowerCase();
export var device:any = {
    iphone      : /iphone/.test(_UA),
    ipad        : /ipad/.test(_UA),
    android     : /android/.test(_UA),
    mobile      : /mobile/.test(_UA),
    windowsPhone: /windows phone/.test(_UA),
    safari      : /safari/.test(_UA) && !/edge/.test(_UA),
    chrome      : /chrome/.test(_UA) && !/edge/.test(_UA),
    edge        : /edge/.test(_UA),
    msie        : (_UA.indexOf('msie') >= 0 || _UA.indexOf('trident') >= 0)
};
export var isPC:boolean = !(device.iphone || device.ipad || device.android || device.windowsPhone);
export var isSP:boolean = <boolean>(device.iphone || (device.android && device.mobile) || device.windowsPhone);
export var isIOS:boolean = (device.iphone || device.iphone);
// tablet only
export var isTablet = (device.ipad || (device.android && !device.mobile));
// smartphone & tablet
export var isMobile = (function () {
    return isSP || isTablet;
})();
export var isLegacyIE = !('addEventListener' in window);
