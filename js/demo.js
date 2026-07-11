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

// ======================
// Animated Counters
// ======================

function animateCounter(id, target, prefix = "", suffix = "") {

    let count = 0;

    const step = target / 100;

    const counter = setInterval(function () {

        count += step;

        if (count >= target) {

            count = target;

            clearInterval(counter);

        }

        document.getElementById(id).innerHTML =
            prefix + Math.floor(count) + suffix;

    }, 20);

}

animateCounter("matchCount", 24);

animateCounter("revenueCount", 24, "₹", "L");

animateCounter("visitorCount", 65, "", "K");

animateCounter("accuracyCount", 97, "", "%");

// ======================
// AI Assistant
// ======================

document.getElementById("aiAssistant").onclick = function(){

    alert("🤖 AI Assistant\n\nWelcome to StadiumX AI!\n\nThis feature will soon provide smart stadium assistance.");

};

// ======================
// Toast Notifications
// ======================

const messages = [

"🎟 New Ticket Booking Received",

"📊 Revenue Updated",

"🤖 AI Generated New Insight",

"🌤 Weather Updated",

"🏆 New Tournament Scheduled",

"🚗 Parking Status Updated"

];

function showToast(){

    const toast = document.getElementById("toast");

    const random = Math.floor(Math.random()*messages.length);

    toast.innerHTML = messages[random];

    toast.style.right = "30px";

    setTimeout(function(){

        toast.style.right = "-350px";

    },3000);

}

setInterval(showToast,5000);

showToast();
