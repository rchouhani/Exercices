// Crée une fonction preparerPate qui prend en paramètres : farine (en grammes), lait (en ml), oeufs (nombre), sucre (en grammes), Elle doit retourner une phrase indiquant que la pâte est prête.
// 🧪 Exemple console.log(preparerPate(250, 500, 3, 50));
// Doit afficher : Pâte prête avec 100g de farine, 500ml de lait, 3 œufs et 50g de sucre.
// Pour 6 personnes
// Farine : 250 g (2.2 lbs)
// Lait : 50 cl (17.6 oz)
// Œufs : 3 (3)
// Sucre en poudre : 50 g (1.76 oz)

let textFarine = "Il faudra " 
let textLait = "Ainsi que "
let textOeufs = "puis "
let textSucre = " et enfin "
const quantityFarine = prompt("Indique la quantité de farine en grammes")
const quantityLait = prompt("Indique la quantité de lait en ml")
const quantityOeufs = prompt("Indique la quantité d'oeufs")
const quantitySucre = prompt("Indique la quantité de sucre en grammes")



const preparerPate = (quantityFarine, quantityLait, quantityOeufs, quantitySucre) => {
    if(quantityFarine > 250){
        console.log("Tu as mis trop de Farine")
    }

    if(quantityLait > 500){
        console.log("Tu as mis trop de lait")
    }

    if(quantityOeufs > 3){
        console.log("Tu as mis trop d'oeufs")
    }
    
    if(quantitySucre > 50){
        console.log("Tu as mis trop de sucre")
    }
        
    console.log(`Les enfants!!, 😋 la pate est prête pour les crèpes 😋, nous y avons mis ${quantityFarine}g de farine, ${quantityLait}ml de lait, ${quantityOeufs} oeufs et ${quantitySucre}g de sucre`)
    return(quantityFarine, quantityLait, quantityOeufs, quantitySucre)
}


preparerPate(quantityFarine, quantityLait, quantityOeufs, quantitySucre)
document.getElementById("farine").innerHTML = textFarine + " " + quantityFarine + " " + "g de farine"
document.getElementById("lait").innerHTML = textLait + " " + quantityLait + " " + "ml de lait"
document.getElementById("oeufs").innerHTML = textOeufs + " " + quantityOeufs + " " + "oeufs"
document.getElementById("sucre").innerHTML = textSucre + " " + quantitySucre + " " + "g de sucre"





// const nombrePersonne = (guest) => {
//     if(guest === 12){
//         console.log(quantityFarine *= 2, quantityLait *= 2, quantityOeufs *= 2, quantitySucre *= 2)
//     }else{
//         console.log(`Tant pis 😒, n'invite que 6 personnes`)
//     }
// }
// nombrePersonne(12)

