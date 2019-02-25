/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([13,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
    var $win = jquery__WEBPACK_IMPORTED_MODULE_0__(window);
    var $doc = jquery__WEBPACK_IMPORTED_MODULE_0__(document);
    var $header = jquery__WEBPACK_IMPORTED_MODULE_0__('header');
    var $nav = jquery__WEBPACK_IMPORTED_MODULE_0__('header nav');
    var $switch = jquery__WEBPACK_IMPORTED_MODULE_0__('.nv-switch');
    var $btn = jquery__WEBPACK_IMPORTED_MODULE_0__('.nv-btn').eq(0);
    var $sub = $btn.find('.sub-nv');
    $switch.on({
        'click': function () {
            if ($nav.hasClass('-open')) {
                $nav.removeClass('-open');
                $switch.removeClass('-open');
            }
            else {
                $nav.addClass('-open');
                $switch.addClass('-open');
            }
        }
    });
    if (_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPC */ "a"]) {
        $btn.on({
            'mouseenter': function () {
                $btn.addClass('-open');
                $sub.stop(true).slideDown(200);
            },
            'mouseleave': function () {
                $btn.removeClass('-open');
                $sub.stop(true).slideUp(200);
            }
        });
    }
    else {
        $btn.on({
            'click': function () {
                $btn.toggleClass('-open');
                if ($btn.hasClass('-open')) {
                    $sub.slideDown(200);
                }
                else {
                    $sub.slideUp(200);
                }
            }
        });
    }
    function scrollTo(selector, margin) {
        margin = margin || 0;
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0__(selector);
        var pos = $target.offset().top - $header.height() - margin;
        var height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        jquery__WEBPACK_IMPORTED_MODULE_0__('html,body').animate({ scrollTop: pos }, 500);
        return false;
    }
    var $tabBtn = jquery__WEBPACK_IMPORTED_MODULE_0__('.js-switch-tab-btn');
    var $tabs = jquery__WEBPACK_IMPORTED_MODULE_0__('.js-switch-tab');
    $tabs.css('display', 'none').eq(0).css('display', 'block').addClass('-active');
    $tabBtn.eq(0).css('-active');
    $tabBtn.on('click', function (e) {
        var $btn = jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget);
        var id = $btn.attr('data-tab-btn');
        var $tab = $tabs.filter('[data-tab-id="' + id + '"]');
        if (!$tab.hasClass('-active')) {
            $tabBtn.removeClass('-active');
            $btn.addClass('-active');
            $tabs.removeClass('-active').css('display', 'none');
            $tab.addClass('-active').fadeIn(400);
        }
        return false;
    });
    var $lang = jquery__WEBPACK_IMPORTED_MODULE_0__('.nv-lang');
    var $langOthers = $lang.find('.nv-lang-others');
    if (_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPC */ "a"]) {
        $lang.find('.current-lang').on({
            mouseenter: function () {
                $langOthers.stop(true).slideDown(200);
            },
            mouseleave: function () {
                $langOthers.stop(true).slideUp(200);
            }
        });
    }
    else {
        $lang.find('.current-lang').on({
            click: function () {
                $langOthers.stop(true).slideToggle(200);
            }
        });
    }
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-about-toggle').on({
        'click': function (e) {
            var $this = jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget);
            var $summary = $this.next();
            $this.toggleClass('-open');
            if ($this.hasClass('-open')) {
                $summary.slideDown(300);
            }
            else {
                $summary.slideUp(300);
            }
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-contact-mail').attr('href', 'mailto:info@solaniwa-onsen.com');
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-contact-tell')
        .addClass(function () {
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__[/* isSP */ "b"]) {
            return '-disabled';
        }
    })
        .on('click', function () {
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__[/* isSP */ "b"]) {
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-nv-follow').on({
        'click': function () {
            scrollTo('.f_follow');
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-nv-explore').on({
        'click': function () {
            if (!_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPC */ "a"] && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.explore', 30);
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-nv-floor').on({
        'click': function () {
            if (!_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPC */ "a"] && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.floor');
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-nv-guide').on({
        'click': function () {
            if (!_utils__WEBPACK_IMPORTED_MODULE_1__[/* isPC */ "a"] && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.guide');
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-window').each(function (i, e) {
        jquery__WEBPACK_IMPORTED_MODULE_0__(e).prepend(jquery__WEBPACK_IMPORTED_MODULE_0__('<div class="modal-bg js-modal-close"></div>'));
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-modal-open').on({
        'click': function (e) {
            var sel = '.' + jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).attr('data-modal-target');
            jquery__WEBPACK_IMPORTED_MODULE_0__(sel).fadeIn(300);
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-modal-close').on({
        'click': function (e) {
            jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).closest('.modal-window').fadeOut(300);
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-share-fb').on({
        'click': function (e) {
            var url = jquery__WEBPACK_IMPORTED_MODULE_0__('meta[property="og:url"]').attr('content');
            openShareWindow('http://www.facebook.com/share.php?u=' + encodeURIComponent(url));
            return false;
        }
    });
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-share-line').on({
        'click': function (e) {
            var url = jquery__WEBPACK_IMPORTED_MODULE_0__('meta[property="og:url"]').attr('content');
            openShareWindow('https://lineit.line.me/share/ui?url=' + encodeURIComponent(url));
            return false;
        }
    });
    var openShareWindow = function (url) {
        var width = 600;
        var height = 500;
        var x = window.screenX + (window.innerWidth - width) / 2;
        var y = window.screenY + (window.innerHeight - height) / 2;
        var opt = 'width=' + width + ', height=' + height + ',top=' + y + ',left=' + x;
        window.open(url, 'share', opt);
    };
    var mailadrs = '';
    jquery__WEBPACK_IMPORTED_MODULE_0__('#mc-embedded-subscribe').on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.js-register-adrs').text(jquery__WEBPACK_IMPORTED_MODULE_0__('#mce-EMAIL').val());
    });
    var $mceErr = jquery__WEBPACK_IMPORTED_MODULE_0__('#mce-error-response').on('DOMSubtreeModified propertychange', function () {
        // $mceErr.css('display','none');
    });
    var $mceSuccess = jquery__WEBPACK_IMPORTED_MODULE_0__('#mce-success-response').on('DOMSubtreeModified propertychange', function () {
        $mceSuccess.css('display', 'none');
        openMagazineComplete();
    });
    var $magWin = jquery__WEBPACK_IMPORTED_MODULE_0__('.magazine-complete');
    var openMagazineComplete = function (close) {
        if (close) {
            $magWin.fadeOut(300);
        }
        else {
            $magWin.fadeIn(300);
        }
    };
    $magWin.find('.close').on({
        click: function () {
            openMagazineComplete(true);
        }
    });
});


/***/ })

/******/ });