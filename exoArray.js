let fruits = ["pomme", "poire", "endives", "mangue", "raisin"]

console.log(fruits.length)

let first = fruits[2]
console.log(`"${first}" est au troisième index du tableau fruits`)

let last = fruits[fruits.length - 1]
console.log(`"${last}" est au dernier index du tableau fruits`)

let newFruit = fruits.push("Clémentine")
console.log(`${fruits[5]} a été rajouté au dernier index`)

let deleteLast = fruits.pop()
console.log(`Clémentine a été supprimé du dernier index`)

let deleteFirst = fruits.shift()
console.log(`Supprime le nom au premier index, pomme`)

let addFirst = fruits.unshift("Red Apple")
console.log(`ajoute ${addFirst} au premier index`)

let pos = fruits.indexOf("endives")
console.log(`${pos} donne la position d'un item`)

let removedItem = fruits.splice(3, 1)
console.log(`à partir de ${removedItem} efface un élément à partir de son index`)

let shollowCopy = fruits.slice(1, 3)
console.log(shollowCopy)

console.log(fruits.length)

console.log(`j'aimerais manger une ${fruits[1]} pour mon dessert ce soir. Je préfère les ${fruits[2]} en salade après le repas. Concrètement les ${fruits[3]} sont meilleurs en été et non importés`)

fruits.forEach(function (item, index, array){
    console.log(item, index)
})
