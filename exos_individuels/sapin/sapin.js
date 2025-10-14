const afficherEtoiles = (number) => {
    let n = '';
    for (let i = 1; i <= number; i++){
        n += '*' ;
    }
    return(n);
}
// afficherEtoiles(5)

const afficherPointeSapin = (hauteur) => {
    console.log('  +')
    let h = '';
    for (let i = 1; i <= hauteur; i++){
       h += '';
    }
    console.log(h)
}
// afficherPointeSapin(1)

const afficherRectangle = (hauteur, largeur) => {
    
    let h = '';
    let l = '';

    for (let i = 1; i <= hauteur; i++){
        h += afficherEtoiles(hauteur);
    }
    console.log(h);

    for(let j = 1; j <= largeur; j++){
        l += afficherEtoiles(largeur);
    }
    console.log(l);
}
afficherRectangle(4, 6)