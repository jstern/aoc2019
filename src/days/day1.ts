import { readLines } from "../util";
import { Spaceship } from "../stuff";

export function answer1(): number {
    const ship = new Spaceship(readLines("day1"));
    return ship.fuelRequired()
}

if (process.argv[1] == __filename) {
    console.log(answer1());
}
