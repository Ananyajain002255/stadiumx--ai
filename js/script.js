console.log("StadiumX AI Loaded");

// ===========================
// Loading Screen
// ===========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);

});

// ===========================
// Typing Effect
// ===========================

const title = "Future of Smart Stadiums";

let i = 0;

function typingEffect(){

    if(i < title.length){

        document.getElementById("typingTitle").innerHTML += title.charAt(i);

        i++;

        setTimeout(typingEffect,80);

    }

}

typingEffect();


// ===========================
// Animated Counter
// ===========================

function counter(id,target,prefix="",suffix=""){

    let count = 0;

    const speed = target / 100;

    const interval = setInterval(function(){

        count += speed;

        if(count >= target){

            count = target;

            clearInterval(interval);

        }

        document.getElementById(id).innerHTML =
        prefix + Math.floor(count) + suffix;

    },20);

}

counter("matchCounter",24);
counter("visitorCounter",65000);
counter("revenueCounter",2400000,"₹");
counter("accuracyCounter",97,"","%");


// ===========================
// Particles Background
// ===========================

particlesJS("particles-js",{

    particles:{

        number:{
            value:80
        },

        color:{
            value:"#00E5FF"
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:0.5
        },

        size:{
            value:3
        },

        line_linked:{
            enable:true,
            distance:150,
            color:"#00E5FF",
            opacity:0.4
        },

        move:{
            enable:true,
            speed:2
        }

    }

});


// ===========================
// Feature Cards Animation
// ===========================

const cards = document.querySelectorAll(".feature-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});


// ===========================
// Live AI Status
// ===========================

const status = document.querySelector(".live-ai");

const messages = [

"🟢 AI Running • Crowd Prediction Active",

"🎟 Ticket Booking Active",

"📊 Analytics Updating",

"🤖 AI Monitoring Stadium",

"🌤 Weather Synced"

];

let index = 0;

setInterval(()=>{

    index++;

    if(index>=messages.length){

        index=0;

    }

    status.innerHTML = messages[index];

},2500);


// ===========================
// Navbar Active Link
// ===========================

const links = document.querySelectorAll(".navbar a");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});

// Cursor Glow

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", function(e){

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// Toast

window.onload = function(){

    const toast = document.getElementById("toast");

    setTimeout(function(){

        toast.classList.add("show");

    },1000);

    setTimeout(function(){

        toast.classList.remove("show");

    },5000);

};

// AI Assistant

document.getElementById("aiAssistant").onclick = function(){

    alert("🤖 AI Assistant Coming Soon!");

};
