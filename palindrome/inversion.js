// const isDayValid = (day) => {
//     if(day <= 0 || day > 31){
//         return false
//     }
// }

// const isMonthValid = (month) => {
//     if(month <= 0 || month >= 13){
//         return false
//     }
// }

// const isYearValid = (year) => {
//     if(year <= 999 || year >= 10000){
//         return false
//     }
// }

// const isValidDate = (day, month, year) => {
//     if(isDayValid(day) === false){
//         console.log('le jour doit être entre 0 et 31, tu as tapé: ', day)
//         return false
//     } else if (isMonthValid(month) === false) {
//         console.log('le mois doit être entre 1 et 12, tu as tapé: ', month)
//         return false
//     } else if(isYearValid(year) === false){
//         console.log('l\'année doit être entre 999 et 9999, tu as tapé: ', year)
//         return false
//     } else {
//         console.log(`Bravo tu as donné une date correcte : ${day}/${month}/${year}`)
//         return `${day}/${month}/${year}`, true
//     } 
// }

// const isPalindrome = (day, month, year) => {
//     // console.log('uocuoc', isValidDate(day, month, year))
//     const goodDate = isValidDate(day, month, year)
//     if(goodDate === true){
//         const r = goodDate
//         console.log('uocuoc')
//     }
// }

const isValidDate = (date) => {
   const r = (new Date()) 
   if(date !== r){
        console.log('pas ok', r)
   } else {
        console.log('ok')
   }
}
isValidDate('11/03/2026')

