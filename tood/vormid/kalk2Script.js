function joogiKalkulaator() {
    let joogiTulemus = document.getElementById("joogiTulemus");
    joogiTulemus.hidden = false;
    let vastus = document.getElementById("vastus2");
    let valik = document.getElementById("joogid");
    let kogus = document.getElementById("kogus").value;
    let pilt = document.getElementById("joogiPilt");
    const coke = 1.0;
    const monster = 0.99;
    const redbull = 0.99;

    if (valik.selectedIndex === 0) {
        vastus.innerHTML = "Vali jook.";
        vastus.style.color = "black";
        pilt.hidden = true;
        return;
    }

    pilt.hidden = false;

    if (valik.selectedIndex === 1) {
        pilt.src = "images/coca.png";
        pilt.alt = "Coca Cola";
        vastus.innerHTML = kogus + " Coca-Cola hind on: " + (kogus * coke).toFixed(2) + " €";
        vastus.style.color = "green";
    } else if (valik.selectedIndex === 2) {
        pilt.src = "images/monster.png";
        pilt.alt = "Monster";
        vastus.innerHTML = kogus + " Monster hind on: " + (kogus * monster).toFixed(2) + " €";
        vastus.style.color = "blue";
    } else if (valik.selectedIndex === 3) {
        pilt.src = "images/redbull.jpg";
        pilt.alt = "Red Bull";
        vastus.innerHTML = kogus + " Red Bull hind on: " + (kogus * redbull).toFixed(2) + " €";
        vastus.style.color = "orange";
    } else if (valik.selectedIndex === 4) {
        pilt.src = "images/vesi.jpg";
        pilt.alt = "Veepudel";
        vastus.innerHTML = kogus + " tk vett maksab kokku 0,00 €. Vesi on tasuta!";
        vastus.style.color = "blue";
    }
}
