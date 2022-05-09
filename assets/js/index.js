//mobile-toggle-menu
var menu_btn = document.querySelector('.hamburger');
var mobile_nav = document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');
});

// userIcon
var data = JSON.parse(localStorage.getItem('signinData'));
var usertag = document.getElementById('usertag');
var userIcon = document.getElementById('usericon');
usertag.href = './account/login.html';
if (data) {
  var fullname = data.firstname[0] + data.lastname[0];
  usertag.innerText = fullname;
  usertag.style.textTransform = 'uppercase';
  document.querySelector('.icon').style.padding = '8px 6px';
  userIcon.style.display = 'none';
  usertag.href = './account/logout.html';
}
