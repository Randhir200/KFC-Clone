let userData = JSON.parse(localStorage.getItem('signinData'));
let totalItem = JSON.parse(localStorage.getItem('totalItem'));
let addedPrice = JSON.parse(localStorage.getItem('addedPrice'));
var logoutbtn = document.querySelector('#logoutbtn');
logoutbtn.style.cursor = 'pointer';
// console.log(logoutbtn);
var username = document.querySelector('#username');
username.innerText = userData.firstname + ' ' + userData.lastname;
logoutbtn.addEventListener('click', function () {
  userData = {};
  localStorage.setItem('signinData', JSON.stringify(userData));
  window.location.href = '../index.html';
});

//cart-history
let cartHistory = document.querySelector('#cart-history');
cartHistory.addEventListener('click', function () {
  console.log(cartHistory);
  if (totalItem) {
    document.querySelector(
      '#item-status'
    ).innerText = `${totalItem} Items of ₹ ${addedPrice} Added in your cart`;
    document.querySelector('#img').src = '../assets/img/bucket.png';
    console.log(document.querySelector('#img').src);

    console.log(document.querySelector('#item-status'));
  } else {
    document.querySelector('#item-status').innerText =
      'NO PAST ORDERS AVAILABLE. LET’S START AN ORDER!';
  }
});
