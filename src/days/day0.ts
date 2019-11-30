import { Solution } from "../util";

export class Day0 extends Solution {
        constructor() {
            super("sample");
        }

        compute(lines: string[]): string {
            return lines.join(":");
        }
    };
}
