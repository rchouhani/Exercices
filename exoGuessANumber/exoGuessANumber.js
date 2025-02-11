let userNumber = prompt("Dis-moi un chiffre")
let convertNumber = parseInt(userNumber)
let b = boolean(convertNumber)

const didIWin = (b) => {

        if(b == true){
            alert("Vous avez trouvé")
        }

        else{
            alert("tape autre chose")
        }
        return b
}
didIWin(b)

const gamePlay = (b) => {
        while (b != true){
            prompt("tente ta chance")
        }
}
