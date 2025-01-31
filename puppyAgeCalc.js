const calculateDogAge = (puppysAge, humanAge) => {
    let c = parseInt(humanAge / 7) // permet d'arrondir à l'unité
    console.log(`Your dog has ${puppysAge * 7} in dog's years, which means ${c} in human age`)
}
calculateDogAge(5, 65)
calculateDogAge(12, 56)
calculateDogAge(8, 12)
