import { readLines }  from "../src/util";
import { Solution } from "../src/util";

describe('readLines', () => {
    test('returns array of strings from file', () => {
        expect(readLines("sample")).toEqual(["line 1", "line 2"]);
    });
});

describe('Solution', () => {
    class Day99 extends Solution {
        constructor() {
            super("sample");
        }

        compute(lines: string[]): string {
            return lines.join(":");
        }
    };

    describe("getAnswer", () => {
        test("passes input to compute method and return result", () => {
            let solution = new Day99();
            expect(solution.getAnswer()).toEqual("line 1:line 2");
        });
    });
});
