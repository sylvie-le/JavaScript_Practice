"use strict";
const calcTip = bill => {
    const tip = (bill <= 300 && bill >= 50) ? 15 / 100 * bill : 20 / 100 * bill;
    return tip;
};
const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const total = bills.map((a, i) => a + tips[i])
console.log(total)