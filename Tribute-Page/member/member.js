gsap.from(".navbar ", {
    opacity: 0,
    y: -100,
    duration: 1.3,
    ease: 'bounce'
})
gsap.from('.hero-img', {
    duration: 3,
    opacity:0,
    ease: 'elastic',
 });
 gsap.from(".hero-content", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 1.2
 })