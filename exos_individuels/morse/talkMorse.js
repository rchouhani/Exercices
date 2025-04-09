import { latinToMorse } from "./latinToMorse.js"
import { morseToLatin } from "./morseToLatin.js"

const test = document.querySelector('#test')
// test.innerText = latinToMorse
// console.log(latinToMorse)

const getLatinCharacterList = (text) => {

    const lettersLatin = text.split('')
    return (lettersLatin)

}


const translateLatinCharacter = (latinLetter) => {
    return (latinToMorse[latinLetter.toUpperCase()])
}


const encode = (latinText) => {
    
    const h = getLatinCharacterList(latinText)
    let m = ""
    for (let i = 0; i < h.length; i++){
        m += translateLatinCharacter(h[i])
    }
    return (m)
}
console.log(encode("romain"))


const getMorseCharacterList = (characterMorse) => {

    const lettersMorse = characterMorse.split(' ')
    return(lettersMorse)

}
// console.log(getMorseCharacterList('..-.'))

const translateMorseCharacter = (morseLetter) => {

    return (morseToLatin[morseLetter])
    
}
// console.log(translateMorseCharacter("..-."))


const decode = (morseText) => {

    const k = getMorseCharacterList(morseText)
    // console.log(k)
    let n = ""
    for (let i = 0; i < k.length; i++){
        if(k[i] === "/" || k[i] === ""){
            n += " "
        } else {
            n += translateMorseCharacter(k[i])

        }
        // console.log(n)
    }
    return (n)
    
}
console.log(decode(" -- --- -- "))