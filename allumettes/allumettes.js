// Étape 4
// Rajouter un 2eme joueur à votre jeu.

// Étape 5
// Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.

// Étape 6
// Libre à vous de faire une interface graphique à votre goût !

const matchesRemovingInput = document.querySelector("#matchesRemovingInput")
const message = document.querySelector("p")
const validBtn = document.querySelector("#validBtn")
validBtn.setAttribute("disabled", "")
const validBtn2 = document.querySelector("#validBtn2")
validBtn2.setAttribute("disabled", "")
const matchesRemovingInput2 = document.querySelector("#matchesRemovingInput2")
let countStartOfMatches = 50
let newCountMatches = countStartOfMatches
message.innerText = "Vous allez jouer au jeu des allumettes, le joueur qui prend la dernière allumette a perdu"


const turnPlayer =  (matchesRemovingInput, matchesRemovingInput2) => {
    if(matchesRemovingInput.value !== 0){
        console.log("👌👌👌", matchesRemovingInput)
        validBtn2.removeAttribute("disabled")
    } 
    if(matchesRemovingInput2.value !== 0){
        console.log("🤞🤞", matchesRemovingInput2)
        validBtn.removeAttribute("disabled")
    }
}
turnPlayer(matchesRemovingInput, matchesRemovingInput2)

const removeMatch = (matchesToRemove, matchesToRemove2) => {

newCountMatches = (newCountMatches - matchesToRemove) || (newCountMatches - matchesToRemove2)
   
        if(matchesToRemove < 1 
           || matchesToRemove > 6 
           || matchesToRemove2 < 1 
           || matchesToRemove2 > 6){
            message.innerText = `Vous avez retiré ${matchesToRemove || matchesToRemove2} allumette, le chiffre doit être entre 1 et 6.`
        } else {        
            message.innerText = `Vous avez retiré ${matchesToRemove || matchesToRemove2} allumette.`
        }

        winnerOrLoser(newCountMatches)

}

const winnerOrLoser = (newCountMatches) => {
   if(newCountMatches < 1){
    message.innerText = `You lose, il reste ${newCountMatches}`
   }
}

// const randomValue = (reponseRandom) => {
//     if (reponseRandom < 50 || reponseRandom > 100){
//         console.log("le chiffre doit être entre 50 et 100, retente ton coup")
//     }
// }

// const entierAleatoire = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

validBtn.addEventListener("click", () =>{
    let reponse = matchesRemovingInput.value
    // console.log("reponse", reponse)
    removeMatch(reponse)
    matchesRemovingInput.value = ""
})

validBtn2.addEventListener("click", () =>{
    let reponse2 = matchesRemovingInput2.value
    // console.log("reponse2", reponse2)
    removeMatch(reponse2)
    matchesRemovingInput2.value = ""
})


// randomBtn.addEventListener("click", () =>{

//     let reponseInput = startOfMatchesRandomInput.value
//     console.log("reponse input", reponseInput)
//     let randomAddition = entierAleatoire(0, 50)
//     console.log("randomAddition", randomAddition)
//     let reponseRandom = parseInt(reponseInput) + randomAddition
//     console.log("reponseRandom", reponseRandom)

//     randomValue(reponseRandom)

// })