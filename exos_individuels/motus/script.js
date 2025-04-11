// Les lettres qui apparaissent dans notInWord ne doivent pas apparaître dans missplaced.
// La méthode .filter() est une piste à essayer. Elle permet de retirer un élément d'un tableau
// si la lettre est présente dans le tableau arraybase, elle est présente dans wellPlaced
// si la lettre est absente du tableau arraybase, elle est présente uniquement dans missPlaced

//
const guess = document.querySelector('button');

function tryWord(word, base) {
  console.log('🪷🪷');
  // TODO: fix jeu sensible à la casse.
  if (word === base) {
    return true;
  } else {

    let wellPlaced = [];
    let notInWord = [];
    let missPlaced = [];

    let arrayBase = base.split("");
    let arrayWord = word.split("");

    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else {
        missPlaced.push(arrayWord[i]);
      }
    }

    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char);
      }
    }

    return {
      wellPlaced: wellPlaced,
      missPlaced: missPlaced,
      notInWord: notInWord,
    };
  }
}

guess.addEventListener("click", function() {
    let base = "dictionnaire";
    let baseArray = base.split("")
    let word = document.getElementById("word").value;
    let wordLower = word.toLowerCase();
    let result = tryWord(wordLower, base);

    document.getElementById("word").value = "";
    document.getElementById("try").innerText = wordLower;
    document.getElementById("well").innerText = "Bien placé: " + result.wellPlaced.join(", ");
    document.getElementById("miss").innerText = "Mal placé: " + result.missPlaced.join(", ");
    document.getElementById("not").innerText = "Pas dans le mot: " + result.notInWord.join(", ");
    
    if (result.wellPlaced.length === baseArray.length){
      document.getElementById("win").innerText = "Vous avez gagné";
    }
});