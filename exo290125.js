// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let a1 = 10
let a2 = 20
// Nous calculons le total
let tot = a1 + a2
// Prix d'un troisieme article
let a3 = 50
// Nous ajoutons a3 au total
let tot2 = tot + a3

console.log("Le prix total avant reduction est de : ", tot)
console.log("Le prix total après reduction est de : ", tot2)

//Nous appliquons 20% de reduction
let tot3 = tot2 - (tot2*0.2)
console.log("Le prix total avec application de la réduction de 20% est de : ", tot3)