type IntcodeFrame = [number, number, number, number];
type IntcodeStatus = "Continue" | "Halt" | "Error";


class IntcodeInstruction {
    opcode: number;
    arg1: number;
    arg2: number;
    dest: number;

    constructor(frame: IntcodeFrame) {
        this.opcode = frame[0];
        this.arg1 = frame[1];
        this.arg2 = frame[2];
        this.dest = frame[3];
    };

    execute(data: number[]): IntcodeStatus {
        const arg1 = data[this.arg1];
        const arg2 = data[this.arg2];

        switch (this.opcode) {
            case 1:
                data[this.dest] = arg1 + arg2;
                return "Continue";
            case 2:
                data[this.dest] = arg1 * arg2;
                return "Continue";
            case 99:
                return "Halt";
            default:
                return "Error";
        }
    }
}


export class IntcodeComputer {
    data: number[];

    constructor() {
        this.data = [];
    };

    readInstruction(position: number, data: number[]): IntcodeInstruction | null {
        if (position > data.length) {
            return null;
        }
        return new IntcodeInstruction(data.slice(position, position + 4) as IntcodeFrame);
    };

    load(program: string): void {
         this.data = program.split(",").map(x => parseInt(x));
    };

    run(): number[] {
        let position = 0;

        let status: IntcodeStatus = "Continue"
        let instruction: IntcodeInstruction | null = this.readInstruction(position, this.data);

        while (instruction !== null && status === "Continue") {
            status = instruction.execute(this.data);
            position =  position + 4;
            instruction = this.readInstruction(position, this.data);
        }
        return this.data;
    };
}
