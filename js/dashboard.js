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

// ======================
// Live Clock
// ======================

function updateClock(){

    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

// ======================
// Animated Counters
// ======================

function animateCounter(id,target,prefix=""){

    let count = 0;

    const speed = target/100;

    const counter = setInterval(function(){

        count += speed;

        if(count >= target){

            count = target;

            clearInterval(counter);

        }

        document.getElementById(id).innerHTML =
            prefix + Math.floor(count);

    },20);

}

animateCounter("liveMatches",24);

animateCounter("visitors",65000);

animateCounter("revenue",2400000,"₹");

// ======================
// Occupancy
// ======================

const progress = document.getElementById("progressFill");

let percent = 78;

progress.style.width = percent + "%";

progress.innerHTML = percent + "%";

// ======================
// AI Prediction
// ======================

const predictions = [

"High Crowd Expected Today",

"Rain Chances 20%",

"VIP Seats Almost Full",

"Parking Will Reach Capacity",

"Heavy Traffic Expected"

];

let index = 0;

setInterval(function(){

    index++;

    if(index >= predictions.length){

        index = 0;

    }

    document.getElementById("predictionText").innerHTML =
        predictions[index];

},4000);

// ======================
// Revenue Chart
// ======================

const ctx = document.getElementById("revenueChart").getContext("2d");
new Chart(ctx,{

    type:"line",

    data:{

        labels:["Jan","Feb","Mar","Apr","May","Jun"],

        datasets:[{

            label:"Revenue",

            data:[12,19,10,25,18,30],

            borderColor:"#00E5FF",

            backgroundColor:"rgba(0,229,255,.2)",

            fill:true,

            tension:.4

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
                ticks:{
                    color:"white"
                }
            },

            y:{
                ticks:{
                    color:"white"
                }
            }

        }

    }

});
document.getElementById("addMatchBtn").onclick=function(){

    alert("Add Match Feature Coming Soon");

}

document.getElementById("exportBtn").onclick=function(){

    alert("Report Exported Successfully");

}

document.getElementById("alertBtn").onclick=function(){

    alert("Alert Sent Successfully");

}

document.getElementById("temperature").innerHTML="32°C";

document.getElementById("weatherStatus").innerHTML="Sunny";
