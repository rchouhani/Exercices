const horoscope = [
    {
      sign: 'Bélier',
      description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
      sign: 'Taureau',
      description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
      sign: 'Gémeaux',
      description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
      sign: 'Cancer',
      description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
  ];
  
  const horoscopeElement = document.querySelector('#horoscope')
  
  for (const item of horoscope) {

  const newArticle = document.createElement('article')

  const newH2 = document.createElement('h2')
  newH2.innerText = item.sign
  newH2.style.textDecoration = 'underline red'


  const newParagraph = document.createElement('p')
  newParagraph.setAttribute('id', 'horo')
  newParagraph.innerText = item.description
  newParagraph.style.color = 'red'


  const newBr = document.createElement('br')
  newBr.innerText = "<br>"

  
  const newImg = new Image ()
  newImg.src = "signe_zodiac.jpg"
  newImg.style.width = '100px', newImg.style.height = "100px"


  
  newArticle.appendChild(newH2)
  newArticle.appendChild(newImg)
  newArticle.appendChild(newParagraph)
  newArticle.appendChild(newBr)


  horoscopeElement.appendChild(newArticle)
  }
  