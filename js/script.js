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

const crowd = [
"🟢 Normal",
"🟡 Medium",
"🔴 High Crowd"
];

const security = [
"✅ Secure",
"🚓 Monitoring",
"🛰 AI Active"
];

const weather = [
"☀ Sunny",
"🌦 Cloudy",
"🌧 Rain Alert"
];

const ticket = [
"92% Sold",
"95% Sold",
"VIP Full"
];

setInterval(()=>{

document.getElementById("crowdStatus").innerHTML =
crowd[Math.floor(Math.random()*crowd.length)];

document.getElementById("securityStatus").innerHTML =
security[Math.floor(Math.random()*security.length)];

document.getElementById("weatherStatus").innerHTML =
weather[Math.floor(Math.random()*weather.length)];

document.getElementById("ticketStatus").innerHTML =
ticket[Math.floor(Math.random()*ticket.length)];

},2500);

setTimeout(function(){

document.getElementById("crowdBar").style.width="91%";
document.getElementById("crowdBar").innerHTML="91%";

document.getElementById("revenueBar").style.width="84%";
document.getElementById("revenueBar").innerHTML="84%";

document.getElementById("securityBar").style.width="99%";
document.getElementById("securityBar").innerHTML="99%";

},800);

// ======================
// AI Chat
// ======================

const assistant = document.getElementById("aiAssistant");
const chatBox = document.getElementById("chatBox");

assistant.onclick = function () {

    if(chatBox.style.display==="block"){

        chatBox.style.display="none";

    }else{

        chatBox.style.display="block";

    }

}

function sendMessage(){

    const input=document.getElementById("userInput");

    const body=document.getElementById("chatBody");

    if(input.value==="") return;

    body.innerHTML+=`
    <div class="user-msg">
    ${input.value}
    </div>
    `;

    let reply="AI is analyzing your request...";

    const text=input.value.toLowerCase();

    if(text.includes("ticket")){

        reply="🎟 Smart Ticket Booking is available.";

    }

    else if(text.includes("weather")){

        reply="🌤 Weather is Sunny (32°C).";

    }

    else if(text.includes("crowd")){

        reply="👥 Crowd Prediction: 91% occupancy.";

    }

    else if(text.includes("dashboard")){

        reply="📊 Dashboard is showing live analytics.";

    }

    else{

        reply="🤖 Thank you! AI Assistant received your query.";

    }

    setTimeout(function(){

        body.innerHTML+=`
        <div class="bot-msg">
        ${reply}
        </div>
        `;

        body.scrollTop=body.scrollHeight;

    },700);

    input.value="";

}

// ======================
// Revenue Analytics
// ======================

const chartCanvas = document.getElementById("revenueChart");

if(chartCanvas){

const ctx = chartCanvas.getContext("2d");

new Chart(ctx,{

type:"line",

data:{

labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],

datasets:[{

label:"Revenue (₹ Lakhs)",

data:[12,18,15,25,31,28,40],

borderColor:"#00E5FF",

backgroundColor:"rgba(0,229,255,.15)",

fill:true,

tension:.4,

borderWidth:4,

pointRadius:5

}]

},

options:{

responsive:true,

plugins:{

legend:{

labels:{

color:"white"

}

}

},

scales:{

x:{

ticks:{color:"white"},

grid:{color:"rgba(255,255,255,.1)"}

},

y:{

ticks:{color:"white"},

grid:{color:"rgba(255,255,255,.1)"}

}

}

}

});

}
