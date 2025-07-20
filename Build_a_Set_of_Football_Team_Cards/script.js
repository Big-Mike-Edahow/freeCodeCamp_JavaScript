// script.js

const footballTeam = {
    team: "Looney Tunes",
    year: 1996,
    headCoach: "Daffy Duck",
    players: [
        {
            name: "Bugs Bunny",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Elmer Fudd",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Foghorn Leghorn",
            position: "goalkeeper",
            isCaptain: true
        },
        {
            name: "Duck Dodgers",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Yosemite",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Wile E. Coyote",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Road Runner",
            position: "goalkeeper",
            isCaptain: false
        },
        {
            name: "Sylvester J. Pussycat",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Pepé Le Pew",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Tweety Bird",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Marvin the Martian",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Porky Pig",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Sam the Sheepdog",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Ralph Wolf",
            position: "goalkeeper",
            isCaptain: false
        },
        {
            name: "Speedy Gonzales",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Hugo the Abominable Snowman",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Spike the Bulldog",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Chester the Terrier",
            position: "goalkeeper",
            isCaptain: false
        },
        {
            name: "Tazmanian Devil",
            position: "forward",
            isCaptain: false
        },
        {
            name: "Slowpoke Rodriguez",
            position: "midfielder",
            isCaptain: false
        },
        {
            name: "Playboy Penguin",
            position: "defender",
            isCaptain: false
        },
        {
            name: "Michigan J. Frog",
            position: "goalkeeper",
            isCaptain: false
        },
    ],
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;


function displayPlayers(position) {
    const playerCardsDiv = document.getElementById("player-cards");
    playerCardsDiv.innerHTML = "";

    const playersToShow = footballTeam.players.filter(player => position === "all" || player.position === position);

    playersToShow.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.innerHTML = `<h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
    <p>Position: ${player.position}</p>`;
        playerCardsDiv.appendChild(card);

    });
}

document.getElementById("players").addEventListener("change", (event) => {
    const selectedPosition = event.target.value;
    displayPlayers(selectedPosition);
});

displayPlayers("all");
