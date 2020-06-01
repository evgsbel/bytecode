$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
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

//checkbox
$('.js-package__input_right').change(function () {
    if ($(this).is(':checked')) {
        $(this).parent().removeClass('unchecked');
        $(this).parent().addClass('checked');
        $('.js-result-price_right').html('3 960');

    } else {
        $(this).parent().removeClass('checked');
        $(this).parent().addClass('unchecked');
        $('.js-result-price_right').html('4 320');

    }
});
$('.js-package__input_left').change(function () {
    if ($(this).is(':checked')) {
        $(this).parent().removeClass('unchecked');
        $(this).parent().addClass('checked');
        $('.js-result-price_left').html('2 500');
    } else {
        $(this).parent().removeClass('checked');
        $(this).parent().addClass('unchecked');
        $('.js-result-price_left').html('2 620');
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
            $('.service__monitor').find('.cd-tabs__panel').removeClass('cd-tabs__panel');
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
$(() => {
  $('.js-play-video').click(function (ev) {
    $(this).addClass('is-playing')
    $('.header__video_play').fadeOut(100);
    $('.header__video_overlay').fadeOut(100);
    $('.header__video_frame').fadeIn(100);
    $(".header__video_frame")[0].src += "?autoplay=1";
  })
})
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

