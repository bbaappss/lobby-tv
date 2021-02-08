var tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 5
});

tl.from(".logo", {
  opacity: 0,
  duration: 1,
  x: -100,
});

tl.to(".logo", {
  opacity: 0,
  duration: 1,
  delay: 20,
  x: 100,
});