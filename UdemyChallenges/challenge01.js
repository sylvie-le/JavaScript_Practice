const maxHeight = [1.69, 1.88];
const johnHeight = [1.95, 1.76];
const maxWeight = [78, 95];
const johnWeight = [92, 85];
const johnBMI = [];
const maxBMI = [];

johnWeight.forEach(function (weight) {
    johnBMI.push(weight / johnHeight.at(johnWeight.indexOf(weight)) ** 2)
});
maxWeight.forEach(function (weight) {
    maxBMI.push(weight / maxHeight.at(maxWeight.indexOf(weight)) ** 2)
});

const maxHigherBMI = [];
maxBMI.forEach(function (mBMI) {
    maxHigherBMI.push(mBMI > johnBMI.at(maxBMI.indexOf(mBMI)))
})

console.log(maxHigherBMI)