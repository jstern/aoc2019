class SpaceshipModule {
    mass: number;

    constructor(mass: number) {
        this.mass = mass;
    };

    fuelRequired(): number {
        const f = Math.floor(this.mass / 3) - 2;

        // puzzle doesn't require it but assume 0 is the minimum
        return Math.max(f, 0);
    };
}

class Spaceship {
    modules: SpaceshipModule[];

    constructor(input: string[]) {
        this.modules = input.map(v => new SpaceshipModule(parseInt(v)));
    };

    fuelRequired(): number {
        return this.modules.reduce(
            (t: number, m: SpaceshipModule) => t + m.fuelRequired(), 0);
    };
}

export { SpaceshipModule, Spaceship };
