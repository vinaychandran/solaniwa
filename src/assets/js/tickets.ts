import * as $ from 'jquery';
import * as _ from 'underscore';
import * as utils from './utils';
import 'slick-carousel';
import {} from '@types/googlemaps';


declare var google: any;

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
        dots: true,
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
    initGoogleMapPopupTicketPage();
});

const initGoogleMapPopupTicketPage = function() {
    const latInput: HTMLInputElement = (document.querySelector('input#sdfLatTicketDetail'));
    const lngInput: HTMLInputElement = document.querySelector('input#sdfLngTicketDetail');
    if (latInput && lngInput) {
        const myLatlng = new google.maps.LatLng(parseFloat(latInput.value), parseFloat(lngInput.value));
        const mapOptions = {
            zoom: 13,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true
        };
        const googleMapPopUps = document.querySelectorAll('.googleMapPopUp');
        for (let i = 0; i < googleMapPopUps.length; i++) {
            let marker = new google.maps.Marker({
                position: myLatlng,
                map: new google.maps.Map(googleMapPopUps[i], mapOptions),
                title: ''
            });
        }
    }
}