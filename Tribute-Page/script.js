gsap.registerPlugin(Flip) 
gsap.registerPlugin(ScrollTrigger) 

gsap.from(".navbar ", {
    opacity: 0,
    y: -100,
    duration: 1.3
})
gsap.from(".navbar-brand ", {
    opacity: 0,
    x: -100,
    duration: 1.3,
    delay: 0.5
})
gsap.from(".navbar-nav ", {
    opacity: 0,
    x: 100,
    duration: 1.3,
    delay: 0.5
})
gsap.from(".content1", {
    duration:2.5,
    ease: "elastic.inOut(1,0.3)",
    opacity: 0,
    x: -100
});
gsap.from(".gambar-hero", {
    duration:2.5,
    opacity: 0,
    x: 100,
    ease: "bounce"
});
