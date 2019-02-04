$(function () {
    var $win = $(window);
    var $doc = $(document);
    var $header = $('header');
    var $nav = $('header nav');
    var $switch = $('.nv-switch');
    var $btn = $('.nv-btn').eq(0);
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
    if (utils.isPC) {
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
        var $target = $(selector);
        var pos = $target.offset().top - $header.height() - margin;
        var height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        $('html,body').animate({ scrollTop: pos }, 500);
        return false;
    }
    $('.js-about-toggle').on({
        'click': function (e) {
            var $this = $(e.currentTarget);
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
    $('.js-contact-mail').attr('href', 'mailto:info@solaniwa-onsen.com');
    $('.js-contact-tell')
        .addClass(function () {
        if (!utils.isSP) {
            return '-disabled';
        }
    })
        .attr('href', 'tel:0665679016').on({
        'click': function () {
            if (!utils.isSP) {
                return false;
            }
        }
    });
    $('.js-nv-follow').on({
        'click': function () {
            scrollTo('.f_follow');
            return false;
        }
    });
    $('.js-nv-explore').on({
        'click': function () {
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.explore', 30);
            return false;
        }
    });
    $('.js-nv-floor').on({
        'click': function () {
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.floor');
            return false;
        }
    });
    $('.js-nv-guide').on({
        'click': function () {
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.guide');
            return false;
        }
    });
    $('.js-modal-open').on({
        'click': function (e) {
            var sel = '.' + $(e.currentTarget).attr('data-modal-target');
            $(sel).fadeIn(300);
            return false;
        }
    });
    $('.js-modal-close').on({
        'click': function (e) {
            $(e.currentTarget).closest('.modal-window').fadeOut(300);
            return false;
        }
    });
    $('.js-share-fb').on({
        'click': function (e) {
            var url = $('meta[property="og:url"]').attr('content');
            openShareWindow('http://www.facebook.com/share.php?u=' + encodeURIComponent(url));
            return false;
        }
    });
    $('.js-share-line').on({
        'click': function (e) {
            var url = $('meta[property="og:url"]').attr('content');
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
    $('#mc-embedded-subscribe').on('click', function () {
        $('.js-register-adrs').text($('#mce-EMAIL').val());
    });
    var $mceErr = $('#mce-error-response').on('DOMSubtreeModified propertychange', function () {
        // $mceErr.css('display','none');
    });
    var $mceSuccess = $('#mce-success-response').on('DOMSubtreeModified propertychange', function () {
        $mceSuccess.css('display', 'none');
        openMagazineComplete();
    });
    var $magWin = $('.magazine-complete');
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
