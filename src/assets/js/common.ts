import * as $ from 'jquery';
import * as utils from './utils';

$(()=>{
    const $win = $(window);
    const $doc = $(document);
    const $header = $('header');

    let $nav = $('header nav');
    let $switch = $('.nv-switch');
    let $btn = $('.nv-btn').eq(0);
    let $sub = $btn.find('.sub-nv');

    $switch.on({
        'click':()=>{
            if ($nav.hasClass('-open')) {
                $nav.removeClass('-open');
                $switch.removeClass('-open');
            } else {
                $nav.addClass('-open');
                $switch.addClass('-open');
            }
        }
    });

    if (utils.isPC) {
        $btn.on({
            'mouseenter':()=>{
                $btn.addClass('-open');
                $sub.stop(true).slideDown(200);
            },
            'mouseleave':()=>{
                $btn.removeClass('-open');
                $sub.stop(true).slideUp(200);
            }
        });
    } else {
        $btn.on({
            'click':()=>{
                $btn.toggleClass('-open');
                if ($btn.hasClass('-open')) {
                    $sub.slideDown(200);
                } else {
                    $sub.slideUp(200);
                }
            }
        });
    }



    function scrollTo(selector:any, margin?:any) {
        margin = margin || 0;
        let $target = $(selector);
        let pos = $target.offset().top - $header.height() - margin;
        let height = $doc.height() - window.innerHeight;
        pos = Math.min(pos, height);
        $('html,body').animate({scrollTop:pos}, 500);
        return false;
    }

    $('.js-about-toggle').on({
        'click': (e:any)=>{
            let $this = $(e.currentTarget);
            let $summary = $this.next();
            $this.toggleClass('-open');
            if ($this.hasClass('-open')) {
                $summary.slideDown(300);
            } else {
                $summary.slideUp(300);
            }
            return false;
        }
    });

    $('.js-contact-mail').attr('href','mailto:info@solaniwa-onsen.com');
    $('.js-contact-tell')
        .addClass(()=>{
            if (!utils.isSP) {
                return '-disabled';
            }
        })
        .attr('href','tel:0665679016').on({
        'click':()=>{
            if (!utils.isSP) {
                return false;
            }
        }
    });

    $('.js-nv-follow').on({
        'click':()=>{
            scrollTo('.f_follow');
            return false;
        }
    });
    $('.js-nv-explore').on({
        'click':()=>{
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.explore', 30);
            return false;
        }
    });
    $('.js-nv-floor').on({
        'click':()=>{
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.floor');
            return false;
        }
    });
    $('.js-nv-guide').on({
        'click':()=>{
            if (!utils.isPC && $switch.hasClass('-open')) {
                $switch.trigger('click');
            }
            scrollTo('section.guide');
            return false;
        }
    });

    $('.js-modal-open').on({
        'click':(e:any)=>{
            let sel = '.' + $(e.currentTarget).attr('data-modal-target');
            $(sel).fadeIn(300);
            return false;
        }
    });
    $('.js-modal-close').on({
        'click':(e:any)=>{
            $(e.currentTarget).closest('.modal-window').fadeOut(300);
            return false;
        }
    });
    $('.js-share-fb').on({
        'click':(e:any)=>{
            let url = $('meta[property="og:url"]').attr('content');
            openShareWindow('http://www.facebook.com/share.php?u=' + encodeURIComponent(url));
            return false;
        }
    });
    $('.js-share-line').on({
        'click':(e:any)=>{
            let url = $('meta[property="og:url"]').attr('content');
            openShareWindow('https://lineit.line.me/share/ui?url=' + encodeURIComponent(url));
            return false;
        }
    });
    const openShareWindow = function(url:any) {
        var width = 600;
        var height = 500;
        var x = window.screenX + (window.innerWidth - width) / 2;
        var y = window.screenY + (window.innerHeight - height) / 2;
        var opt = 'width=' + width + ', height=' + height + ',top=' + y + ',left=' + x;
        window.open(url, 'share', opt);
    };

    let mailadrs:any = '';
    $('#mc-embedded-subscribe').on('click',()=>{
        $('.js-register-adrs').text(<any>$('#mce-EMAIL').val());
    });
    const $mceErr:JQuery = $('#mce-error-response').on('DOMSubtreeModified propertychange', ()=>{
        // $mceErr.css('display','none');
    });
    const $mceSuccess:JQuery = $('#mce-success-response').on('DOMSubtreeModified propertychange', ()=>{
        $mceSuccess.css('display','none');
        openMagazineComplete();
    });
    const $magWin = $('.magazine-complete');
    const openMagazineComplete = function(close?:boolean) {
        if (close) {
            $magWin.fadeOut(300);
        } else {
            $magWin.fadeIn(300);
        }
    };
    $magWin.find('.close').on({
        click:()=>{
            openMagazineComplete(true);
        }
    });
});