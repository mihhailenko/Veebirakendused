// raamatu objekt
let raamat = {
    pealkiri: "Kuidas saada miljonäriks",
    autor: "Artjom",
    aasta: 2025,

    kuvaKirjeldus() {
        let vastus1 = document.getElementById("vastus1");
        let tekst = this.pealkiri + " - " + this.autor + " (" + this.aasta + ")";
        vastus1.innerHTML = tekst;
        console.log(tekst);
    },

    muudaAasta() {
        let vastus2 = document.getElementById("vastus2");
        let uusAasta = document.getElementById("uusAasta").value;

        this.aasta = uusAasta;
        vastus2.innerHTML = "Uus väljaandmise aasta: " + this.aasta;
        console.log("Uus väljaandmise aasta: " + this.aasta);
        this.kuvaKirjeldus();
    }
};

// raamatukogu objekt
let raamatukogu = {
    raamatud: [
        { pealkiri: "Esimene seiklus", autor: "Mari Maasikas", aasta: 1998 },
        { pealkiri: "Vaikne mets", autor: "Jaan Tamm", aasta: 2000 },
        { pealkiri: "Uus algus", autor: "Kati Kask", aasta: 2015 }
    ],

    kuvaRaamatud() {
        let vastus3 = document.getElementById("vastus3");
        vastus3.innerHTML = "";
        console.log("Raamatukogu raamatud:");

        for (let i = 0; i < this.raamatud.length; i++) {
            let r = this.raamatud[i];
            let tekst = r.pealkiri + " - " + r.autor + " (" + r.aasta + ")";
            vastus3.innerHTML += tekst + "<br>";
            console.log(tekst);
        }
    },

    lisaRaamat() {
        let vastus4 = document.getElementById("vastus4");
        let pealkiri = document.getElementById("pealkiri").value;
        let autor = document.getElementById("autor").value;
        let aasta = document.getElementById("aasta").value;

        if (pealkiri === "" || autor === "" || aasta === "") {
            vastus4.innerHTML = "Täida kõik raamatu andmed.";
            console.log("Täida kõik raamatu andmed.");
            return;
        }

        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        let tekst = "Lisatud: " + pealkiri + " - " + autor + " (" + aasta + ")";
        vastus4.innerHTML = tekst;
        console.log(tekst);
        document.getElementById("vastus7").innerHTML = "";
        this.kuvaRaamatud();
        this.raamatuteArv();
        this.parast2000();
    },

    raamatuteArv() {
        let vastus5 = document.getElementById("vastus5");
        let tekst = "Raamatuid kokku: " + this.raamatud.length;
        vastus5.innerHTML = tekst;
        console.log(tekst);
    },

    parast2000() {
        let vastus6 = document.getElementById("vastus6");
        let arv = 0;

        for (let i = 0; i < this.raamatud.length; i++) {
            if (this.raamatud[i].aasta > 2000) {
                arv++;
            }
        }

        let tekst = "Pärast 2000. aastat ilmunud raamatuid: " + arv;
        vastus6.innerHTML = tekst;
        console.log(tekst);
    },

    // minu meetod otsib raamatu pealkirja järgi
    otsiRaamat() {
        let vastus7 = document.getElementById("vastus7");
        let pealkiri = document.getElementById("otsing").value;

        for (let i = 0; i < this.raamatud.length; i++) {
            let r = this.raamatud[i];
            if (r.pealkiri.toLowerCase() === pealkiri.toLowerCase()) {
                let tekst = "Leitud: " + r.pealkiri + " - " + r.autor + " (" + r.aasta + ")";
                vastus7.innerHTML = tekst;
                console.log(tekst);
                return;
            }
        }

        vastus7.innerHTML = "Raamatut ei leitud.";
        console.log("Raamatut ei leitud.");
    }
};
