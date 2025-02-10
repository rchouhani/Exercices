document.querySelectorAll('li').innerText = "li"
const newOL = document.createElement("ol")
newOL.innerHTML = "Les recettes d'hiver"
document.getElementById("intro").appendChild(newOL)

const newOLspring = document.createElement("ol")
newOLspring.innerHTML = "Les recettes de printemps"
document.getElementById("christmas").appendChild(newOLspring)

const newOLAutumn = document.createElement("ol")
newOLAutumn.innerHTML = "Les recettes d'Automne"
document.getElementById("pates").appendChild(newOLAutumn)

const newOLSummer = document.createElement("ol")
newOLSummer.innerHTML = "Les recettes d'été"
document.getElementById("kings").appendChild(newOLSummer)

