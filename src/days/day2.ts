import { readLines } from "../util";
import { IntcodeComputer } from "../stuff";

const computer = new IntcodeComputer();

export function answer1(): number {
    computer.load(readLines("day2")[0]);
    computer.data[1] = 12;
    computer.data[2] = 2;
    return computer.run()[0];
}

if (process.argv[1] == __filename) {
    console.log(answer1());
}
