// variable
const slider = document.querySelector('.media-element');
let isDown = false;
let startX;
let scrollLeft;
console.log('hello ');

// events
slider.addEventListener('mousedown', function () {
  isDown = true;
});
slider.addEventListener('mouseleave', function () {
  isDown = false;
});
slider.addEventListener('mouseup', function () {
  isDown = false;
});
slider.addEventListener('mousemove', function () {
  if (!isDown) return;
  console.log(isDown);
  console.log('Do Work!');
});
