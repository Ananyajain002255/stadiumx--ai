const contactForm = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){

        alert("Please fill all fields.");

        return;
    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email.");

        return;
    }

    successMessage.style.display = "block";

    successMessage.innerHTML =
    "✅ Your message has been sent successfully!";

    contactForm.reset();

    setTimeout(function(){

        successMessage.style.display = "none";

    },3000);

});
