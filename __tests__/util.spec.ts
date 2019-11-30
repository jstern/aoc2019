import { readLines }  from "../src/util";

describe('readLines', () => {
    test('returns array of strings from file', () => {
        expect(readLines("sample")).toEqual(["line 1", "line 2"]);
    });
});
