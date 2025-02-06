// let i = 0
// while(i < 3){
//     console.log("Bonjour" + i)
//     i++
// }

// for(let i = 0; i < 3; i++){
//     console.log("Au revoir" + i)
// }





const a = (d) =>{
    const region = [95, 93, 92, 91, 75, 77, 94]
    for (let d in region){
        console.log("Dans la région Ile-De-France, il y a le ", region[d])
    } 
}
a(95)

const nomDepartement = (n) => {
    const nameDept = ["Val d'oise", "Seine Saint-Denis", "Hauts de Seine", "Essonne", "Paris", "Seine et Marne", "Val de Marne"]

    for (let nom in nameDept){
        console.log("qui correspondent à : ", nameDept[nom])
    }
}
nomDepartement()