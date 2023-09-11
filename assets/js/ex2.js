function tabledemultiplication(nombre) {
    document.getElementById('tm').textContent = "La table de multiplication de " + nombre + " est : ";
    
    let tableHTML = "";
    for (let i = 1; i <= 10; i++) {
        const resultat = i * nombre;
        tableHTML += `${nombre} x ${i} = ${resultat}<br>`;
    }

    document.getElementById('tb').innerHTML = tableHTML;
}
const nombreChoisi = prompt("Entrez un nombre pour afficher sa table de multiplication :");

if (!isNaN(nombreChoisi)) {
    tabledemultiplication(nombreChoisi);
} else {
    console.log("Veuillez entrer un nombre valide.");
}