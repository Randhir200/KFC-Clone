// variable
var form  = document.querySelector("form")
form.addEventListener("submit", myfunction)

var userData =JSON.parse(localStorage.getItem("users")) || [];
console.log(userData)

function myfunction(event){
    event.preventDefault();

    var obj =
    {
        firstname: form.fn.value,
        lastname: form.ln.value,
        email : form.email.value,
        password1: form.number1.value

    }
    userData.push(obj)
    localStorage.setItem("users", JSON.stringify(userData))
    window.location.href="login.html"

}