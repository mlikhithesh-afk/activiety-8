
const teamFilter = document.getElementById("teamFilter");
const matchContainer = document.getElementById("matchContainer");
const viewToggle = document.getElementById("viewToggle");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// FILTER MATCHES BY TEAM
teamFilter.addEventListener("change", function () {
    const selectedTeam = teamFilter.value;
    const matches = document.querySelectorAll(".match-card");

    matches.forEach(function (match) {
        const teams = match.dataset.teams;

        if (selectedTeam === "all" || teams.includes(selectedTeam)) {
            match.style.display = "";
        } else {
            match.style.display = "none";
        }
    });
});

// TOGGLE GRID AND LIST VIEW
viewToggle.addEventListener("click", function () {
    matchContainer.classList.toggle("list-view");

    if (matchContainer.classList.contains("list-view")) {
        viewToggle.textContent = "Switch to Grid View";
    } else {
        viewToggle.textContent = "Switch to List View";
    }
});

// MOBILE HAMBURGER MENU
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MOBILE MENU WHEN LINK IS CLICKED
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});