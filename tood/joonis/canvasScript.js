
function joon() {
    // joon - линия
    const canvas = document.getElementById("canvas");

    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle="blue";
        tx.lineWidth = 3;
        tx.moveTo(0, 0);
        tx.lineTo(200, 280)
        tx.stroke();
    }
}

function puhasta() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function kolmnurk() {
    const canvas = document.getElementById("canvas");

    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle = "blue";
        tx.lineWidth = 3;
        tx.moveTo(50, 50);
        tx.lineTo(200, 280);
        tx.lineTo(30, 350);
        tx.lineTo(50, 50);
        tx.fill();
        tx.stroke();
    }
}

function ristkylik() {
    const canvas = document.getElementById("canvas");
    const laius = document.getElementById("laius").value;
    const korgus = document.getElementById("kõrgus").value;


    if (canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "red";
        tx.fillRect(100, 150, laius, korgus);

    }
}

// ümberjoon - окружность
// ring - круг
function ring() {
    const canvas = document.getElementById("canvas");
    const r = document.getElementById("raadius").value;


    if (canvas.getContext) {
        let tx = canvas.getContext("2d");
        tx.fillStyle = "yellow";
        tx.strokeStyle = "green";
        tx.arc(100, 100, r, 0, 2 * Math.PI, true);
        tx.fill();

    }
}

function pilt() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let tx = canvas.getContext("2d");
        let img = new Image();
        img.src = "https://picsum.photos/200/300?random=1";
        img.onload = function () {
            tx.drawImage(img, 50, 50, 100, 100);
        }
    }
}

function ratas1() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle = "black";

        // peamine ratas
        tx.arc(100, 210, 20, 0, 2 * Math.PI, true);
        tx.stroke();

        tx.beginPath();
        // ring ratase seas
        tx.arc(100, 210, 4, 0, 2 * Math.PI, true);

        tx.stroke();
    }
}

function ratas2() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle = "black";

        // peamine ratas
        tx.arc(220, 210, 20, 0, 2 * Math.PI, true);
        tx.stroke();

        tx.beginPath();
        // ring ratase seas
        tx.arc(220, 210, 4, 0, 2 * Math.PI, true);
        tx.stroke();
    }
}

function kere() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.strokeStyle = "black";

        // kere (основной корпус)
        tx.fillRect(60, 140, 200, 50)

        // katus (крыша)
        tx.moveTo(100, 140);
        tx.lineTo(100, 110);
        tx.lineTo(190, 110);
        tx.lineTo(200, 140);

        tx.stroke();
    }
}

function tuled() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.lineWidth = 3;
        tx.strokeStyle = "yellow";

        tx.moveTo(270, 155);
        tx.lineTo(310, 130);

        tx.moveTo(270, 165);
        tx.lineTo(330, 160);

        tx.moveTo(270, 175);
        tx.lineTo(315, 200);
        tx.stroke();
    }
}

// oma funktsioon
function aken() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext("2d")) {
        let tx = canvas.getContext("2d");
        tx.beginPath();
        tx.lineWidth = 2;
        tx.strokeStyle= "black";
        tx.strokeRect(110, 118, 65, 15)
    }
}