let text =""
const languages = [`Ola`, `Bonjour`, `Buon Giorno`, `Buenas Dias`, `Ciao`, `Good Morning`, `Bon Matin`, `Bom Dia`, `Assalam Alaykoum`, `Ni Hao`, `Ohayou`, `Selamat Pagi`, `Zdravstvuyte`, `Privet`, `Dobryj den’`]
const person = [`Sergio`, `Jean`, `Tommaso`, `Daniela`, `Colombina`, `James`, `Julien`, `Joao`, `Marine`, `Romain`, `Kao`, `Mathis`, `Sergueï`, `Vladimir`, `Güt` ]
languages.forEach(hello)

document.getElementById("demo").innerHTML = text
 
function hello(index, item) {
    text += index + `: ${person}` + "<br>"

}