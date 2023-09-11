document.addEventListener("DOMContentLoaded", function () {
    const formulaire = document.getElementById("form1");
    formulaire.addEventListener("submit", function (e) {
  
  
      const nom = document.getElementById("nom").value;
      const erreurNom = document.getElementById("erreurNom");
      if (!nom.match(/^[A-Za-z\s]+$/)) {
        erreurNom.textContent = "Le nom doit contenir uniquement des lettres et des espaces.";
        return;
      } else {
        erreurNom.textContent = "";
      }

      const prenom = document.getElementById("prenom").value;
      const erreurPrenom = document.getElementById("erreurPrenom");
      if (!prenom.match(/^[A-Za-z\s]+$/)) {
        erreurPrenom.textContent = "Le prénom doit contenir uniquement des lettres et des espaces.";
        return;
      } else {
        erreurPrenom.textContent = "";
      }
  
      const email = document.getElementById("email").value;
      const erreurEmail = document.getElementById("erreurEmail");
      if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        erreurEmail.textContent = "L'adresse email n'est pas valide.";
        return;
      } else {
        erreurEmail.textContent = "";
      }
      const cp = document.getElementById("cp").value;
      const erreurCp = document.getElementById("erreurCp");
      if (!cp.match(/^[0-9]+$/)) {
        erreurCp.textContent = "Le Code Postal doit contenir uniquement des chiffres.";
        return;
      } else {
        erreurCp.textContent = "";
      }
  

      formulaire.submit();
    });
  });
  