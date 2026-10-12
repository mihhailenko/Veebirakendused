function joogiKalkulaator() {
    let vastus = document.getElementById("vastus2");
    let valik = document.getElementById("joogid"); // mitu elementi ühe nimega
    let kogus = document.getElementById("kogus").value;
    const coke = 1.0;
    const monster = 0.99;
    const redbull = 0.99;


    if (valik.selectedIndex === 1) {
        vastus.innerHTML = kogus + " Coca-Cola hind on: " + (kogus * coke).toFixed(2) + " €";
        vastus.style.color = "green";
    } else if (valik.selectedIndex === 2) {
        vastus.innerHTML = kogus + " Monster hind on: " + (kogus * monster).toFixed(2) + " €";
        vastus.style.color = "blue";
    } else if (valik.selectedIndex === 3) {
        vastus.innerHTML = kogus + " Red Bull hind on: " + (kogus * redbull).toFixed(2) + " €";
        vastus.style.color = "orange";
    } else if (valik.selectedIndex === 4) {
        vastus.innerHTML = kogus + " Vesi on tasuta!";
        vastus.style.color = "lightblue";
    }
}