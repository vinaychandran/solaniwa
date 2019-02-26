import * as $ from 'jquery';
import * as _ from 'underscore';

$(()=>{
    const $modal:any = $('.modal-gallery');
    const $modalIn:any = $('.modal-gallery-in');
    const $img:any = $modal.find('img');
    const $nav:any = $modal.find('.nav-btn');
    const $galleryList:JQuery = $('.gallery-list');
    const galleryItem:any = $galleryList.find('.gallery-item').remove();
    let pid:any = 0;

    _.each(_.shuffle([].slice.call(galleryItem)), (el:any)=>{
        $(el).appendTo($galleryList);
    });

    const $gallery:any = $('.js-gallery').on({
        click:(e:any)=>{
            pid = <any>$(e.currentTarget).attr('data-gallery-id') - 0;
            $modal.fadeIn(300);
            changePhoto($(e.currentTarget).attr('href'));
            return false;
        }
    });
    $gallery.each((i:number, e:any)=>{
        $(e).attr('data-gallery-id', i);
    });
    $nav.on({
        click:(e:any)=>{
            let $btn:any = $(e.currentTarget);
            let total:any = $gallery.length;
            if ($btn.hasClass('-next')) {
                pid = (++pid) % total;
            } else {
                pid = (--pid + total) % total;
            }
            changePhoto($gallery.eq(pid).attr('href'));
            return false;
        }
    });

    $galleryList.find('.gallery-item').each((i, el:any)=>{
        $(el).delay(i * 100).fadeTo(500, 1);
    });

    function changePhoto(src:any) {
        let $img = $modalIn.find('img');
        let img = new Image();
        img.onload = function() {
            setTimeout(function(){
                $img.attr('src', src)
                    .fadeTo(500, 1);
            }, 100);
        };
        img.src = src;
        $img.fadeTo(100, 0);
    }
});