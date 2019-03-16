import * as $ from 'jquery';
import * as _ from 'underscore';
import * as utils from './utils';
import 'slick-carousel';

$(()=>{
    // $('.js-slick').slick({
    //     dots: true,
    //     appendDots: $('.campaign-indicator'),
    //     customPaging: function(slick, index){
    //         return '';
    //     },
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     touchThreshold:20,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 600,
    //     arrows: false,
    //     centerMode: false,
    //     // fade: true,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 fade: false,
    //                 slidesToShow: 1
    //             }
    //         },
    //     ]
    // });
    
    $('.js-slick').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 6000,
        touchThreshold:20,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        centerMode: false,
        // fade: true,
        prevArrow:'<button type="button" class="slick-arr -prev"></button>',
        nextArrow:'<button type="button" class="slick-arr -next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    fade: false,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.js-purchase-tickets').on('click', (e:any)=>{
       let href:string = $(e.currentTarget).attr('href');
       let param:string[] = href.split('#');
       if (href.indexOf(param[0]) !== -1) {
           location.hash = '#' + param[1];
           location.reload();
       }
    });
});