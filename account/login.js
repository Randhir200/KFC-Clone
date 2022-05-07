var form = document.querySelector("form")

var user = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", myfun)

function myfun(event){
event.preventDefault();
var obj = {
   email:form.email.value,
   password:form.number.value
}
user.forEach(function(ele){
   if(user===null)
   {
      alert("Please Create an account");
   }
   else if(ele.email==obj.email && ele.password1==obj.password){
      alert("Sign in Successful")
      window.location.href = "signup.html"
      localStorage.setItem("signin", JSON.stringify(ele))  
   }
})
}