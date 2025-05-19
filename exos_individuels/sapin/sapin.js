const afficherEtoiles = (number) => {
    let n = '';
    for (let i = 1; i <= number; i++){
        n += '*' ;
    }
    console.log(n);
}


const afficherPointeSapin = (hauteur) => {
    console.log('  +')
    let h = '';
    for (let i = 1; i <= hauteur; i++){
       h += '';
    }
    console.log(h)
    return
}
afficherPointeSapin(1)

const afficherRectangle = (hauteur, largeur) => {
    
    let height = '';
    let large = '';

    for (let i = 1; i <= hauteur; i++){
        height = afficherEtoiles(hauteur);
    }
    console.log(height);

    for(let j = 1; j <= largeur; j++){
        large += afficherEtoiles(largeur);
    }
    console.log(large);
}
afficherRectangle(2, 3)
