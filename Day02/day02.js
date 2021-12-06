const fs = require('fs');

function partOne() {
    const input = parseInput();

    let horizontal = 0;
    let depth = 0;

    // Loop through each line of input
    for (const instructions of input) {
        const [direction, units] = instructions.split(" ");
        switch(direction) {
            case "forward":
                horizontal += Number(units);
                break;
            case "down":
                depth += Number(units);
                break;
            case "up":
                depth -= Number(units);
                break;
        }
    }
    return horizontal * depth;
}

function partTwo() {
    const input = parseInput();

    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    for (const instructions of input) {
        const [direction, units] = instructions.split(" ");
        switch(direction) {
            case "forward":
                horizontal += Number(units);
                depth += (aim * Number(units));
                break;
            case "down":
                aim += Number(units);
                break;
            case "up":
                aim -= Number(units);
        }
    }
    return horizontal * depth;
}


// Utility function to get the raw input
function parseInput() {
    const rawInput = fs.readFileSync('./input02.txt', {encoding: 'utf-8'}).split('\n');
    return rawInput;
}

console.log(partOne());
console.log(partTwo());

