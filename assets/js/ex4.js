function calculerPrix() {
    const prixUnitaire = parseFloat(document.getElementById("prixUnitaire").value);
    const quantiteCommandee = parseInt(document.getElementById("quantiteCommandee").value);

    if (isNaN(prixUnitaire) || isNaN(quantiteCommandee)) {
        alert("Veuillez entrer des valeurs numériques valides.");
        return;
    }

    const TOT = prixUnitaire * quantiteCommandee;
    let REM = 0;
    let PORT = 0;

    if (TOT >= 100 && TOT <= 200) {
        REM = TOT * 0.05; 
    } else if (TOT > 200) {
        REM = TOT * 0.10;
    }

    const totalRemise = TOT - REM;

    if (totalRemise <= 500) {
        PORT = Math.max(6, totalRemise * 0.02);
    }

    const PAP = totalRemise + PORT;

    const resultatRemise = `Remise : ${REM.toFixed(2)} €`;
    const resultatPort = `Frais de port : ${PORT.toFixed(2)} €`;
    const resultatTotal = `Prix à payer : ${PAP.toFixed(2)} €`;

    document.getElementById("resultatRemise").textContent = resultatRemise;
    document.getElementById("resultatPort").textContent = resultatPort;
    document.getElementById("resultatTotal").textContent = resultatTotal;
}