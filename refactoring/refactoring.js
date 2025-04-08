function addition(arrayValues) {
    let number = 0
    if (!Array.isArray(arrayValues)){
        return ("😁😁Erreur: Vous devez passer un tableau de nombre")
    } 
    else {
        if(Number.isInteger(arrayValues)){
        return ("🙄🙄Erreur: Vous devez passer un tableau de nombre")
        } else {
        for (let i = 0; i < arrayValues.length; i++) {
            number += arrayValues[i]
        }
        }
    }
    return number
}

console.log(addition([1, 2, 3, 4])); // Devrait retourner 10
console.log(addition([1, 2])); // Devrait retourner 3
console.log(addition([0])); // Devrait retourner 0
console.log(addition([1, 0])) // Devrait retourner 1

console.log(addition([1, "Haha"])) // Devrait retourner 1
console.log(addition()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(addition("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"