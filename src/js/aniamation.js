import TimelineMax from 'TimelineMax'
import ScrollMagic from 'ScrollMagic'
import 'animation.gsap'
import 'debug.addIndicators'

$(() => {
    $(window).on('load', function () {
        let tl1p1 = new TimelineMax(),
            tl1p2 = new TimelineMax(),
            tl2p1 = new TimelineMax(),
            tl2p2 = new TimelineMax(),
            tl3p1 = new TimelineMax(),
            tl3p2 = new TimelineMax(),
            tl4p1 = new TimelineMax(),
            tl4p2 = new TimelineMax()
        const controller = new ScrollMagic.Controller();
        tl1p1
            .fromTo('.layout__grid', 1, {top: -2000}, {top: 0}, 0.2)
            .staggerFromTo('.header__ttl', .8, {opacity: 0}, {opacity: 1}, 0.3)
            // .staggerFromTo('.header__nav-link', .2, {x:30,opacity:0}, {x:0,opacity: 1}, 0.1)
            .staggerFromTo('.package__item_left', 1.2, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
            .staggerFromTo('.banner__subttl', .5, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.2)

            .staggerFromTo('.banner__left', .8, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 1)
            .staggerFromTo('.banner__center', .8, {y: 30, opacity: 0}, {y: 0, opacity: 1}, 1)
        // .staggerFromTo('.banner__descr', .5, {y:30,opacity:0}, {y:0,opacity:1}, 1)
        tl1p2
           .fromTo('.package__ttl', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
          .staggerFromTo('.package__item_left', .5, {x: -30, opacity: 0}, {x: 0, opacity: 1}, 0.6)
          .staggerFromTo('.package__item_right', .8, {x: 30, opacity: 0}, {x: 0, opacity: 1}, 1)
        tl2p1
            .fromTo('.trust__ttl', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
            .staggerFromTo('.trust__subttl', .5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, "-=0.7")
            .staggerFromTo('.trust__item', .3, {y: -50, opacity: 0}, {y: 0, opacity: 1}, .2)
        tl2p2
            .fromTo('.test__ttl', .5, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
            .staggerFromTo('.test__item', .3, {x: -10, opacity: 0}, {x: 0, opacity: 1}, .2)
        tl3p1
            .staggerFromTo('.steps__item', .3, {rotationY: -40, x: -10, opacity: 0}, {
                rotationY: 0,
                x: 0,
                opacity: 1
            }, 0.4)
        const scene1p1 = new ScrollMagic.Scene({
            triggerElement: ".header",
            triggerHook: 0,
            // reverse: false,
        })
            .setTween(tl1p1)
            .addTo(controller);
        const scene1p2 = new ScrollMagic.Scene({
            triggerElement: ".package",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl1p2)
            .addTo(controller);
        const scene2p1 = new ScrollMagic.Scene({
            triggerElement: ".interface",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl2p1)
            .addTo(controller);
        const scene2p2 = new ScrollMagic.Scene({
            triggerElement: ".test",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl2p2)
            .addTo(controller);
        const scene3p1 = new ScrollMagic.Scene({
            triggerElement: ".methodology__column",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl3p1)
            .addTo(controller);
        const scene3p2 = new ScrollMagic.Scene({
            triggerElement: ".methodology__column",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl3p2)
            .addTo(controller);
        const scene4p1 = new ScrollMagic.Scene({
            triggerElement: ".team",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl4p1)
            .addTo(controller);
        const scene4p2 = new ScrollMagic.Scene({
            triggerElement: ".footer",
            triggerHook: 0.6,
            // reverse: false,
        })
            .setTween(tl4p2)
            .addTo(controller);
    });
});