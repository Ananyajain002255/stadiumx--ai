const totalTickets = Number(localStorage.getItem("totalTickets")) || 0;

const totalRevenue = Number(localStorage.getItem("totalRevenue")) || 0;

const totalTournaments = 8;
const totalTeams = 24;


document.getElementById("ticketCount").innerHTML = totalTickets;

document.getElementById("revenue").innerHTML = totalRevenue;

document.getElementById("tournamentCount").innerHTML = totalTournaments;

document.getElementById("teamCount").innerHTML = totalTeams;
