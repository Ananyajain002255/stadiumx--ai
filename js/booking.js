const bookedSeats=[
"A2",
"A5",
"B3",
"B7",
"C4",
"D6",
"E2",
"F8"
];
const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const price = document.getElementById("price");
const seatNumbers = document.getElementById("seatNumbers");
const bookBtn = document.getElementById("bookBtn");


const rows = ["A","B","C","D","E","F"];

rows.forEach(row => {

    for(let i=1;i<=8;i++){

        const seat = document.createElement("div");

        seat.className = "seat";

if(row==="A"){
    seat.classList.add("vip");
}
else if(row==="B" || row==="C"){
    seat.classList.add("premium");
}
else{
    seat.classList.add("normal");
}

        seat.dataset.seat = row + i;

        if(bookedSeats.includes(row+i)){
    seat.classList.add("booked");
}

        seat.innerHTML = row + i;

        seat.addEventListener("click",function(){

            if(seat.classList.contains("booked")){
    return;
}

            seat.classList.toggle("selected");

            updateBooking();

        });

        seatsContainer.appendChild(seat);

    }

});

function updateBooking(){

    const selectedSeats=document.querySelectorAll(".seat.selected");

    let total=0;

    let seatList=[];

    selectedSeats.forEach(function(seat){

        seatList.push(seat.dataset.seat);

        if(seat.classList.contains("vip")){
            total+=1000;
        }
        else if(seat.classList.contains("premium")){
            total+=750;
        }
        else{
            total+=500;
        }

    });

    count.innerHTML=selectedSeats.length;

    price.innerHTML=total;

    seatNumbers.innerHTML=seatList.length?seatList.join(", "):"None";

}

bookBtn.addEventListener("click",function(){

    const totalSeats = Number(count.innerHTML);

    if(totalSeats===0){

    alert("Please select at least one seat.");

    return;

}

const confirmBooking = confirm("Are you sure you want to book these seats?");

if(!confirmBooking){
    return;
}

    const ticketId = "STX-" + Math.floor(10000 + Math.random() * 90000);

document.getElementById("ticketId").innerHTML = ticketId;

    document.getElementById("ticketSeats").innerHTML = seatNumbers.innerHTML;

    document.getElementById("ticketPrice").innerHTML = price.innerHTML;

    const now = new Date();

document.getElementById("ticketTime").innerHTML =
now.toLocaleString();

const gate = Math.floor(Math.random() * 8) + 1;

document.getElementById("ticketGate").innerHTML =
"Gate " + gate;
    
    document.querySelectorAll(".seat.selected").forEach(seat => {
    seat.classList.remove("selected");
    seat.classList.add("booked");

    seat.style.transform = "scale(0.95)";

    setTimeout(() => {
        seat.style.transform = "scale(1)";
    },150);

    bookedSeats.push(seat.dataset.seat);
});

    bookBtn.disabled = true;
bookBtn.innerHTML = "Booked ✅";
    
updateBooking();

    document.getElementById("ticketPopup").style.display = "flex";

});

function closePopup(){

    document.getElementById("ticketPopup").style.display = "none";

    bookBtn.disabled = false;
    bookBtn.innerHTML = "Book Ticket";

}
const aiBtn = document.getElementById("aiBtn");

aiBtn.addEventListener("click", function(){

    const availableSeats = [...document.querySelectorAll(".seat:not(.booked):not(.selected)")];

if(availableSeats.length === 0){
    alert("No seats available!");
    return;
}

const preferredSeat = availableSeats.find(seat =>
    seat.classList.contains("premium")
);

const seat = preferredSeat || availableSeats[0];
    
   seat.classList.add("selected");

updateBooking();

alert(
"🤖 AI Recommendation\n\n" +
"Recommended Seat : " + seat.dataset.seat +
"\nReason:\n" +
"✔ Best Visibility\n" +
"✔ Near Exit\n" +
"✔ Less Crowd"
);

});

document.getElementById("downloadBtn").addEventListener("click", function(){
 if(document.getElementById("ticketId").innerHTML === ""){
        alert("Please book your ticket first.");
        return;
    }

   const ticket =
`🎟 STADIUMX AI TICKET

Ticket ID : ${document.getElementById("ticketId").innerHTML}

Match : India vs Australia

Seats : ${document.getElementById("ticketSeats").innerHTML}

Total Price : ₹${document.getElementById("ticketPrice").innerHTML}

Booking Time : ${document.getElementById("ticketTime").innerHTML}

Entry Gate : ${document.getElementById("ticketGate").innerHTML}

Thank You For Booking!`;

    const blob = new Blob([ticket], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download =
"Ticket_" +
document.getElementById("ticketId").innerHTML +
".txt";

   document.body.appendChild(link);

link.click();

document.body.removeChild(link);

setTimeout(() => {
    URL.revokeObjectURL(link.href);
},100);

});

window.onclick = function(event){

    if(event.target === document.getElementById("ticketPopup")){

        closePopup();

    }

}
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        closePopup();

    }

});

// ===========================
// Dark Light Mode
// ===========================

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
