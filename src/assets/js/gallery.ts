import * as $ from 'jquery';
import * as _ from 'underscore';
import * as utils from './utils';

$(()=>{
    let $catBtn = $('.sec-header_category a');
    $catBtn.on('click', (e:any)=>{
        let $btn = $(e.currentTarget);
        let tag = $btn.attr('data-photo-tag').split(',');
        alert(tag);
        return false;
    });
});

$(()=>{
    const $modal:any = $('.modal-gallery');
    const $modalIn:any = $('.modal-gallery-in');
    const $nav:any = $modal.find('.nav-btn');
    const $galleryList:JQuery = $('.gallery-list');
    const galleryItem:any = $galleryList.find('.gallery-item').remove();
    let pid:any = 0;

    _.each([].slice.call(galleryItem), (el:any)=>{
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
        let $img = $modalIn.find('.modal-image');
        let img = new Image();
        img.onload = function() {
            setTimeout(function(){
                if (!utils.isSP) {
                    let width:any = (img.height > img.width) ? window.innerHeight : '100%';
                    $modalIn.css('width', width);
                } else {
                    // let height:any = (img.height / img.width) * 100 + '%';
                    // if (img.height > img.width) {
                    //     height = window.innerHeight * 0.8;
                    // }
                    let height:any = window.innerHeight * 0.8;
                    $img.css('padding-top', height);
                }
                $img.css('background-image', 'url(' + src + ')')
                    .fadeTo(500, 1);
            }, 100);
        };
        img.src = src;
        $img.fadeTo(100, 0);
    }
});