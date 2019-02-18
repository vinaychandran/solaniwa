import * as $ from 'jquery';
import * as _ from 'underscore';
import * as utils from './utils';
import 'slick-carousel';

declare var anime:any;

class Pararax
{
    static $win:any = $(window);
    static _randomInt = function(a?:number, b?:number):number {
        if (a === undefined) {
            return (Math.random() * 99999999) | 0;
        }
        if (b === undefined) {
            return (Math.random() * a) | 0;
        }
        return (Math.random() * (b - a) + a) | 0;
    };
    public static queue($target:JQuery, param:any = null):void {
        param = param || {};
        let ratio = param.ratio || 0.6;
        let eventName = 'scroll._animation' + Pararax._randomInt();
        param.setup && param.setup();
        Pararax.$win.on(eventName, _.throttle(()=>{
            let st = Pararax.$win.scrollTop();
            let pos = $target.offset().top - window.innerHeight * ratio;
            if (st > pos) {
                param.fire && param.fire();
                Pararax.$win.off(eventName);
            }
        },10));
    }
}

$(()=>{
    $('.js-slick').slick({
        dots: false,
        touchThreshold:20,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 200,
        prevArrow:'<button type="button" class="slick-arr -prev"></button>',
        nextArrow:'<button type="button" class="slick-arr -next"></button>',
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

    let $win:any = $(window);
    let $doc:any = $(document);
    let $header:any = $('header');
    let $floorModal:any = $('.floor-map_modal');
    let $floorNav:any = $('.floor-map_nav');
    let $detail:any = $floorModal.find('dl');
    let $close:any = $floorModal.find('.close');
    let $point:any = $('.floor-map_points .point');
    let $fbtn:any = $('.floor-btn');
    let $welcome:any = $('.welcome');
    let lang:string = $('html').attr('lang');
    let referrer:string = document.referrer;

    function scrollTo(selector:any, margin?:any) {
        margin = margin || 0;
        let $target = $(selector);
        let pos = $target.offset().top - $header.height() - margin;
        let height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        $('html,body').animate({scrollTop:pos}, 500);
        return false;
    }

    if (/#floor/.test(location.hash)) {
        $welcome.hide();
        setTimeout(()=>{
            scrollTo('section.floor');
        }, 300);
    }
    else if (/#explore/.test(location.hash)) {
        $welcome.hide();
        setTimeout(()=>{
            scrollTo('section.explore', 30);
        }, 300);
    }
    else if (/#guide/.test(location.hash)) {
        $welcome.hide();
        setTimeout(()=>{
            scrollTo('section.guide', -40);
        }, 300);
    }
    else if (lang == 'ja' && referrer.indexOf(location.host) != -1) {
        startAnimation();
    }
    else if (lang != 'ja' && referrer.indexOf(location.host) != -1 && referrer.indexOf('/'+lang+'/') != -1 ) {
        startAnimation();
    }
    else {
        let $msg = $welcome.find('.welcome-msg');
        let $logo = $welcome.find('.welcome-logo');
        let $p = $msg.find('p');
        if (lang == 'ja') {
            $p.each((i:any, o:any)=>{
                let $p = $(o);
                let html = '';
                $p.text().split('').forEach((c:any)=>{
                    html += '<span>'+c+'</span>';
                });
                $p.empty().html(html);
            });
        }
        $p.each((i:any, o:any)=>{
            setTimeout(()=>{
                $(o).addClass('-show');
            },i * 300 + 100);
        });
        setTimeout(()=>{
            $msg.fadeOut(600,'linear');
        }, 2600);
        setTimeout(()=>{
            $logo.addClass('-show').delay(800).promise().done(()=>{
                window.scrollTo(0, 0);
                $logo.fadeOut(800,'linear');
                setTimeout(()=>{
                    startAnimation();
                }, 1000);
            });
        }, 3600);
    }

    function startAnimation() {
        setTimeout(()=>{
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
        let $kv:any = $('.kv');
        let pic:any = $kv.find('> picture')[0];
        let logo:any = $kv.find('.kv-grandopen')[0];
        let btn:any = $kv.find('.kv-btn')[0];

        let animation = anime.timeline();
        animation
            .set(pic, {opacity:0,scale:1.1})
            .set([logo,btn], {opacity:0,translateY:10})
            .add({
                targets: pic,
                opacity:1,
                scale: 1,
                duration: 1600,
                easing: 'easeOutCubic'
            })
            .add({
                targets:[logo,btn],
                opacity:1,
                duration: 1000,
                translateY:0,
                delay: anime.stagger(100),
                easing: 'easeOutCubic'
            })
            .finished.then(()=>{

            })
    }

    function exploreAnimation() {
        let msg:any = document.querySelectorAll('.explore-message p');
        let list:any = document.querySelector('.explore-list');

        Pararax.queue($('section.explore'),{
            setup:()=>{
                anime.set(msg, {opacity:0,translateY:10});
                anime.set(list, {opacity:0});
            },
            fire:()=>{
                anime({
                    targets:msg,
                    opacity:1, translateY:0,
                    duration: 2000, delay: anime.stagger(100), easing: 'easeOutCubic'
                });
                anime({
                    targets:list,
                    opacity:1,
                    duration: 2000, delay:300, easing: 'easeOutCubic'
                });
            }
        });
    }

    function newsAnimation() {
        let news:any[] = [].slice.call(document.querySelectorAll('section.news'));
        news.forEach((el:any)=>{
            let $news:any = $(el);
            let list:any = [].slice.call($news.find('.news-item'));
            Pararax.queue($news,{
                setup:()=>{
                    let scale:number = list.length > 1 ? 1.02 : 1.03;
                    scale = utils.isSP ? 1.02 : scale;
                    anime.set(list, {opacity:0,scale:scale});
                },
                fire:()=>{
                    anime({
                        targets:list,
                        opacity:1, scale:1.001,
                        duration: 800, easing: 'easeOutCubic'
                    });
                }
            });
        });
    }

    function mapAnimation() {
        let floor:any = document.querySelector('section.floor');
        let magazine:any = document.querySelector('section.magazine');
        [floor,magazine].forEach((el:any)=>{
            Pararax.queue($(el),{
                setup:()=>{
                    anime.set(el, {opacity:0});
                },
                fire:()=>{
                    anime({
                        targets:el,
                        opacity:1,
                        duration: 2000, easing: 'easeOutCubic'
                    });
                }
            });
        });
    }

    function guideAnimation() {
        let title:any = document.querySelector('section.guide .sec-title');
        let item:any = document.querySelectorAll('.guide-item');

        Pararax.queue($(title),{
            setup:()=>{
                anime.set(title, {opacity:0,translateY:10});
                anime.set(item, {opacity:0});
            },
            fire:()=> {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(()=>{
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
        let title:any = document.querySelector('.f_follow .sec-title');
        let item:any = document.querySelectorAll('.f_follow-sns li');

        Pararax.queue($(title),{
            setup:()=>{
                anime.set(title, {opacity:0,translateY:10});
                anime.set(item, {opacity:0});
            },
            fire:()=> {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(()=>{
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
        let title:any = document.querySelector('.f_contact .sec-title');
        let item:any = document.querySelectorAll('.f_contact-link a');
        let hotel:any = document.querySelectorAll('.f_hotel');

        Pararax.queue($(title),{
            setup:()=>{
                anime.set(title, {opacity:0,translateY:10});
                anime.set([item,hotel], {opacity:0});
            },
            fire:()=> {
                anime({
                    targets: title,
                    opacity: 1, translateY: 0,
                    duration: 1600, easing: 'easeOutCubic'
                });
                setTimeout(()=>{
                    anime({
                        targets: [item,hotel],
                        opacity: 1,
                        duration: 1600, delay: anime.stagger(100), easing: 'easeOutCubic'
                    });
                }, 400);
            }
        });
    }

    function openFloorModal(num:any) {
        $detail.removeClass('-active');
        $detail.filter('[data-map-detail="'+num+'"]').addClass('-active');
        $floorModal.fadeIn(300);
    }
    function closeFloorModal() {
        $floorModal.fadeOut(300);
    }

    $fbtn.on('click', (e:any)=>{
        let $btn = $(e.currentTarget);
        let fid = $btn.attr('data-tab-btn');
        closeFloorModal();
        if ($floorNav.attr('data-floor-nav').indexOf(fid) != -1) {
            $floorNav.fadeIn(100);
        } else {
            $floorNav.fadeOut(0);
        }
        return false;
    });

    $point.on('click', (e:any)=>{
        let num = $(e.currentTarget).attr('data-map-point');
        openFloorModal(num);
        return false;
    });
    $close.on('click', ()=>{
        closeFloorModal();
        return false;
    });
    $floorModal.on('click', ()=>{
        closeFloorModal();
        return false;
    });
    $floorModal.find('> div').on('click', ()=>{
        return false;
    });

    let top = true;
    let $vk:any = $('.kv');
    let kvH:any = $vk.height();
    $win.on('scroll', _.throttle(()=>{
        let st = $win.scrollTop();
        let border:any = window.innerHeight * 0.9;
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
        } else {
            $vk.removeClass('none');
        }
    },10));

    (()=>{
        const $nav:JQuery = $('.fixed-nav a');
        const $explore = $('section.explore');
        const $floor = $('section.floor');
        const $guide = $('section.guide');
        const $follow = $('.f_follow');
        const margin = $header.height() * 2;
        let dimension:any = {};
        $win.on({
            'scroll._fixednav':_.throttle(()=>{
                const st = $win.scrollTop() + margin;
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
            'resize._fixednav':_.throttle(()=>{
                dimension = {
                    explore:{top:$explore.offset().top, bottom:$explore.offset().top + $explore.height()},
                    floor:{top:$floor.offset().top, bottom:$floor.offset().top + $floor.height() * 1.1},
                    guide:{top:$guide.offset().top, bottom:$guide.offset().top + $guide.height() * 1.3},
                    follow:{top:$follow.offset().top, bottom:$follow.offset().top + $follow.height() * 3.5}
                };
            }, 10)
        }).trigger('resize._fixednav');

        let cnt = 0;
        const tm = setInterval(()=>{
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