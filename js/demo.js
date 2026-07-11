// ======================
// Loading Screen
// ======================

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 1500);

});

// ======================
// Particle Background
// ======================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#00E5FF"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 2
        }

    }

});

// ======================
// AI Status
// ======================

const aiMessages=[

"Analyzing Crowd...",

"Predicting Traffic...",

"Checking Weather...",

"Monitoring Security...",

"Generating Insights...",

"Stadium Ready ✅"

];

let aiIndex=0;

setInterval(function(){

    aiIndex++;

    if(aiIndex>=aiMessages.length){

        aiIndex=0;

    }

    document.getElementById("aiStatus").innerHTML=aiMessages[aiIndex];

},2500);


// ======================
// Live Activity Feed
// ======================

const activities=[

"🎟 210 tickets booked",

"🚗 Parking updated",

"🤖 AI detected high crowd",

"🌤 Weather synchronized",

"📊 Revenue increased",

"🏟 Stadium occupancy reached 82%",

"🚓 Security check completed",

"💺 VIP seats almost full"

];

setInterval(function(){

    const random=Math.floor(Math.random()*activities.length);

    const list=document.getElementById("activityList");

    const item=document.createElement("li");

    item.innerHTML=activities[random];

    list.prepend(item);

    if(list.children.length>6){

        list.removeChild(list.lastChild);

    }

},3000);
