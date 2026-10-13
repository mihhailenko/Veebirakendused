function kohviKalkulaator() {
    let kohviTulemus = document.getElementById("kohviTulemus");
    kohviTulemus.hidden = false;
    let vastus = document.getElementById("vastus3");
    let valik = document.getElementById("kohv");
    let kogus = document.getElementById("kohviKogus").value;
    let nadalavahetus = document.getElementById("nadalavahetus").checked;
    let pilt = document.getElementById("kohviPilt");
    let hind = 0;
    let nimi = "";
    let kirjeldus = "";

    vastus.innerHTML = "";
    vastus.style.color = "black";
    pilt.hidden = true;

    if (valik.selectedIndex === 0) {
        vastus.innerHTML = "Vali kohv, et näha tulemust.";
        return;
    } else if (kogus === "") {
        vastus.innerHTML = "Sisesta tasside arv.";
        return;
    } else if (kogus < 1 || kogus > 20) {
        vastus.innerHTML = "Sisesta arv 1 kuni 20.";
        vastus.style.color = "red";
        return;
    }

    if (valik.selectedIndex === 1) {
        hind = 1.5;
        nimi = "Espresso";
        kirjeldus = "Väike ja kange kohv.";
        pilt.src = "images/espresso.jpg";
        pilt.alt = "Espresso tass";
    } else if (valik.selectedIndex === 2) {
        hind = 2.5;
        nimi = "Cappuccino";
        kirjeldus = "Kohv piima ja piimavahuga.";
        pilt.src = "images/cappuccino.jpg";
        pilt.alt = "Cappuccino tass";
    } else if (valik.selectedIndex === 3) {
        hind = 3;
        nimi = "Latte";
        kirjeldus = "Mahe kohv rohke piimaga.";
        pilt.src = "images/latte.jpg";
        pilt.alt = "Latte klaas";
    }

    // Ilma nädalavahetusteta on 5 päeva * 52 nädalat aastas
    let paeviNadalas = 5;
    let paevadeArv = 260;
    if (nadalavahetus) {
        paeviNadalas = 7;
        paevadeArv = 365;
    }
    let nadalaKogus = kogus * paeviNadalas;
    let aastaKogus = kogus * paevadeArv;
    let aastaKulu = hind * aastaKogus;

    pilt.hidden = false;
    vastus.innerHTML = nimi + ": " + kirjeldus + "<br>";
    vastus.innerHTML += "Ühe tassi hind: " + hind.toFixed(2) + " €<br>";
    vastus.innerHTML += "Tasse nädalas: " + nadalaKogus + "<br>";
    vastus.innerHTML += "Tasse aastas: " + aastaKogus + "<br>";
    vastus.innerHTML += "Aastas kulub kohvile " + aastaKulu.toFixed(2) + " €.";
    vastus.style.color = "saddlebrown";
}
