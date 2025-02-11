document.querySelector('h1').innerHTML = "Les recettes de salade"

const newPastaRecipe = (newPasta) =>{
const newLiSummer = document.createElement("ul")
newLiSummer.innerHTML = newPasta
document.getElementById("pastaRecipe").appendChild(newLiSummer)
}
newPastaRecipe("Les pates avec du melon")
newPastaRecipe("Les pates au jambon")

const newRiceRecipe = (newRice) =>{
    const newUl = document.createElement("ul")
    newUl.innerHTML = newRice
    document.getElementById("riceRecipe").appendChild(newUl)
}
newRiceRecipe("Le riz à l'avocat")
newRiceRecipe("Le riz au crabe")

