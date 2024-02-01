let homePointEl = document.getElementById("home-points")
let guestPointEl = document.getElementById("guest-points")
let homePoints = 0
let guestPoints = 0

function homePlusOne() {
    homePoints++
    homePointEl.textContent = homePoints
}

function homePlusTwo() {
    homePoints += 2
    homePointEl.textContent = homePoints
}

function homePlusThree() {
    homePoints += 3
    homePointEl.textContent = homePoints
}

function guestPlusOne() {
    guestPoints++
    guestPointEl.textContent = guestPoints
}

function guestPlusTwo() {
    guestPoints += 2
    guestPointEl.textContent = guestPoints
}

function guestPlusThree() {
    guestPoints += 3
    guestPointEl.textContent = guestPoints
}