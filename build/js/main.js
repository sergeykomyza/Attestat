// ================================================== исключение по наименованию страницы
// const contactsPage = window.location.pathname == '/contacts.html'
// if(contactsPage){
//     ...
// }

// ================================================== исключение по селектору
// const body = document.querySelector('body');
// if (!body.querySelector('.main-page')) {
//     body.style.padding = '300px 0 0 0';
// }

document.addEventListener('DOMContentLoaded', function () {
    $('.open-m-menu').click(function(){
        $('.nav').addClass('active');
    })
    $('.close-m-menu').click(function(){
        $('.nav').removeClass('active');
    })
    // СКРОЛЛ К НУЖНОЙ СЕКЦИИ ПО КЛИКУ НА ПУНКТАХ МЕНЮ
    $('.nav__link').click(function () {
        $('.nav').removeClass('active');
        var scroll_elem = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(scroll_elem).offset().top
        }, 500);
    });
});


// ================================================== МАСКА ДЛЯ ИНПУТОВ (https://github.com/RobinHerbots/Inputmask)
// $(document).ready(function () {
//     $(".phone").inputmask({
//         mask: "+7 999 999 99 99",
//         clearIncomplete: true
//     });
//     $('.email').inputmask({
//         mask: "*{1,20}[.*{1,20}]@*{1,20}.*{2,4}",
//         clearIncomplete: true
//     //     greedy: false,
//     //     onBeforePaste: function (pastedValue, opts) {
//     //         pastedValue = pastedValue.toLowerCase();
//     //         return pastedValue.replace("mailto:", "");
//     //     },
//     //     definitions: {
//     //         '*': {
//     //             validator: "[0-9A-Za-z-а-я-]",
//     //             casing: "lower"
//     //         }
//     //     }
//     });
//     $(".date").inputmask({
//         mask: "99/99/9999",
//         clearIncomplete: true,
//         'placeholder': 'dd/mm/yyyy'
//     });
// });

// ================================================== СЛАЙДЕРЫ (https://kenwheeler.github.io/slick/)
document.addEventListener('DOMContentLoaded', function () {
    $('.slider').slick({
        fade: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        // nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // пользовательская навигация
    // var dot = $(".dots__item");
    // $('.slider').on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    //     dot.removeClass("dots__item--active").eq(nextSlide).addClass("dots__item--active")
    // });
    // dot.on("click", function () {
    //     var i = dot.index(this);
    //     $('.slider').slick("slickGoTo", i)
    // });
    // $(".prev").on("click", function () {
    //     $('.slider').slick("slickPrev")
    // });
    // $(".next").on("click", function () {
    //     $('.slider').slick("slickNext")
    // });

});
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 
// ================================================== 

// ================================================== КАРТА, ОТЛОЖЕННАЯ ЗАГРУЗКА (ЧТОБЫ УЛУЧШИТЬ ПОКАЗАТЕЛИ - PageSpeed Insights)
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        var headID = document.getElementsByTagName("body")[0];         
        var newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        headID.appendChild(newScript);
    }, 1000);
    setTimeout(function() {
        var myMap = new ymaps.Map('map', {
            center: [55.798652, 37.765866],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'г. Москва, ул. Советская, д. 48.',
                balloonContent: 'г. Москва, ул. Советская, д. 48.'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/logo_sign.png',
                iconImageSize: [40, 45],
                iconImageOffset: [-5, -38]
            })
        myMap.geoObjects
            .add(myPlacemark)
    }, 2000);
});
