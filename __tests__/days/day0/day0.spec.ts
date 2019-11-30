import from "../src/days";

describe('Day0', () => {
    describe("getAnswer", () => {
        test("returns the answer", () => {
            let solution = new Day0();
            expect(solution.getAnswer()).toEqual("line 1:line 2");
        });
    });
});
