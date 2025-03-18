
const lenis = new Lenis({
  duration: 1.2,  // Durée du scroll (plus grand = plus lent)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Courbe d'animation
  smooth: true, // Active le smooth scroll
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



  

