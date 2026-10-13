function teisendamine() {
    let teisendamiseTulemus = document.getElementById("teisendamiseTulemus");
    teisendamiseTulemus.hidden = false;
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik"); // mitu elementi ühe nimega
    let arv = document.getElementById("arv").value;
    let pilt = document.getElementById("meetriPilt");


    vastus.innerHTML = "";
    vastus.style.color="black";

    const toll = 39.37;
    const meeter = 0.0254;

    if (document.getElementById("meeter").checked) {
        pilt.src = "images/meeter.jpg";
        pilt.alt = "Mõõdulint";
    } else {
        pilt.src = "images/toll.jpg";
        pilt.alt = "Joonlaud tollides";
    }

    if (arv === "") {
        vastus.innerHTML = "Sisesta arv.";
        return;
    } else if (arv < 1 || arv > 100) {
        vastus.innerHTML = "Sisesta arv 1 kuni 100.";
        vastus.style.color = "red";
        return;
    }

    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            let valikVäärtus = valik[i].value;

            if (valikVäärtus === "m") {
                vastus.innerHTML = arv + " meetri = " + (arv*toll).toFixed(1) + " tollides";
                vastus.style.color="green";
            } else if (valikVäärtus === "t") {
                vastus.innerHTML = arv + " tolli = " + (arv*meeter).toFixed(1) + " meetrites";
                vastus.style.color="blue";
            }
        }
    }
}
