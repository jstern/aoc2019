import { exampleAnswer } from "../../src/days/day0";

describe('exampleAnswer', () => {
    test("returns the answer", () => {
        expect(exampleAnswer()).toEqual("line 1:line 2");
    });
});
