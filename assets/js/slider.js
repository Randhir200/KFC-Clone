// variable
const slider = document.querySelector('.media-scroller');
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

// variable
const slider1 = document.querySelector('.quick-media-scroller');
let isDown1 = false;
let startX1;
let scrollLeft1;

// events
slider1.addEventListener('mousedown', function (event) {
  isDown1 = true;
  slider1.classList.add('active');
  startX1 = event.pageX - slider1.offsetLeft;
  scrollLeft1 = slider1.scrollLeft;
});

slider1.addEventListener('mouseleave', function () {
  isDown1 = false;
  slider1.classList.remove('active');
});

slider1.addEventListener('mouseup', function () {
  isDown1 = false;
  slider1.classList.remove('active');
});

slider1.addEventListener('mousemove', function (event) {
  if (!isDown1) return;
  event.preventDefault();
  const x = event.pageX - slider1.offsetLeft;
  const walk1 = (x - startX1)*3;
  slider1.scrollLeft = scrollLeft1 - walk1;
});
