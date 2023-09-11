let moinsDe20Ans = 0;
let entre20Et40Ans = 0;
let plusDe40Ans = 0;
let centenaires = 0;

function compterAge() {
    const age = parseInt(document.getElementById("ageInput").value);

    if (isNaN(age)) {
        alert("Veuillez entrer un âge valide.");
        return;
    }

    if (age === 100) {
        centenaires++;
    } else if (age < 20) {
        moinsDe20Ans++;
    } else if (age >= 20 && age <= 40) {
        entre20Et40Ans++;
    } else {
        plusDe40Ans++;
    }


    document.getElementById("moinsDe20Ans").textContent = moinsDe20Ans;
    document.getElementById("entre20Et40Ans").textContent = entre20Et40Ans;
    document.getElementById("plusDe40Ans").textContent = plusDe40Ans;
    document.getElementById("centenaires").textContent = centenaires;
    

    document.getElementById("ageInput").value = "";

    if (age === 100) {
        alert("Saisie d'un centenaire. Le comptage est terminé.");
    }
}

function reinitialiserCompteurs() {
    moinsDe20Ans = 0;
    entre20Et40Ans = 0;
    plusDe40Ans = 0;
    centenaires = 0;

    document.getElementById("moinsDe20Ans").textContent = moinsDe20Ans;
    document.getElementById("entre20Et40Ans").textContent = entre20Et40Ans;
    document.getElementById("plusDe40Ans").textContent = plusDe40Ans;
    document.getElementById("centenaires").textContent = centenaires;
}

