// 2372066 Sebastian C

gsap.from(".navbar ", {
  opacity: 0,
  y: -100,
  duration: 1.3,
  ease: "bounce",
});
gsap.from(".member-content", {
  duration: 1,
  x: 100,
  opacity: 0,
  delay: 1.2,
});
