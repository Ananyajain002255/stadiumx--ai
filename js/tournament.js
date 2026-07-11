const nameInput = document.getElementById("tournamentName");
const venueInput = document.getElementById("venue");
const dateInput = document.getElementById("date");
const teamsInput = document.getElementById("teams");

const createBtn = document.getElementById("createBtn");
const table = document.getElementById("tournamentTable");

createBtn.addEventListener("click", function(){

    console.log("Button Clicked");

    if(
        nameInput.value === "" ||
        venueInput.value === "" ||
        dateInput.value === "" ||
        teamsInput.value === ""
    ){
        alert("Please fill all fields.");
        return;
    }
    const tournament = {
    name: nameInput.value,
    venue: venueInput.value,
    date: dateInput.value,
    teams: teamsInput.value,
    status: "Upcoming"
};

tournaments.push(tournament);

localStorage.setItem("tournaments", JSON.stringify(tournaments));

renderTable();

nameInput.value = "";
venueInput.value = "";
dateInput.value = "";
teamsInput.value = "";

alert("✅ Tournament Created Successfully");

console.log(tournaments);
});

let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];

renderTable();

function renderTable(){

    console.log(tournaments);

    table.innerHTML = "";

    tournaments.forEach((tournament,index)=>{

        const today = new Date();
        const matchDate = new Date(tournament.date);

        today.setHours(0,0,0,0);
        matchDate.setHours(0,0,0,0);

        let status = "";
        let className = "";

        if(matchDate > today){
            status = "🟢 Upcoming";
            className = "upcoming";
        }
        else if(matchDate.getTime() === today.getTime()){
            status = "🟡 Live";
            className = "live";
        }
        else{
            status = "🔴 Finished";
            className = "finished";
        }

        table.innerHTML += `
        <tr>

            <td>${tournament.name}</td>

            <td>${tournament.venue}</td>

            <td>${tournament.date}</td>

            <td>${tournament.teams}</td>

            <td class="${className}">
                ${status}
            </td>

            <td>

                <button class="deleteBtn" onclick="deleteTournament(${index})">

                    Delete

                </button>

            </td>

        </tr>
        `;
    });

}

function deleteTournament(index){

    if(confirm("Delete this tournament?")){

        tournaments.splice(index,1);

        localStorage.setItem("tournaments", JSON.stringify(tournaments));

        renderTable();

        alert("🗑 Tournament Deleted Successfully");

    }

}
