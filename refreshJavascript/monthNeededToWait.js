function getMonthsNeededToWait(month1, month2) {
  const months = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  const index1 = months[month1];
  const index2 = months[month2];

  if (index1 === undefined || index2 === undefined) {
    return "mois invalide";
  }

  const res = (index2 - index1 + 12) % 12;

  return res;
}
console.log(getMonthsNeededToWait("apr", "dec")); // 8
console.log(getMonthsNeededToWait("nov", "feb")); // 3
console.log(getMonthsNeededToWait("dec", "jan")); // 1

export { getMonthsNeededToWait };
