function nimiLugemiseKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi").value;

    vastus1.innerHTML = "Tere, " + nimi + "!";
    vastus1.style.backgroundColor = "lightgreen";

    return nimi;
}

// radio valikud
function radioValik() {
    let kuulamine = document.querySelector('input[name="kuulamine"]:checked');
    let vastus2 = document.getElementById("vastus2");
    let pilt = document.getElementById("kuulaminePilt");

    let value = kuulamine ? kuulamine.value : "Pole valitud";

    vastus2.innerHTML = "Sinu valik: " + value;
    vastus2.style.backgroundColor = "lightblue";

    if (value === "Spotify") {
        pilt.src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg";
    }

    if (value === "Raadio") {
        pilt.src = "https://png.pngtree.com/png-vector/20240804/ourmid/pngtree-orange-vintage-radio-clipart---retro-illustration-png-image_13371250.png";
    }

    if (value === "Vinüülplaat") {
        pilt.src = "https://upload.wikimedia.org/wikipedia/commons/7/75/Vinyl_record.svg";
    }

    return value;
}

//checkbox valik
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let metallica = document.getElementById("metallica").checked;
    let nirvana = document.getElementById("nirvana").checked;
    let queen = document.getElementById("queen").checked;
    let beatles = document.getElementById("beatles").checked;
    let acdc = document.getElementById("acdc").checked;

    let valikud = "";
    if (metallica) valikud += "Metallica, ";
    if (nirvana) valikud += "Nirvana, ";
    if (queen) valikud += "Queen, ";
    if (beatles) valikud += "The Beatles, ";
    if (acdc) valikud += "AC/DC, ";

    // slice on selleks et eemaldada viimane koma ja tühik
    vastus3.innerHTML = "Sinu valik: " + (valikud.length > 0 ? valikud.slice(0, -2) : "Pole valitud");
    vastus3.style.backgroundColor = "lightyellow";

    return valikud;
}

// range valik
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let rangeValue = document.getElementById("tund").value;

    vastus4.innerHTML = "Sa kuuled muusikat " + rangeValue + " tundi päevas.";
    vastus4.style.backgroundColor = "lightcoral";
    return rangeValue;
}

// select valik
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let selectValue = document.getElementById("stiil").value;

    if (selectValue === "vali") {
        vastus5.innerHTML = "Palun vali muusikastiil.";
        vastus5.style.backgroundColor = "lightblue";
    } else {
        vastus5.innerHTML = "Sinu valik: " + selectValue;
        vastus5.style.backgroundColor = "lightblue";
    }

    return selectValue;
}

// textarea
function textareaValik() {
    let vastus6 = document.getElementById("vastus6");
    let textareaValue = document.getElementById("arvamus").value;

    if (textareaValue.trim() === "") {
        vastus6.innerHTML = "Palun kirjuta arvamus.";
        vastus6.style.backgroundColor = "lightpink";
    } else {
        vastus6.innerHTML = "Sinu arvamus: " + textareaValue;
        vastus6.style.backgroundColor = "lightpink";
    }

    return textareaValue;
}

function raadioValik() {
    let vastus7 = document.getElementById("vastus7");
    let radioValue = document.querySelector('input[name="raadio"]:checked');

    if (radioValue) {
        vastus7.innerHTML = "Sinu valik: " + radioValue.value;
        vastus7.style.backgroundColor = "lightred";
    } else {
        vastus7.innerHTML = "Palun vali üks valik.";
        vastus7.style.backgroundColor = "lightred";
    }
    return radioValue ? radioValue.value : null;
}

// raadio jaamad
function jaamValik() {
    let vastus8 = document.getElementById("vastus8");
    let jaamValue = document.getElementById("jaam").value;

    if (jaamValue.trim() === "") {
        vastus8.innerHTML = "Palun sisesta raadiojaamade nimed.";
        vastus8.style.backgroundColor = "lightgreen";
    } else {
        vastus8.innerHTML = "Sinu valik: " + jaamValue;
        vastus8.style.backgroundColor = "lightgreen";
    }

    return jaamValue;
}


// kasutab teisi funktsioone
function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");

    let nimi = nimiLugemiseKastist();
    let radio = radioValik();
    let checkbox = checkboxValik();
    let tund = rangeValik();
    let select = selectValik();
    let textarea = textareaValik();
    let raadio = raadioValik();
    let jaam = jaamValik();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + "<br>" +
        "Sinu lemmikud on: " + radio + "<br>" +
        "Sinu valik on: " + checkbox + "<br>" +
        "Sa kuuled muusikat " + tund + " tundi päevas.<br>" +
        "Sinu valik on: " + select + "<br>" +
        "Sinu arvamus on: " + textarea + "<br>" +
        "Kas sa kuuled raadiot: " + raadio + "<br>" +
        "Sinu valitud raadiojaam on: " + jaam;
}


function puhastaVorm() {
    vastus1.innerHTML = "";
    vastus2.innerHTML = "";
    vastus3.innerHTML = "";
    vastus4.innerHTML = "";
    vastus5.innerHTML = "";
    vastus6.innerHTML = "";
    vastus7.innerHTML = "";
    vastus8.innerHTML = "";
    vastusKoik.innerHTML = "";
}