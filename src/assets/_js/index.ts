//import * as $ from 'jquery';
//import * as _ from 'underscore';
//import * as utils from './utils';
//import 'slick-carousel';

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

    let $win = $(window);
    let $doc = $(document);
    let $header = $('header');
    let $floorModal = $('.floor-map_modal');
    let $floorNav = $('.floor-map_nav');
    let $detail = $floorModal.find('dl');
    let $close = $floorModal.find('.close');
    let $point = $('.floor-map_points .point');
    let $fbtn = $('.floor-btn');
    let $fmap = $('.floor-map');
    let $welcome = $('.welcome');

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
    else if (document.referrer.indexOf(location.host) != -1) {
        $welcome.hide();
    }
    else {
        let $msg = $welcome.find('.welcome-msg');
        let $logo = $welcome.find('.welcome-logo');
        let $p = $msg.find('p').each((i, o)=>{
            let $p = $(o);
            let html = '';
            $p.text().split('').forEach((c:any)=>{
                html += '<span>'+c+'</span>';
            });
            $p.empty().html(html);
        });
        $p.each((i, o)=>{
            setTimeout(()=>{
                $(o).addClass('-show');
            },i * 300);
        });
        setTimeout(()=>{
            $msg.fadeOut(600,'linear');
        }, 2500);
        setTimeout(()=>{
            $logo.addClass('-show').delay(800).promise().done(()=>{
                window.scrollTo(0, 0);
                $logo.fadeOut(800,'linear');
                $welcome.delay(1000).fadeOut(800,'linear');
            });
        }, 3500);
    }

    function openFloorModal(num:any) {
        $detail.removeClass('-active');
        $detail.filter('[data-map-detail="'+num+'"]').addClass('-active');
        $floorModal.fadeIn(300);
    }
    function closeFloorModal() {
        $floorModal.fadeOut(300);
    }

    $fmap.eq(0).addClass('-active');
    $fbtn.on('click', (e:any)=>{
        let $btn = $(e.currentTarget);
        let fid = $btn.attr('data-floor');
        let $map = $fmap.filter('[data-floor-id="'+fid+'"]');
        if (!$map.hasClass('-active')) {
            $fbtn.removeClass('-active');
            $btn.addClass('-active');
            $fmap.removeClass('-active');
            $map.addClass('-active').css('opacity',0).animate({opacity:1},400);
            closeFloorModal();
        }
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
    $win.on('scroll', ()=>{
        let st = $win.scrollTop();
        if (top && st > 120) {
            top = false;
            $header.removeClass('white');
        }
        else if (!top && st <= 120) {
            top = true;
            $header.addClass('white');
        }
    });

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