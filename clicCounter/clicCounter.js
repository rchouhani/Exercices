const b = document.getElementById('counter')
let count = 0

b.addEventListener("click", clicCount)

function clicCount (){
    document.getElementById("counter").innerHTML = b++
}

// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }