var form = document.querySelector("form")
form.addEventListener("submit", myfun)
function myfun(event){
event.preventDefault();


var emaildata = JSON.parse(localStorage.getItem("emailuser")) || []
var obj = {
    numbers:form.number.value,
    emails:form.email.value
}
emaildata.push(obj)
console.log(emaildata)
localStorage.setItem("emailuser", JSON.stringify(emaildata))


console.log("summaiya")
}