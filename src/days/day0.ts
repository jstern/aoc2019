import { readLines } from "../util";

export function exampleAnswer(): string {
    const input = readLines("sample");
    return input.join(":");
}

if (process.argv[1] == __filename) {
    console.log(exampleAnswer());
}
