//mobile-toggle-menu
var menu_btn = document.querySelector('.hamburger');
var mobile_nav = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');
});


// variable
var data = JSON.parse(localStorage.getItem('signinData'));
var usertag = document.getElementById('usertag');
var fullname = data.firstname[0] + data.lastname[0];
usertag.innerText = fullname;

