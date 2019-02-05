const carousel = new Siema({
  selector: ".carousel",
  loop: true,
  draggable: false
});
function advanceCarousel() {
  carousel.next();
}
setInterval(advanceCarousel, 6000);
