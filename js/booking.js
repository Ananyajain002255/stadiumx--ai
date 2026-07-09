const seatsContainer = document.getElementById("seats");
const count = document.getElementById("count");
const price = document.getElementById("price");
const seatNumbers = document.getElementById("seatNumbers");
const bookBtn = document.getElementById("bookBtn");

const seatPrice = 500;

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

        seat.innerHTML = row + i;

        seat.addEventListener("click",function(){

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

    alert(
        "🎉 Booking Successful!\n\n" +
        "Seats: " + seatNumbers.innerHTML +
        "\nTotal Price: ₹" + price.innerHTML
    );

});
