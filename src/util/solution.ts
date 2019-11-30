import { readLines } from ".";

export abstract class Solution {
    readonly input: string;

    constructor(input: string) {
        this.input = input;
    };

    abstract compute(input: string[]): string;

    getAnswer(): string {
        return this.compute(readLines(this.input));
    };

    printAnswer(): void {
        console.log(this.getAnswer());
    };
}
