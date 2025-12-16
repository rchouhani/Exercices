function lastNRevert(text, n) {
    const lastN = text.slice(0, -n);
    console.log(lastN);
    let reversedString = "";

    for (let i = lastN.length - 1; i >=0; i--) {
        reversedString += lastN[i];
    }
    return reversedString;
}
console.log(lastNRevert("BOLDROSA", 3));

export { lastNRevert };