const afficherEtoiles = (number) => {
    let n = "";
    for (let i = 1; i <= number; i++){
        n += '*' ;
    }
    console.log(n);
}

const afficherRectangle = (hauteur, largeur) => {
    afficherEtoiles(hauteur);

    let height = "";

    for (let i = 1; i <= largeur; i++){
        height += '*' ;
    }
    console.log(height);
}
afficherRectangle(3, 3)

const afficherTriangleDroite = (largeurSapin) => {
    afficherEtoiles(`${largeurSapin}`);

    let large = "";

    for (let i = 0; i <= largeurSapin; i++){
        large += ''
    }
    console.log(large + "\\");
}
afficherTriangleDroite(10)