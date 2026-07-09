alert("Booking JS Loaded");
const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const price = document.getElementById("price");

const seatPrice = 500;

for(let i=1;i<=48;i++){

    const seat=document.createElement("div");

    seat.classList.add("seat");

    seat.innerHTML=i;

    seat.addEventListener("click",()=>{

        seat.classList.toggle("selected");

        updateBooking();

    });

    seatsContainer.appendChild(seat);

}

function updateBooking(){

    const selected=document.querySelectorAll(".selected");

    count.innerHTML=selected.length;

    price.innerHTML=selected.length*seatPrice;

}

document.getElementById("bookBtn").addEventListener("click",()=>{

    if(count.innerHTML==0){

        alert("Please Select At Least One Seat");

    }

    else{

        alert("Booking Successful!");

    }

});
