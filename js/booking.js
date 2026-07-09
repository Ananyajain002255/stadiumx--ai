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

    document.getElementById("ticketSeats").innerHTML = seatNumbers.innerHTML;

    document.getElementById("ticketPrice").innerHTML = price.innerHTML;

    document.getElementById("ticketPopup").style.display = "flex";

});

function closePopup(){

    document.getElementById("ticketPopup").style.display = "none";

}
const aiBtn = document.getElementById("aiBtn");

aiBtn.addEventListener("click", function(){

    const seats = document.querySelectorAll(".seat");

    for(let seat of seats){

        if(
            !seat.classList.contains("booked") &&
            !seat.classList.contains("selected")
        ){

            seat.classList.add("selected");

            updateBooking();

            alert(
                "🤖 AI Recommendation\n\n" +
                "Recommended Seat : " +
                seat.dataset.seat +
                "\nReason:\n" +
                "✔ Best Visibility\n" +
                "✔ Near Exit\n" +
                "✔ Less Crowd"
            );

            break;
        }

    }

});
