const abonne = (estAbonne) => {
  if (estAbonne == true) {
    return `Statut : Abonné`;
  } else {
    return `Statut : Non abonné`;
  }
}

const categories = (age) => {
  if (age < 18) {
    return (`Catégorie : Jeune`);
  } else if (age >= 18 && age < 60) {
    return (`Catégorie : Adulte`);
  } else {
    return (`Catégorie : Senior`);
  }
}

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) { 
    let rapport = 

    `Rapport Utilisateur : 
    Nom : ${nom}, 
    Age : ${age}, 
    Ville : ${ville}, 
    Profession : ${profession}
    ${categories(age)}
    ${abonne(estAbonne)}`;
    
    return rapport;
}

console.log(genererRapportUtilisateur("Chouhani", 45, "Montmorency", "vendeur", false))