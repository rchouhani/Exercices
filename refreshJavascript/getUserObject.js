function getUserObject(firstName, lastName, age) {
    const name = `${firstName} ${lastName}`
    const year = age
        
    return {name, year}
}

console.log(getUserObject("Jon", "Doe", 52))

export { getUserObject };
