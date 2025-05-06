const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
    },
],
}

const displayFolder = (zucchini) => {
    console.log('📁', zucchini.nom);
}

const displayIterativeFolder = (param) => {
    
    for (const folder of Object.keys(param)){
        console.log('📁', param[folder].nom);
        // console.log(param[folder]);
    }
}
displayFolder(dossierPrincipal);
displayIterativeFolder(dossierPrincipal.contenu);
// displayIterativeFolder(dossierPrincipal.contenu);

// const displayRecursiveFolder = () => {
//     displayRecursiveFolder()
// }




