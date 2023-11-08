// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;


    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");


    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");

    const rocket = document.getElementById('rocket');



    takeoffButton.addEventListener("click", function () {
        if (confirm("Confirm that the shuttle is ready for takeoff")) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 10000;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }

    });

    landButton.addEventListener("click", function () {
        if (alert("The shuttle is landing. Landing gear engaged.")) {
            flightStatus.innerHTML = "The shuttle has landed";
            resetRocket();

        }
    });

    abortButton.addEventListener("click", function () {
        if (confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission Aborted";
            resetRocket();
        }
    });

    document.addEventListener("click", function (event) {
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
            rocketPosX -= 10;
            rocket.style.margin = rockPosX + 'px';
        }
        if (event.target.id === "right" && rocketPosX < (bkgWidth / 2 - 40)) {
            rocketPosX += 10;
            rocket.style.margin = rockPosX + 'px';
        }
        if (event.target.id === "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.margin = rockPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.margin = rockPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }

    });

    function resetRocket() {
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
        rocketPosX = 0;
        rocketPosX = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocket.style.marginBottom = rocketPosY + 'px';

    }





});
