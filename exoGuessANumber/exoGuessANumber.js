const givenNumber = prompt("Dis-moi un chiffre")
const convertBool = parseInt(givenNumber)

const didIWin = (convertBool) => {
        if(convertBool == 22){
            return(true)
        }
        else{
            return(false)
        }
}
didIWin(convertBool)


const gamePlay = (didIWin) => {
do{
    if(didIWin === true){
        prompt("on arrete le jeu")
    }
    else{
        prompt("essaie encore")
    }
    // return didIWin()
}while (didIWin != true)
    
}
gamePlay(didIWin)