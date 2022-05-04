var form = document.querySelector("form")
form.addEventListener("submit", myfunction)



var userotp = JSON.parse(localStorage.getItem("otpdata")) || []
function myfunction(event){
    event.preventDefault();

    
var obj = {
    userinput1: form.userinput1.value,
    userinput2: form.userinput2.value,
    userinput3: form.userinput3.value,
    userinput4: form.userinput4.value
}
userotp.push(obj)
// console.log(userotp)
localStorage.setItem("otpdata", JSON.stringify(userotp))
window.location.href ="Signup.html"
}