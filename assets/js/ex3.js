let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "];


function afficherTableau() {
    const tableau = document.getElementById("prenomTable");
    tableau.innerHTML = ""; 

    for (let i = 0; i < tab.length; i++) {
        const prenom = tab[i];
        const aa = document.createElement("tr");
        const bb = document.createElement("td");
        bb.textContent = prenom;
        aa.appendChild(bb);
        tableau.appendChild(aa);
    }
}
afficherTableau();

function rechercherPrenom() {
    const prenomRecherche = document.getElementById("prenomInput").value;

    const index = tab.indexOf(prenomRecherche);

    if (index !== -1) {
        
        for (let i = index; i < tab.length - 1; i++) {
            tab[i] = tab[i + 1];
        }
        
        tab[tab.length - 1] = " ";
       
        afficherTableau();
    } else {
       
        document.getElementById("resultat").textContent = "Prénom non trouvé. Aucun prénom supprimé.";
    }
}
