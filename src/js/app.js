// // $(() => {
// //     $(window).on('load', function () {
// //         $('.preloader__wrp').fadeOut();
// //     });
// // });


$(document).ready(function () {

    //ancors

    $("a.js-ancor-link").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    //SLIDERS
    let arrow_prev = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M22.5 2L3 21.5L22.5 41' ' stroke-width='3'/></svg>",
        arrow_next = "<svg width='24' height='43' viewBox='0 0 24 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2 2L21.5 21.5L2 41'  stroke-width='3'/></svg>"

    // js-banner-slider
    $('.js-slider-banner').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
        navContainerClass: 'slider-arrow__wrp',
        dotsClass: 'dots',
        dotClass: 'dots__item'
    });

    // main product slider
    $('.js-slider-product').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
        navContainerClass: 'slider-arrow__wrp',
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // js-banner-slider
    $('.js-mobile-news-slider').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [arrow_prev, arrow_next],
        navClass: ["slider-arrow slider-arrow_prev slider-arrow_blue", "slider-arrow slider-arrow_next slider-arrow_blue"],
        navContainerClass: 'mobile-news__arrow-wrp slider-arrow__wrp',
    });

});

$(() => {
    $('.hamburger').on('click', function headerHambClick() {
        $(this).toggleClass('is-active')
        $('.mobile-hide')
            .toggleClass('is-open')
            .slideToggle();
        //     .removeClass('feed-open');
    });
});


//scroll bar
$('.js-scrollbar').mCustomScrollbar({
    axis: 'y',
    theme: 'dark-thick',
    scrollInertia: '330',
    setHeight: 570,
    scrollButtons: true,
    scrollButtons: {enable: true}
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


