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

// const displayIterativeFolder = (param) => {
//     displayFolder(param);
//   for (let i = 0; i < param.contenu.length; i++){

//     if(param.contenu[i].contenu){
//       console.log('📁', param.contenu[i].nom);
//       for (let j = 0; j < param.contenu[i].contenu.length; j++){
//           if(param.contenu[i].contenu[j]){
//             console.log('📁', param.contenu[i].contenu[j].nom)
//           }
      
//         for(let k = 0; k < param.contenu[i].contenu[j].contenu.length; k++){
//             if(param.contenu[i].contenu[j].contenu[k]){
//               console.log('📑', param.contenu[i].contenu[j].contenu[k].nom);
//             }
//         } 
//       }
//     } else {
//       console.log('📑', param.contenu[i].nom)
//     }
//   }
// }
// displayIterativeFolder(dossierPrincipal);



const displayRecursiveFolder = (param) => {
  displayRecursiveFolder()
  // console.log(param.nom)

  // for (let i = 0; i < param.contenu.length; i++){

  //   if(param.contenu[i].contenu !== undefined){
  //     console.log('📁', param.contenu[i].nom);
  //   }
     
  //   if(param.contenu[i].contenu === false){
  //     console.log('📑', param.contenu[i].nom);
  //   }

  }
// }
displayRecursiveFolder(dossierPrincipal);