// juhuslik pilt mida võetakse massiivist
function juhuslikPilt() {
    // massiiv piltide nimedega
    pildid=["images/smile.png", "images/neutral.png", "images/kurb.png", "images/lill.png"];

    const randomPilt = document.getElementById("randomPilt");


    // Math.floor - ümardab täisarvuni
    const pilt = pildid[Math.floor(Math.random() * pildid.length)];

    randomPilt.src = pilt;
}

// Arva ära mida näed pildidl
function selectValikPilt() {
    const randomPilt = document.getElementById("randomPilt");
    const valik = document.getElementById("valik").value;
    const vastus = document.getElementById("vastus");

    if(randomPilt.getAttribute("src") === valik) {
        vastus.innerHTML = "Õige vastus! See on " + valik.split("/")[1];
        vastus.style.color = "green";
    } else {
        vastus.innerHTML = "Vale vastus. Proovi uuesti!";
        vastus.style.color = "red";
    }
}

function radioValikPilt() {
    const valitudPilt = document.getElementById("valitudPilt");
    const piltValik = document.querySelector('input[name="piltValik"]:checked');

    if(piltValik) {
        valitudPilt.src = piltValik.value;
    }
}

