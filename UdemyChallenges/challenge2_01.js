"use strict";
const calcAverage = (scores) => (scores[0] + scores[1] + scores[2]) / 3;

function checkWinner(dolphins, koalas) {
    const avgDolphins = calcAverage(dolphins);
    const avgKoalas = calcAverage(koalas);
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins.`)
    }
}

const dolphins = [85, 54, 41]
const koalas = [23, 34, 27]
checkWinner(dolphins, koalas)