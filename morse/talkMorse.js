import { latinToMorse } from "./latinToMorse.js"
import { morseToLatin } from "./morseToLatin.js"

const test = document.querySelector('#test')
// test.innerText = latinToMorse
// console.log(latinToMorse)

const getLatinCharacterList = (text) => {
    // for (let i = 0; i < text.length; i++)
    const letters = text.split('')
    console.log(letters)
}
getLatinCharacterList("hello")


const translateLatinCharacter = (letter) => {
for(const s in latinToMorse) {
    console.log(`😁😁${s}: ${latinToMorse[s]}`)
}
console.log('(❁´◡`❁)', letter)
}
translateLatinCharacter("")


// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
