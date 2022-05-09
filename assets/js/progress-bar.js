let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');

let progressNum = document.querySelector('.progress-num');

let x, y;

function updateProgressBar() {
  progressBar.style.width = `${getScrollPercentage()}%`;
  requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage() {
  return (
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  );
}

updateProgressBar();
