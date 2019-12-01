import { readLines } from "../util";
import { Spaceship, advancedFuelRequired } from "../stuff";

export function answer1(): number {
    const ship = new Spaceship(readLines("day1"));
    return ship.fuelRequired()
}

export function answer2(): number {
    const ship = new Spaceship(readLines("day1"), advancedFuelRequired);
    return ship.fuelRequired()
}

if (process.argv[1] == __filename) {
    console.log(answer1());
    console.log(answer2());
}
