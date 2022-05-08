// variable
var data = JSON.parse(localStorage.getItem('signinData'));
var usertag = document.getElementById('usertag');
var fullname = data.firstname[0] + data.lastname[0];
usertag.innerText = fullname;
