interface FuelComputer {
    (mass: number): number;
}

function naiveFuelRequired(mass: number) {
    const f = Math.floor(mass / 3) - 2;

    // puzzle doesn't require it but assume 0 is the minimum
    return Math.max(f, 0);
}

function advancedFuelRequired(mass: number): number {
    let remainder = naiveFuelRequired(mass);
    let total = remainder;

    while (remainder > 0) {
        remainder = naiveFuelRequired(remainder);
        total += remainder;
    }
    return total;
}


class SpaceshipModule {
    mass: number;
    fuelComputer: FuelComputer;

    constructor(mass: number, fc?: FuelComputer) {
        this.mass = mass;
        this.fuelComputer = fc || naiveFuelRequired;
    };

    fuelRequired(): number {
        return this.fuelComputer(this.mass);
    }
}

class Spaceship {
    modules: SpaceshipModule[];

    constructor(input: string[], fc?: FuelComputer) {
        this.modules = input.map(v => new SpaceshipModule(parseInt(v), fc));
    };

    fuelRequired(): number {
        return this.modules.reduce(
            (t: number, m: SpaceshipModule) => t + m.fuelRequired(), 0);
    };
}

export { SpaceshipModule, Spaceship, advancedFuelRequired };
