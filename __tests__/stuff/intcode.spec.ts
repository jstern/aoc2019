import { IntcodeComputer }  from "../../src/stuff/intcode";

describe("IntcodeComputer", () => {
    const computer = new IntcodeComputer();

    test("can run programs", () => {
        let program =  "1,9,10,3,2,3,11,0,99,30,40,50";
        let expected = [
            3500,9,10,70,
            2,3,11,0,
            99,
            30,40,50,
        ];
        computer.load(program);
        expect(computer.run()).toEqual(expected);

        program = "1,0,0,0,99";
        expected = [2,0,0,0,99];
        computer.load(program);
        expect(computer.run()).toEqual(expected);

        program = "2,3,0,3,99";
        expected = [2,3,0,6,99];
        computer.load(program);
        expect(computer.run()).toEqual(expected);

        program = "2,4,4,5,99,0";
        expected = [2,4,4,5,99,9801];
        computer.load(program);
        expect(computer.run()).toEqual(expected);

        program = "1,1,1,4,99,5,6,0,99";
        expected = [30,1,1,4,2,5,6,0,99];
        computer.load(program);
        expect(computer.run()).toEqual(expected);
    });
});
