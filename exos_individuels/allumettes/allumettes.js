const message = document.querySelector("p")
const validBtn = document.querySelector("#validBtn")
const validBtn2 = document.querySelector("#validBtn2")
validBtn2.setAttribute("disabled", "")
const matchesRemovingInput = document.querySelector("#matchesRemovingInput")
const matchesRemovingInput2 = document.querySelector("#matchesRemovingInput2")

let countStartOfMatches = 50
let newCountMatches = countStartOfMatches
message.innerText = "Vous allez jouer au jeu des allumettes, le joueur qui prend la dernière allumette a perdu"



const removeMatch = (matchesToRemove, matchesToRemove2) => {

    if(matchesToRemove < 1 
        || matchesToRemove > 6 
        || matchesToRemove2 < 1 
        || matchesToRemove2 > 6){
         message.innerText = `Vous avez retiré ${matchesToRemove || matchesToRemove2} allumette, le chiffre doit être entre 1 et 6.`
     } else {       
         message.innerText = `Vous avez retiré ${matchesToRemove || matchesToRemove2} allumette.`
            newCountMatches = (newCountMatches - matchesToRemove) || (newCountMatches - matchesToRemove2)
            console.log("newCountMatches", newCountMatches)
            winnerOrLoser(newCountMatches)
     }
}

const winnerOrLoser = (newCountMatches) => {
   if(newCountMatches < 1){
    message.innerText = `You lose, il reste ${newCountMatches}`
   }
}

validBtn.addEventListener("click", () =>{
    let reponse = matchesRemovingInput.value
    removeMatch(reponse)
    matchesRemovingInput.value = ""
    validBtn.setAttribute("disabled", "")
    validBtn2.removeAttribute("disabled")
})

validBtn2.addEventListener("click", () =>{

    validBtn2.setAttribute("disabled", "")
    let reponse2 = matchesRemovingInput2.value
    removeMatch(reponse2)
    matchesRemovingInput2.value = ""
    validBtn2.setAttribute("disabled", "")
    validBtn.removeAttribute("disabled")

})