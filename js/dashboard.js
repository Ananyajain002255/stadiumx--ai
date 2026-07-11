console.log("Dashboard Loaded Successfully");

const themeBtn = document.getElementById("themeBtn");

// Page load hone par saved theme apply karo
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
    themeBtn.innerHTML = "☀ Light Mode";
}

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = "☀ Light Mode";
        localStorage.setItem("theme","light");
    }
    else{
        themeBtn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme","dark");
    }

});
