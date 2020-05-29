import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import {TweenMax, TimelineMax} from "gsap"; // Also works with TweenLite and TimelineLite
import {ScrollMagicPluginGsap} from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// import {TimelineMax} from "gsap";
// import * as ScrollMagic from "scrollmagic";

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
        //.fromTo('.case__ttl', .2, {y: 30, opacity: 0}, {opacity: 1, y: 0}, .5)
        .staggerFromTo('.steps__item', .2, {rotationY: -40, x: -10, opacity: 0}, {
            rotationY: 0,
            x: 0,
            opacity: 1
        }, .5)
    tl1p12
        //.fromTo('.layout__grid', 1, {top: -2000}, {top: 0}, 0.2)
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