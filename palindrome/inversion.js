const userInput = document.querySelector("#dateString")

userInput.addEventListener('input', function(){
   const inputValue = userInput.value
   console.log("😎😎",inputValue)
   // checkCorrectDate(inputValue)
})

const checkCorrectDate = (c) => {

   const dayInput =  c[0].substr(0, 2)
   // console.log("c[0]",c[0])
   if(dayInput > 30){
      alert('entrez une date valide')
   }
   
   const monthInput = c[0].substr(2, 2)
   if(monthInput > 12){
      alert('Entrez un mois valide')
   } 

   const yearInput = c[0].substr(4, 4)
   if(yearInput < 999 || yearInput > 9999){
      alert('Entrez une année valide')
   }

   let copyC = c[0]
   copyC = copyC.split("")
   inputEndroit = copyC
   let reverseInput = copyC.reverse()

   if(inputEndroit == reverseInput){
      alert("c'est un palindrome")
   } else {
      alert("raté")
   }
}

const isValidDate = (input) => {
   const splitInput = input.split("/")
   checkCorrectDate(splitInput)
}


