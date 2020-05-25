import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {TweenMax, TimelineMax} from "gsap"; // Also works with TweenLite and TimelineLite
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });

    $(() => {
        let tl1p1 = new TimelineMax(),
            tl1p12 = new TimelineMax(),
            tl2p1 = new TimelineMax(),
            tl2p2 = new TimelineMax(),
            tl3p1 = new TimelineMax(),
            tl3p2 = new TimelineMax(),
            tl4p1 = new TimelineMax(),
            tl4p2 = new TimelineMax()
        const controller = new ScrollMagic.Controller();
        tl1p1
            .fromTo('.case__ttl', .2, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
            .staggerFromTo('.steps__item', .2, {rotationY: -40, x: -10, opacity: 0}, {
                rotationY: 0,
                x: 0,
                opacity: 1
            }, .5)
        tl1p12
            .fromTo('.layout__grid', 1, {top: -2000}, {top: 0}, 0.2)
            //.staggerFromTo('.header', .8, {opacity: 0}, {opacity: 1}, 0.3)
            // .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
            .staggerFromTo('.package__item_left', 1.2, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
            // .staggerFromTo('.banner__subttl', .5, {x:-30,opacity:0}, {x:0,opacity:1}, 0.2)
            .staggerFromTo('.package__item_right', .8, {x: 30, opacity: 0}, {x: 0, opacity: 1}, 1)
            //.staggerFromTo('.banner__left', .8, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 1)
            //.staggerFromTo('.banner__center', .8, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 1)
            // .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)

            .setTween(tl1p1)
            .addTo(controller);
        const scene1p2 = new ScrollMagic.Scene({
            triggerElement: ".steps",
            triggerHook: 0.6,
            // reverse: false,
        })

            .setTween(tl1p12)
            .addTo(controller);
        const scene1p1 = new ScrollMagic.Scene({
            triggerElement: ".package__wrapper",
            triggerHook: 0,
            // reverse: false,
        })
    });
})

//sliders arrow
let arrow_next = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L11.5 11.5L2 21' stroke-width='3'/></svg>",
    arrow_prev = "<svg width='14' height='23' viewBox='0 0 14 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2L2.5 11.5L12 21' stroke-width='3'/></svg>"

$(() => {
    //ancors
    $("a.js-ancor-link").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

$(() => {
    $('.js-header__menu-btn').on('click', function headerHambClick() {
        $('body')
            .toggleClass('menu-open');
    });
});

//tabs
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector(".tabs div.is-active").classList.remove("is-active");
        document.querySelector(".tabs-panel.is-active").classList.remove("is-active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("is-active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("is-active");
    });
}

//checkbox
$('.js-package__input').change(function () {
    if ($(this).is(':checked')) {
        $(this).parent().removeClass('unchecked');
        $(this).parent().addClass('checked');
    } else {
        $(this).parent().removeClass('checked');
        $(this).parent().addClass('unchecked');
    }
});

// input file
let inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
        let fileName = '';
        if (this.files && this.files.length > 1)
            fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split('\\').pop();
        if (fileName)
            label.querySelector('span').innerHTML = fileName;
        else
            label.innerHTML = labelVal;
    });
});

$('[data-fancybox]').fancybox({
    btnTpl: {
        smallBtn:
            '<button type="button" data-fancybox-close class="modal__close" title="{{CLOSE}}">' + 'закрыть' +
            '<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<use xlink:href="#modal-close"></use>' +
            '</svg>' +
            "</button>"
    }
});

$(() => {
    function checkWidth() {
        let windowWidth = $('body').innerWidth()
        if (windowWidth < 769) {
            //remove scrollbar on mobile
            $('js-scrollbar').mCustomScrollbar("destroy");
            //service slider
            const sync1 = $('.js-service-slider-top');
            const sync2 = $('.js-service-slider-bottom');

            const thumbnailItemClass = '.owl-item';

            function syncPosition(el) {
                const $owlSlider = $(this).data('owl.carousel');
                const {loop} = $owlSlider.options;

                let current = el.item.index;
                if (loop) {
                    const count = el.item.count - 1;
                    current = Math.round(el.item.index - (el.item.count / 2) - 0.5);
                    if (current < 0) {
                        current = count;
                    }
                    if (current > count) {
                        current = 0;
                    }
                }

                const owlThumbnail = sync2.data('owl.carousel');
                const itemClass = `.${owlThumbnail.options.itemClass}`;

                const thumbnailCurrentItem = sync2
                    .find(itemClass)
                    .removeClass('synced')
                    .eq(current);

                thumbnailCurrentItem.addClass('synced');
                if (!thumbnailCurrentItem.hasClass('active')) {
                    const duration = 300;
                    sync2.trigger('to.owl.carousel', [current, duration, true]);
                }
            }

            sync1.owlCarousel({
                startPosition: 0,
                items: 1,
                loop: false,
                margin: 10,
                nav: false,
                dots: false,
                animateOut: 'fadeOut',
                smartSpeed: 500,
                autoplay: false,
                autoplayTimeout: 6000,
                autoplayHoverPause: false,
            }).on('changed.owl.carousel', syncPosition);
            sync2.owlCarousel({
                startPosition: 0,
                items: 1,
                loop: false,
                margin: 15,
                autoplay: false,
                nav: true,
                navText: [arrow_prev, arrow_next],
                navClass: ["slider-arrow slider-arrow_prev slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red"],
                navContainerClass: 'slider-arrow__wrp',
                dots: false,
                onInitialized(e) {
                    // eslint-disable-next-line no-underscore-dangle
                    const thumbnailCurrentItem = $(e.target).find(thumbnailItemClass).eq(this._current);
                    thumbnailCurrentItem.addClass('synced');
                },
            }).on('click', thumbnailItemClass, (e) => {
                e.preventDefault();
                const duration = 10000;
                const itemIndex = $(e.target).parents(thumbnailItemClass).index();
                sync1.trigger('to.owl.carousel', [itemIndex, duration, true]);
            }).on('changed.owl.carousel', (el) => {
                const number = el.item.index;
                const $owlSlider = sync1.data('owl.carousel');
                $owlSlider.to(number, 100, true);
            });
            $('.service__monitor').find('.tabs-panel').removeClass('tabs-panel');
            $('.js-packages-slider').owlCarousel({
                loop: true,
                items: 1,
                nav: true,
                autoHeight: true,
                navText: [arrow_prev, arrow_next],
                navClass: ["slider-arrow slider-arrow_prev slider-arrow_white", "slider-arrow slider-arrow_next slider-arrow_white"],
                navContainerClass: 'slider-arrow__wrp  slider-arrow__wrp_packages',
                dots: false,
            });
            $('.js-methodology-slider').owlCarousel({
                loop: false,
                items: 1,
                margin: 10,
                nav: true,
                autoHeight: true,
                navText: [arrow_prev, arrow_next],
                navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_methodology slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_methodology"],
                navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_methodology',
                dots: false,
            });
            $('.js-soft-mobile-slider').owlCarousel({
                loop: false,
                items: 1,
                margin: 120,
                nav: true,
                navText: [arrow_prev, arrow_next],
                navClass: ["slider-arrow slider-arrow_prev slider-arrow_prev_soft-mobile slider-arrow_red", "slider-arrow slider-arrow_next slider-arrow_red slider-arrow_next_soft-mobile"],
                navContainerClass: 'slider-arrow__wrp slider-arrow__wrp_soft-mobile',
                dots: false,
            });

        } else {
            //scroll bar
            $('.js-scrollbar').mCustomScrollbar({
                axis: 'y',
                theme: 'dark-thick',
                scrollInertia: '330',
                setHeight: 570,
                scrollButtons: {enable: true}
            });
            //remove slider on desktop
            $('.js-service-slider-top').trigger('destroy.owl.carousel').removeClass('js-service-slider-top owl-carousel owl-theme');
            $('.js-service-slider-bottom').trigger('destroy.owl.carousel').removeClass('js-service-slider-bottom owl-carousel owl-theme');
            $('.js-packages-slider').trigger('destroy.owl.carousel').removeClass('js-packages-slider owl-carousel owl-theme');
            $('.js-soft-mobile-slider').trigger('destroy.owl.carousel').removeClass('js-soft-mobile-slider owl-carousel owl-theme');
            $('.js-methodology-slider').trigger('destroy.owl.carousel').removeClass('js-methodology-slider owl-carousel owl-theme');
        }
    }

    checkWidth();
    $(window).resize(function () {
        checkWidth(); // проверит при изменении размера окна клиента
    });
});

//scroll bar
// $('.js-scrollbar').mCustomScrollbar({
//     axis: 'y',
//     theme: 'dark-thick',
//     scrollInertia: '330',
//     setHeight: 570,
//     scrollButtons: true,
//     scrollButtons: {enable: true}
// });

$(() => {

});

