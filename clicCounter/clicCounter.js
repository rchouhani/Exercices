const button = document.getElementById('counter')
let count = 0

button.addEventListener('click', clicCount)

function clicCount () {
    document.getElementById("counter").innerHTML = count++
}

const buttonMinus = document.getElementById('myBtn')


buttonMinus.addEventListener('click', countMinus)

function countMinus () {
    document.getElementById('counter').innerHTML = count--
}

// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }