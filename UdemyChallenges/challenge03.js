/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
*/

const case1 = [[96, 108, 89], [88, 91, 110]];
const case2 = [[97, 112, 101], [109, 95, 123]];
const case3 = [[97, 112, 101], [109, 95, 106]];

// Replace the case below at mainCase to test
const mainCase = case3;

let averageScores = [];
mainCase.forEach(function (scores) {
    averageScores.push(scores.reduce((partialSum, a) => partialSum + a, 0) / 3)
});

if (averageScores[0] > averageScores[1] && averageScores[0] >= 100) {
    console.log(`Dolphins wins`);
} else if (averageScores[0] < averageScores[1] && averageScores[1] >= 100) {
    console.log(`Koalas wins`);
} else if (averageScores[0] === averageScores[1] && averageScores[0] >= 100) {
    console.log(`It's a draw`);
} else {
    console.log(`No one wins`)
}