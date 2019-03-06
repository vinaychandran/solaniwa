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
/******/ 		7: 0
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
/******/ 	deferredModules.push([12,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);




var Pararax = /** @class */ (function () {
    function Pararax() {
    }
    Pararax.queue = function ($target, param) {
        if (param === void 0) { param = null; }
        param = param || {};
        var ratio = param.ratio || 0.6;
        var eventName = 'scroll._animation' + Pararax._randomInt();
        param.setup && param.setup();
        Pararax.$win.on(eventName, underscore__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
            var st = Pararax.$win.scrollTop();
            var pos = $target.offset().top - window.innerHeight * ratio;
            if (st > pos) {
                param.fire && param.fire();
                Pararax.$win.off(eventName);
            }
        }, 10));
    };
    Pararax.$win = jquery__WEBPACK_IMPORTED_MODULE_0__(window);
    Pararax._randomInt = function (a, b) {
        if (a === undefined) {
            return (Math.random() * 99999999) | 0;
        }
        if (b === undefined) {
            return (Math.random() * a) | 0;
        }
        return (Math.random() * (b - a) + a) | 0;
    };
    return Pararax;
}());
jquery__WEBPACK_IMPORTED_MODULE_0__(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-slick').slick({
        dots: false,
        touchThreshold: 20,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 200,
        prevArrow: '<button type="button" class="slick-arr -prev"></button>',
        nextArrow: '<button type="button" class="slick-arr -next"></button>',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    dots: true,
                    slidesToShow: 1
                }
            },
        ]
    });
    var $win = jquery__WEBPACK_IMPORTED_MODULE_0__(window);
    var $doc = jquery__WEBPACK_IMPORTED_MODULE_0__(document);
    var $header = jquery__WEBPACK_IMPORTED_MODULE_0__('header');
    var $floorModal = jquery__WEBPACK_IMPORTED_MODULE_0__('.floor-map_modal');
    var $floorNav = jquery__WEBPACK_IMPORTED_MODULE_0__('.floor-map_nav');
    var $detail = $floorModal.find('dl');
    var $close = $floorModal.find('.close');
    var $point = jquery__WEBPACK_IMPORTED_MODULE_0__('.floor-map_points .point');
    var $fbtn = jquery__WEBPACK_IMPORTED_MODULE_0__('.floor-btn');
    var $welcome = jquery__WEBPACK_IMPORTED_MODULE_0__('.welcome');
    var lang = jquery__WEBPACK_IMPORTED_MODULE_0__('html').attr('lang');
    var referrer = document.referrer;
    function scrollTo(selector, margin) {
        margin = margin || 0;
        var $target = jquery__WEBPACK_IMPORTED_MODULE_0__(selector);
        var pos = $target.offset().top - $header.height() - margin;
        var height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        jquery__WEBPACK_IMPORTED_MODULE_0__('html,body').animate({ scrollTop: pos }, 500);
        return false;
    }
    if (/#floor/.test(location.hash)) {
        $welcome.hide();
        setTimeout(function () {
            scrollTo('section.floor');
        }, 300);
    }
    else if (/#explore/.test(location.hash)) {
        $welcome.hide();
        setTimeout(function () {
            scrollTo('section.explore', 30);
        }, 300);
    }
    else if (/#guide/.test(location.hash)) {
        $welcome.hide();
        setTimeout(function () {
            scrollTo('section.guide', -40);
        }, 300);
    }
    else if (lang == 'ja' && referrer.indexOf(location.host) != -1) {
        startAnimation();
    }
    else if (lang != 'ja' && referrer.indexOf(location.host) != -1 && referrer.indexOf('/' + lang + '/') != -1) {
        startAnimation();
    }
    else {
        var $msg_1 = $welcome.find('.welcome-msg');
        var $logo_1 = $welcome.find('.welcome-logo');
        var $p = $msg_1.find('p');
        if ($msg_1.length && lang == 'ja') {
            $p.each(function (i, o) {
                var $p = jquery__WEBPACK_IMPORTED_MODULE_0__(o);
                var html = '';
                underscore__WEBPACK_IMPORTED_MODULE_1__["each"]($p.text().split(''), function (c) {
                    html += '<span>' + c + '</span>';
                });
                $p.empty().html(html);
            });
        }
        if ($msg_1.length) {
            $p.each(function (i, o) {
                setTimeout(function () {
                    jquery__WEBPACK_IMPORTED_MODULE_0__(o).addClass('-show');
                }, i * 300 + 300);
            });
            setTimeout(function () {
                $msg_1.fadeOut(600, 'linear');
            }, 3000);
        }
        setTimeout(function () {
            $logo_1.addClass('-show').delay(800).promise().done(function () {
                window.scrollTo(0, 0);
                $logo_1.fadeOut(800, 'linear');
                setTimeout(function () {
                    startAnimation();
                }, 1000);
            });
        }, $msg_1.length ? 4000 : 1000);
    }
    function startAnimation() {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.modal-apology').fadeIn(0);
        setTimeout(function () {
            window.scrollTo(0, 0);
            kvAnimation();
            exploreAnimation();
            newsAnimation();
            mapAnimation();
            guideAnimation();
            followAnimation();
            contactAnimation();
            $welcome.stop(true).fadeOut(500);
        }, 100);
    }
    function kvAnimation() {
        var $kv = jquery__WEBPACK_IMPORTED_MODULE_0__('.kv');
        var pic = $kv.find('> picture')[0];
        var logo = $kv.find('.kv-grandopen')[0];
        var btn = $kv.find('.kv-btn')[0];
        var animation = anime.timeline();
        animation
            .set(pic, { opacity: 0, scale: 1.1 })
            .set([logo, btn], { opacity: 0, translateY: 10 })
            .add({
            targets: pic,
            opacity: 1,
            scale: 1,
            duration: 1600,
            easing: 'easeOutCubic'
        })
            .add({
            targets: [logo, btn],
            opacity: 1,
            duration: 1000,
            translateY: 0,
            delay: anime.stagger(100),
            easing: 'easeOutCubic'
        });
    }
    function exploreAnimation() {
        var msg = document.querySelectorAll('.explore-message p');
        var list = document.querySelector('.explore-list');
        Pararax.queue(jquery__WEBPACK_IMPORTED_MODULE_0__('section.explore'), {
            setup: function () {
                anime.set(msg, { opacity: 0, translateY: 10 });
                anime.set(list, { opacity: 0 });
            },
            fire: function () {
                anime({
                    targets: msg,
                    opacity: 1, translateY: 0,
                    duration: 2000, delay: anime.stagger(100), easing: 'easeOutCubic'
                });
                anime({
                    targets: list,
                    opacity: 1,
                    duration: 2000, delay: 300, easing: 'easeOutCubic'
                });
            }
        });
    }
    function newsAnimation() {
        var news = [].slice.call(document.querySelectorAll('section.news'));
        underscore__WEBPACK_IMPORTED_MODULE_1__["each"](news, function (el) {
            var $news = jquery__WEBPACK_IMPORTED_MODULE_0__(el);
            var list = [].slice.call($news.find('.news-item'));
            Pararax.queue($news, {
                setup: function () {
                    var scale = list.length > 1 ? 1.02 : 1.03;
                    scale = _utils__WEBPACK_IMPORTED_MODULE_2__[/* isSP */ "b"] ? 1.02 : scale;
                    anime.set(list, { opacity: 0, scale: scale });
                },
                fire: function () {
                    anime({
                        targets: list,
                        opacity: 1, scale: 1.001,
                        duration: 800, easing: 'easeOutCubic'
                    });
                }
            });
        });
    }
    function mapAnimation() {
        var floor = document.querySelector('section.floor');
        var magazine = document.querySelector('section.magazine');
        underscore__WEBPACK_IMPORTED_MODULE_1__["each"]([floor, magazine], function (el) {
            Pararax.queue(jquery__WEBPACK_IMPORTED_MODULE_0__(el), {
                setup: function () {
                    anime.set(el, { opacity: 0 });
                },
                fire: function () {
                    anime({
                        targets: el,
                        opacity: 1,
                        duration: 2000, easing: 'easeOutCubic'
                    });
                }
            });
        });
    }
    function guideAnimation() {
        var title = document.querySelector('section.guide .sec-title');
        var item = document.querySelectorAll('.guide-item');
        Pararax.queue(jquery__WEBPACK_IMPORTED_MODULE_0__(title), {
            setup: function () {
                anime.set(title, { opacity: 0, translateY: 10 });
                anime.set(item, { opacity: 0 });
            },
            fire: function () {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(function () {
                    anime({
                        targets: item,
                        opacity: 1,
                        duration: 1600, delay: anime.stagger(100), easing: 'easeOutCubic'
                    });
                }, 300);
            }
        });
    }
    function followAnimation() {
        var title = document.querySelector('.f_follow .sec-title');
        var item = document.querySelectorAll('.f_follow-sns li');
        Pararax.queue(jquery__WEBPACK_IMPORTED_MODULE_0__(title), {
            setup: function () {
                anime.set(title, { opacity: 0, translateY: 10 });
                anime.set(item, { opacity: 0 });
            },
            fire: function () {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(function () {
                    anime({
                        targets: item,
                        opacity: 1,
                        duration: 1600, delay: anime.stagger(100), easing: 'easeOutCubic'
                    });
                }, 400);
            }
        });
    }
    function contactAnimation() {
        var title = document.querySelector('.f_contact .sec-title');
        var item = document.querySelectorAll('.f_contact-link a');
        var hotel = document.querySelectorAll('.f_hotel');
        Pararax.queue(jquery__WEBPACK_IMPORTED_MODULE_0__(title), {
            setup: function () {
                anime.set(title, { opacity: 0, translateY: 10 });
                anime.set([item, hotel], { opacity: 0 });
            },
            fire: function () {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(function () {
                    anime({
                        targets: [item, hotel],
                        opacity: 1,
                        duration: 1600, delay: anime.stagger(100), easing: 'easeOutCubic'
                    });
                }, 400);
            }
        });
    }
    function openFloorModal(num) {
        $detail.removeClass('-active');
        $detail.filter('[data-map-detail="' + num + '"]').addClass('-active');
        $floorModal.fadeIn(300);
    }
    function closeFloorModal() {
        $floorModal.fadeOut(300);
    }
    $fbtn.on('click', function (e) {
        var $btn = jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget);
        var fid = $btn.attr('data-tab-btn');
        closeFloorModal();
        if ($floorNav.attr('data-floor-nav').indexOf(fid) != -1) {
            $floorNav.fadeIn(100);
        }
        else {
            $floorNav.fadeOut(0);
        }
        return false;
    });
    $point.on('click', function (e) {
        var num = jquery__WEBPACK_IMPORTED_MODULE_0__(e.currentTarget).attr('data-map-point');
        openFloorModal(num);
        return false;
    });
    $close.on('click', function () {
        closeFloorModal();
        return false;
    });
    $floorModal.on('click', function () {
        closeFloorModal();
        return false;
    });
    $floorModal.find('> div').on('click', function () {
        return false;
    });
    var top = true;
    var $vk = jquery__WEBPACK_IMPORTED_MODULE_0__('.kv');
    var kvH = $vk.height();
    $win.on('scroll', underscore__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
        var st = $win.scrollTop();
        var border = window.innerHeight * 0.9;
        if (top && st > border) {
            top = false;
            $header.removeClass('white');
        }
        else if (!top && st <= border) {
            top = true;
            $header.addClass('white');
        }
        border = kvH * 1.3;
        if (st > border) {
            $vk.addClass('none');
        }
        else {
            $vk.removeClass('none');
        }
    }, 10));
    (function () {
        var $nav = jquery__WEBPACK_IMPORTED_MODULE_0__('.fixed-nav a');
        var $explore = jquery__WEBPACK_IMPORTED_MODULE_0__('section.explore');
        var $floor = jquery__WEBPACK_IMPORTED_MODULE_0__('section.floor');
        var $guide = jquery__WEBPACK_IMPORTED_MODULE_0__('section.guide');
        var $follow = jquery__WEBPACK_IMPORTED_MODULE_0__('.f_follow');
        var margin = $header.height() * 2;
        var dimension = {};
        $win.on({
            'scroll._fixednav': underscore__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
                var st = $win.scrollTop() + margin;
                $nav.removeClass('-active');
                if (dimension.explore.top < st && st < dimension.explore.bottom) {
                    $nav.filter('.nv-explore').addClass('-active');
                }
                else if (dimension.floor.top < st && st < dimension.floor.bottom) {
                    $nav.filter('.nv-floor').addClass('-active');
                }
                else if (dimension.follow.top < st && st < dimension.follow.bottom) {
                    $nav.filter('.nv-follow').addClass('-active');
                }
                else if (dimension.guide.top < st && st < dimension.guide.bottom) {
                    $nav.filter('.nv-guide').addClass('-active');
                }
            }, 10),
            'resize._fixednav': underscore__WEBPACK_IMPORTED_MODULE_1__["throttle"](function () {
                dimension = {
                    explore: { top: $explore.offset().top, bottom: $explore.offset().top + $explore.height() },
                    floor: { top: $floor.offset().top, bottom: $floor.offset().top + $floor.height() * 1.1 },
                    guide: { top: $guide.offset().top, bottom: $guide.offset().top + $guide.height() * 1.3 },
                    follow: { top: $follow.offset().top, bottom: $follow.offset().top + $follow.height() * 3.5 }
                };
            }, 10)
        }).trigger('resize._fixednav');
        var cnt = 0;
        var tm = setInterval(function () {
            $win.trigger('resize._fixednav');
            if (++cnt == 5) {
                clearInterval(tm);
            }
        }, 1000);
    })();
    /*$win.on('load', ()=>{
        $(".floor-2F").scroll(function(){
            console.log($(this).scrollLeft());
        });
    });*/
});


/***/ })

/******/ });