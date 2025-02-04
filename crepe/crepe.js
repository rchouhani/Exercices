// Crée une fonction preparerPate qui prend en paramètres : farine (en grammes), lait (en ml), oeufs (nombre), sucre (en grammes), Elle doit retourner une phrase indiquant que la pâte est prête.
// 🧪 Exemple console.log(preparerPate(250, 500, 3, 50));
// Doit afficher : Pâte prête avec 100g de farine, 500ml de lait, 3 œufs et 50g de sucre.
// Pour 6 personnes
// Farine : 250 g (2.2 lbs)
// Lait : 50 cl (17.6 oz)
// Œufs : 3 (3)
// Sucre en poudre : 50 g (1.76 oz)

// const textFarine = "Il faudra " 
const textLait = "Ainsi que "
const textOeufs = "puis "
const textSucre = " et enfin "
const quantityFarine = prompt("Indique la quantité de farine en grammes")
const quantityLait = prompt("Indique la quantité de lait en ml")
const quantityOeufs = prompt("Indique la quantité d'oeufs")
const quantitySucre = prompt("Indique la quantité de sucre en grammes")



const farine = (quantityFarine) => {
    if(quantityFarine == 250){
        document.getElementById("farine").innerHTML = "Quantité pour 6 personnes"
    }else if(quantityFarine > 255){
        document.getElementById("farine").innerHTML = "Enlève un peu"
    }else if (quantityFarine < 245){
        document.getElementById("farine").innerHTML = "Encore un peu"
    }else if (quantityFarine === NaN){
        document.getElementById("farine").innerHTML = "Tu dois rentrer un nombre"
    }else{
        document.getElementById("farine").innerHTML = "C'est pas la fete du slip"
    }
    return quantityFarine
}
farine(quantityFarine)



const lait = (quantityLait) => {
    if(quantityLait == 500){
        document.getElementById("lait").innerHTML = "Quantité pour 6 personnes"
    }else if(quantityLait > 510){
        document.getElementById("lait").innerHTML = "Tes crèpes seront parfaites"
    }else if (quantityLait < 490){
        document.getElementById("lait").innerHTML = "Tes crèpes seront un peu plus consistantes"
    }else if(quantityLait === NaN){
        document.getElementById("lait").innerHTML = "Tu dois rentrer un nombre"
    }else{
        document.getElementById("lait").innerHTML = "ca va pas du tout, refais depuis 0"
    }
    return quantityLait
}
lait(quantityLait)



const oeufs = (quantityOeufs) => {
    if(quantityOeufs == 3){
        document.getElementById("oeufs").innerHTML = "Quantité pour 6 personnes"
    }else if(quantityOeufs > 3){
        document.getElementById("oeufs").innerHTML = "Va falloir rajouter de chaque ingrédients"
    }else if(quantityOeufs < 3){
        document.getElementById("oeufs").innerHTML = "Rajoute un oeuf"
    }else if(quantityOeufs === NaN){
        document.getElementById("oeufs").innerHTML = "Tu dois rentrer un nombre"
    }else{
        document.getElementById("oeufs").innerHTML = "Tu fais n'importe quoi"
    }
    return quantityOeufs
}
oeufs(quantityOeufs)
    
const sucre = (quantitySucre) => {
    if(quantitySucre == 50){
        document.getElementById("sucre").innerHTML = "Quantité pour 6 personnes"
    }else if(quantitySucre > 55){
        document.getElementById("sucre").innerHTML = "Calme toi quand même"
    }else if(quantitySucre < 45){
        document.getElementById("sucre").innerHTML = "Tu auras des crèpes diètes, bravo"
    }else if(quantitySucre === NaN){ //ne fonctionne pas car je dois peut-être le convertir, à tester
        document.getElementById("sucre").innerHTML = "Tu dois rentrer un nombre"
    }else{
        document.getElementById("sucre").innerHTML = "T'as rien compris"
    }
    return quantitySucre
}
sucre(quantitySucre)



const nombrePersonne = (guest) => {
    if(guest == 4){
        console.log(`Il faudra donc pour ${guest} personnes, à compter de 3 crèpes par personne : ${quantityFarine * 2}g de farine, ${quantityLait * 2}ml de lait, ${quantityOeufs * 2} oeufs et ${quantitySucre * 2}g de sucre`)
    }else if(guest == 6){
        console.log(`Il faudra donc pour ${guest} personnes, à compter de 3 crèpes par personne : ${quantityFarine * 3}g de farine, ${quantityLait * 3}ml de lait, ${quantityOeufs * 3} oeufs et ${quantitySucre * 3}g de sucre`)
        //quand la quantité dépasse les 1000 il faut faire en sorte de basculer en litre
    }else if(guest > 6){
        console.log(`Il faudra donc pour ${guest} personnes, à compter de 3 crèpes par personne : ${quantityFarine * 5}g de farine, ${quantityLait * 5}ml de lait, ${quantityOeufs * 5} oeufs et ${quantitySucre * 5}g de sucre`)
    }else if(guest < 2){
        console.log(`Il faudra donc pour ${guest} personnes, à compter de 3 crèpes par personne : ${quantityFarine / 2}g de farine, ${quantityLait * 2}ml de lait, ${quantityOeufs * 2} oeufs et ${quantitySucre * 2}g de sucre`)
    }
    else{
        console.log(`${guest} doit être au moins de 1`)
    }
}
nombrePersonne(1)


