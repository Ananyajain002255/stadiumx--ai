const nameInput = document.getElementById("tournamentName");
const venueInput = document.getElementById("venue");
const dateInput = document.getElementById("date");
const teamsInput = document.getElementById("teams");

const createBtn = document.getElementById("createBtn");
const table = document.getElementById("tournamentTable");

let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];
displayTournaments();

createBtn.addEventListener("click", function(){

    if(
        tournamentName.value === "" ||
        venue.value === "" ||
        date.value === "" ||
        teams.value === ""
    ){
        alert("Please fill all fields.");
        return;
    }
    const tournament = {
    name: tournamentName.value,
    venue: venue.value,
    date: date.value,
    teams: teams.value,
    status: "Upcoming"
};

tournaments.push(tournament);
localStorage.setItem("tournaments", JSON.stringify(tournaments));
displayTournaments();

console.log(tournaments);

});

function displayTournaments(){

    tournamentTable.innerHTML = "";

    tournaments.forEach(function(tournament,index){

        tournamentTable.innerHTML += `
        <tr>
            <td>${tournament.name}</td>
            <td>${tournament.venue}</td>
            <td>${tournament.date}</td>
            <td>${tournament.teams}</td>
            <td class="upcoming">${tournament.status}</td>
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

    const confirmDelete = confirm("Are you sure you want to delete this tournament?");

    if(!confirmDelete){
        return;
    }

    tournaments.splice(index,1);
    localStorage.setItem("tournaments", JSON.stringify(tournaments));
    displayTournaments();

}

let tournaments = JSON.parse(localStorage.getItem("tournaments")) || [];

renderTable();

createBtn.addEventListener("click", function(){

    const name = nameInput.value.trim();
    const venue = venueInput.value.trim();
    const date = dateInput.value;
    const teams = teamsInput.value;

    if(name === "" || venue === "" || date === "" || teams === ""){
        alert("Please fill all fields.");
        return;
    }

    tournaments.push({
        name,
        venue,
        date,
        teams
    });

    localStorage.setItem("tournaments", JSON.stringify(tournaments));

    renderTable();

    nameInput.value = "";
    venueInput.value = "";
    dateInput.value = "";
    teamsInput.value = "";

    alert("✅ Tournament Created Successfully");
});

function renderTable(){

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

    }

}
