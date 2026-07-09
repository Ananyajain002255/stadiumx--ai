const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const password = document.getElementById("password").value;
const confirm = document.getElementById("confirm").value;

if(password !== confirm){

alert("Passwords do not match!");

return;

}

alert("Account Created Successfully!");

window.location.href="login.html";

});
