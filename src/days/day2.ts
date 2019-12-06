import { readLines } from "../util";
import { IntcodeComputer } from "../stuff";

const computer = new IntcodeComputer();

export function answer1(): number {
    computer.load(readLines("day2")[0]);
    computer.data[1] = 12;
    computer.data[2] = 2;
    return computer.run()[0];
}

export function answer2(): number | undefined {
    const input = readLines("day2")[0];

    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            computer.load(input);
            computer.data[1] = noun;
            computer.data[2] = verb;
            const output = computer.run()[0];
            if (output === 19690720) {
                return (100 * noun) + verb;
            }
        }
    }
}

if (process.argv[1] == __filename) {
    console.log(answer1());
    console.log(answer2());
}
