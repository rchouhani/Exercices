
const age = document.querySelector('#age')
const money = document.querySelector('#money')
const sendBtn = document.querySelector('#sendBtn')
const divMessage = document.querySelector('#message')
const newParagraph = document.createElement('p')


sendBtn.addEventListener("click", (event) => { 
    event.preventDefault
    doBuy(age, money)


// if(money.checked){
//     console.log("j'ai de l'argent")
//     divMessage.innerText = `J'ai ${age.value} ans J'ai argent`
// } else {
//     console.log("j'ai pas d'argent")
//     divMessage.innerText = `J'ai ${age.value} ans J'ai pas argent`
// }


})

const doBuy = (age, money) => {

    // if(money.checked){
    //     divMessage.innerText = `J'ai ${age.value} ans et de l'argent`
    // } else {
    //     divMessage.innerText = `J'ai ${age.value} ans et pas d'argent`
    // }

    if (age >= 18) {
        
        newParagraph.innerText = "tu dois voter"
        if (money.checked) {
            newParagraph.innerText = "Bravo, tu as assez d'argent tu peux boire de l\'alcool"
        } else {
            newParagraph.innerText = "Tu vas devoir le voler ton alcool"
            newParagraph.innerText = "Tu dois quand même voter"
        }
    }    
    else {
        newParagraph.innerText = 'Tu ne peux pas voter'
    }
        newParagraph.innerText = "Tu peux boire de l\'eau aussi"
}





