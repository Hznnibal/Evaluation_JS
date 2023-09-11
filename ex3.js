// Tableau de prénoms
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", " "];

// Fonction pour afficher le tableau sur la page web
function afficherTableau() {
    const tableau = document.getElementById("prenomTable");
    tableau.innerHTML = ""; // Effacer le contenu actuel du tableau

    for (let i = 0; i < tab.length; i++) {
        const prenom = tab[i];
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.textContent = prenom;
        row.appendChild(cell);
        tableau.appendChild(row);
    }
}

// Appeler la fonction pour afficher le tableau initial
afficherTableau();

// Fonction pour rechercher et éliminer le prénom
function rechercherPrenom() {
    const prenomRecherche = document.getElementById("prenomInput").value;

    // Vérification si le prénom est présent dans le tableau
    const index = tab.indexOf(prenomRecherche);

    if (index !== -1) {
        // Éliminer le prénom en décalant les cases suivantes
        for (let i = index; i < tab.length - 1; i++) {
            tab[i] = tab[i + 1];
        }

        // Mettre à blanc la dernière case
        tab[tab.length - 1] = " ";

        // Afficher le tableau mis à jour sur la page web
        afficherTableau();
    } else {
        // Prénom non trouvé, afficher un message d'erreur
        document.getElementById("resultat").textContent = "Prénom non trouvé. Aucun prénom supprimé.";
    }
}
