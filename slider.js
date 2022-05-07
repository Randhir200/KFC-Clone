// variable
const slider = document.querySelector('.media-scroller');
console.log(slider);
let isDown = false;
let startX;
let scrollLeft;

// events
slider.addEventListener('mousedown', function (event) {
  isDown = true;
  slider.classList.add('active');
  startX = event.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', function () {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', function (event) {
  if (!isDown) return;
  event.preventDefault();
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - startX)*3;
  slider.scrollLeft = scrollLeft - walk;
});
