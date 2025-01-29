// Ecris une fonction addition3Numbers() qui affichera la somme de 1 + 2 + 3 dans la console. Objectif : Voir dans la console : “Le résultat de la somme est 6”
// Ecris une nouvelle fonction addition3NumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres mais cette fois-ci à partir de 3 arguments.
// Déclarer 3 variables qui prennent chacune une valeur de votre choix. Passez ces variables à la fonction addition3NumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.
// Appelez addition3NumbersWithArg() 3 fois avec des valeurs d’argument différentes. Objectif : Voir dans la console : “Le résultat de la somme est X ”
//  “Le résultat de la somme est Y” “Le résultat de la somme est Z”
function addition3Numbers(chiffre1, chiffre2, chiffre3){
    const sum = 1 + 2 + 3
    console.log(`Le résultat de l'opéraion est ${sum}`)
}
addition3Numbers()



function addition3NumbersWithArg(chiffre1, chiffre2, chiffre3){
    const sum = chiffre1 + chiffre2 +  chiffre3
    console.log(`Le résultat de la somme est ${sum}`)
}
addition3NumbersWithArg(25, 25, 50)
addition3NumbersWithArg(35, 35, 70)
addition3NumbersWithArg(18, 36, 72)