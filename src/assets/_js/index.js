$(function () {
    $('.js-slick').slick({
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
    var $win = $(window);
    var $doc = $(document);
    var $header = $('header');
    var $floorModal = $('.floor-map_modal');
    var $floorNav = $('.floor-map_nav');
    var $detail = $floorModal.find('dl');
    var $close = $floorModal.find('.close');
    var $point = $('.floor-map_points .point');
    var $fbtn = $('.floor-btn');
    var $fmap = $('.floor-map');
    var $welcome = $('.welcome');
    function scrollTo(selector, margin) {
        margin = margin || 0;
        var $target = $(selector);
        var pos = $target.offset().top - $header.height() - margin;
        var height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        $('html,body').animate({ scrollTop: pos }, 500);
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
    else if (document.referrer.indexOf(location.host) != -1) {
        $welcome.hide();
    }
    else {
        var $msg_1 = $welcome.find('.welcome-msg');
        var $logo_1 = $welcome.find('.welcome-logo');
        var $p = $msg_1.find('p').each(function (i, o) {
            var $p = $(o);
            var html = '';
            $p.text().split('').forEach(function (c) {
                html += '<span>' + c + '</span>';
            });
            $p.empty().html(html);
        });
        $p.each(function (i, o) {
            setTimeout(function () {
                $(o).addClass('-show');
            }, i * 300);
        });
        setTimeout(function () {
            $msg_1.fadeOut(600, 'linear');
        }, 2500);
        setTimeout(function () {
            $logo_1.addClass('-show').delay(800).promise().done(function () {
                window.scrollTo(0, 0);
                $logo_1.fadeOut(800, 'linear');
                $welcome.delay(1000).fadeOut(800, 'linear');
            });
        }, 3500);
    }
    function openFloorModal(num) {
        $detail.removeClass('-active');
        $detail.filter('[data-map-detail="' + num + '"]').addClass('-active');
        $floorModal.fadeIn(300);
    }
    function closeFloorModal() {
        $floorModal.fadeOut(300);
    }
    $fmap.eq(0).addClass('-active');
    $fbtn.on('click', function (e) {
        var $btn = $(e.currentTarget);
        var fid = $btn.attr('data-floor');
        var $map = $fmap.filter('[data-floor-id="' + fid + '"]');
        if (!$map.hasClass('-active')) {
            $fbtn.removeClass('-active');
            $btn.addClass('-active');
            $fmap.removeClass('-active');
            $map.addClass('-active').css('opacity', 0).animate({ opacity: 1 }, 400);
            closeFloorModal();
        }
        if ($floorNav.attr('data-floor-nav').indexOf(fid) != -1) {
            $floorNav.fadeIn(100);
        }
        else {
            $floorNav.fadeOut(0);
        }
        return false;
    });
    $point.on('click', function (e) {
        var num = $(e.currentTarget).attr('data-map-point');
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
    $win.on('scroll', function () {
        var st = $win.scrollTop();
        if (top && st > 120) {
            top = false;
            $header.removeClass('white');
        }
        else if (!top && st <= 120) {
            top = true;
            $header.addClass('white');
        }
    });
    (function () {
        var $nav = $('.fixed-nav a');
        var $explore = $('section.explore');
        var $floor = $('section.floor');
        var $guide = $('section.guide');
        var $follow = $('.f_follow');
        var margin = $header.height() * 2;
        var dimension = {};
        $win.on({
            'scroll._fixednav': _.throttle(function () {
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
            'resize._fixednav': _.throttle(function () {
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
});
