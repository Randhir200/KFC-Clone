var form = document.querySelector("form")

var userData = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", myfun)

function myfun(event){
event.preventDefault();
var signinData = {
   email:form.email.value,
   password:form.number.value
}

var exist = userData.findIndex(function(ele){
    return ele.email == signinData.email;
});

var status = false;
console.log(exist);
if(exist == -1)
{
    alert("Create and account")
}
else{
    userData.findIndex(function(elem){
        if(elem.email === signinData.email && elem.password1 === signinData.password){
         alert("Login Successful")
         status = true;
         localStorage.setItem('signinData', JSON.stringify(elem));
         window.location.href="../index.html"
            }
    });
    if(!status){
        alert("Login credential wrong!!")
    }
}

}