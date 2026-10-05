// checkbox valikud
function checkboxValik() {
    let vastus1 = document.getElementById("vastus1");
    let javascript = document.getElementById("javascript").checked;
    let python = document.getElementById("python").checked;
    let java = document.getElementById("java").checked;
    let csharp = document.getElementById("csharp").checked;
    let php = document.getElementById("php").checked;

    let valikud = "";
    if (javascript) valikud += "JavaScript, ";
    if (python) valikud += "Python, ";
    if (java) valikud += "Java, ";
    if (csharp) valikud += "C#, ";
    if (php) valikud += "PHP, ";

    // eemaldab viimase koma ja tühiku
    //valikud = valikud.length > 0 ? valikud.slice(0, -2) : "Pole valitud";

    // ausalt öeldes ma ei taha teha suuri if-else loopi kuna see on minu jaoks ebamugav ja некрасиво.
    // kuna ülemine näide on AI poolt tehtud (kuid oli tehtud ajal kus see oli lubatud) ma tegin ümber
    // samagusune lugu aga split-iga


    //eemaldab viimane element listist
    if (valikud.length > 0) {
        valikud = valikud.split(", ");
        valikud.pop(valikud.indexOf(valikud.length));
        valikud = valikud.join(", ");
    } else {
        valikud = "Pole valitud"
    }


    vastus1.innerText = "Sinu valitud programmeerimiskeeled: " + valikud;
    vastus1.style.backgroundColor = "lightyellow";

    return valikud;
}

// textarea
function textareaValik() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus").value;

    vastus2.style.backgroundColor = "lightpink";
    if (arvamus === "") {
        vastus2.innerHTML = "Palun sisesta oma arvamus.";
        return "Pole sisestatud";
    } else {
        vastus2.innerHTML = "Sinu arvamus: " + arvamus;
        return arvamus;
    }
}

// number valik
function numberValik() {
    let vastus3 = document.getElementById("vastus3");
    let tund = document.getElementById("tund").value;

    vastus3.style.backgroundColor = "lightblue";
    if (tund === "") {
        vastus3.innerHTML = "Palun sisesta tundide arv.";
        return "Pole sisestatud";
    } else {
        vastus3.innerHTML = "Tegeled programmeerimisega " + tund + " tundi nädalas.";
        return tund;
    }
}

// raadio valik kasvõi programmeerimine meeldib
function radioValik() {
    let vastus4 = document.getElementById("vastus4");
    let meeldib = document.getElementById("jah").checked;
    let eiMeeldi = document.getElementById("ei").checked;
    let pilt = document.getElementById("meeldibPilt");
    // valideerimise jaoks on vaja src, seetõttu kasutame hidden
    pilt.hidden = false;

    if (meeldib){
        vastus4.innerHTML = "Programmeerimine meeldib!";
        vastus4.style.backgroundColor = "lightgreen";
        pilt.src = "../vormid/images/smile.png";
        return "Jah"
    } else if (eiMeeldi) {
        vastus4.innerHTML = "Programmeerimine ei meeldi.";
        vastus4.style.backgroundColor = "lightcoral";
        pilt.src = "../vormid/images/kurb.png";
        return "Ei";
    } else {
        vastus4.innerHTML = "Palun vali, kas programmeerimine meeldib või ei meeldi.";
        vastus4.style.backgroundColor = "lightgray";
        pilt.src = "";
        return "Pole valitud";
    }
}


// text väli
function tooriistadValik() {
    let vastus5 = document.getElementById("vastus5");
    let tooriistad = document.getElementById("tooriistad").value;

    vastus5.style.backgroundColor = "lightgreen";
    if (tooriistad === "") {
        vastus5.innerHTML = "Palun sisesta tööriistad.";
        return "Pole sisestatud";
    } else {
        vastus5.innerHTML = "Sinu nimetatud tööriistad: " + tooriistad;
        return tooriistad;
    }

}

// select valik
function selectValik() {
    let vastus6 = document.getElementById("vastus6");
    let keel = document.getElementById("keel").value;

    if (keel === "vali") {
        vastus6.innerHTML = "Palun vali programmeerimiskeel.";
    } else {
        vastus6.innerHTML = "Sinu valik: " + keel;
    }
    vastus6.style.backgroundColor = "lightblue";

    if (keel === "vali") {
        return "Pole valitud";
    }
    return keel;
}

// kasutab teisi funktsioone
function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");

    let keeled = checkboxValik();
    let arvamus = textareaValik();
    let tund = numberValik();
    let meeldib = radioValik();
    let tooriistad = tooriistadValik();
    let keel = selectValik();

    vastusKoik.innerHTML =
        "Kokkuvõte<br><br>" +
        "Sinu valitud programmeerimiskeeled: " + keeled + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Tunde nädalas: " + tund + "<br>" +
        "Kas sulle meeldib programmeerida? " + meeldib + "<br>" +
        "Sinu nimetatud tööriistad: " + tooriistad + "<br>" +
        "Sinu valik: " + keel;
}

function puhastaVorm() {
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";

    document.getElementById("vastus1").style.backgroundColor = "";
    document.getElementById("vastus2").style.backgroundColor = "";
    document.getElementById("vastus3").style.backgroundColor = "";
    document.getElementById("vastus4").style.backgroundColor = "";
    document.getElementById("vastus5").style.backgroundColor = "";
    document.getElementById("vastus6").style.backgroundColor = "";

    document.getElementById("meeldibPilt").hidden = true;
}
