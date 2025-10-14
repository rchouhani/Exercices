function lastNRevert(text, n) {
    const lastN = text.slice(-n);
    console.log(lastN);
    let reversedString = "";

    for (let i = lastN.length - 1; i >=0; i--) {
        reversedString += lastN[i];
    }
    return reversedString;
}
console.log(lastNRevert("padetsolki", 3));

export { lastNRevert };