function sendMessage(message, fromName, toName){
	console.log("From : " + fromName + " to : " + toName + " Message : " + message) // parenthèse manquante
} //accolade manquante

sendMessage("Je te rends visite la semaine prochaine", "Marc", "Linda");
sendMessage("Super on se voit mardi !", "Linda", "Marc") // retrait des crochets pour mettre des parenthèses

let contactName = "Jean"
let myName = "Ada"
let myMessage = "Je t'apprends à coder tes premières fonctions"

sendMessage(myMessage, myName, contactName ) //les paramètres de la fonction sont à l'envers par rapport au sens normal d'une phrase