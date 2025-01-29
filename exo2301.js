function wakeUp(hour){
    if(hour == 7 ){
        console.log("Wake up, Wakie, Wakie, Time to get up, make your bed, take a breakfast")
    }else if(hour >= 23){
        console.log("Il est l'heure de dormir")
    }else{
        console.log("Le chiffre donné doit etre entre 0 et 24")
    }
    }
wakeUp(12)