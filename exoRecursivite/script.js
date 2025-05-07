const dossierPrincipal = {
    nom: 'Ada',
    contenu: 
      [
        {
          nom: 'Projets collectifs Ada',
          contenu: 
            [
              {
                nom: 'Pico8',
                contenu: 
                  [
                    {
                      nom: 'mariokart.p8'
                    }
                  ]
              },
              {
                nom: 'Dataviz',
                contenu: 
                  [
                    {
                      nom: 'index.html'
                    },
                    {
                      nom: 'script.js'
                    }
                  ]
              }
            ]
        },
        {
          nom: 'CV.pdf'
        },
        {
          nom: 'Projets persos',
          contenu: 
            [
              {
              nom: 'Portfolio',
              contenu: 
                [
                  {
                    nom: 'index.html'
                  },
                  {
                    nom: 'script.js'
                  }
                ]
              }
            ]
        },
      ],
}

const displayFolder = (zucchini) => {
    console.log('📁', zucchini.nom);
}

const displayIterativeFolder = (param) => {
    displayFolder(param);
  for (let i = 0; i < param.contenu.length; i++){

    if(param.contenu[i].contenu){
      console.log('📁', param.contenu[i].nom);
      for (let j = 0; j < param.contenu[i].contenu.length; j++){
        // console.log(param.contenu[i].contenu[j].nom)
        if(param.contenu[i].contenu[j]){
          console.log('📁', param.contenu[i].contenu[j].nom)
        }
      }

    } else {
      console.log('📑', param.contenu[i].nom)
    }
  }
}
displayIterativeFolder(dossierPrincipal);
// console.log(dossierPrincipal.contenu[1].nom);
console.log(dossierPrincipal.contenu);
// console.log('⚽', dossierPrincipal.contenu[2].contenu[0]);


// const displayRecursiveFolder = (param) => {
//   for (let i = 0; i < param.contenu.length; i++){

//     if(param.contenu[i].contenu !== undefined){
//       console.log('📁', param.contenu[i].nom);
//     }
     
//     if(param.contenu[i].contenu === undefined){
//       console.log('📑', param.contenu[i].nom);
//     }

//   }
// }
// displayRecursiveFolder(dossierPrincipal);