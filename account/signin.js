// variable
var form  = document.querySelector("form")
form.addEventListener("submit", myfunction)

var numberdata = []

function myfunction(event){
    event.preventDefault();

    var obj =
    {
        number: form.number.value,
        skbtn: form.skipBtn.value
    }
    numberdata.push(obj)
    localStorage.setItem("num", JSON.stringify(obj))
    // console.log(obj)
    window.location.href ="Otp.html"

// if(isNaN(number)){
//     document.querySelector("#msg").innerHTML="Please Enter Number"
//     return false
// }if(number>10){
//     document.querySelector("#msg").innerHTML="Please Enter 10 Digit Number"
//     return false
// }




}