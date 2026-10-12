function teisendamine() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik"); // mitu elementi ühe nimega
    let arv = document.getElementById("arv").value;


    vastus.innerHTML = "";
    vastus.style.color="black";

    const toll = 39.37;
    const meeter = 0.0254;

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