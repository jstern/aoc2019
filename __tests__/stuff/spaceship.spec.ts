import { Spaceship, SpaceshipModule } from "../../src/stuff/spaceship";


describe("SpaceshipModule", () => {
    describe("fuelRequired", () => {
        test("is calculated correctly", () => {
            const expected = [2, 2, 654, 33583];
            const cases = [12, 14, 1969, 100756];
            const results = cases.map(v => new SpaceshipModule(v).fuelRequired());
            expect(results).toEqual(expected);
        });
    });
});


describe("Spaceship", () => {
    test("can be constructed from strings", () => {
        const s = new Spaceship(["4", "5"]);
        expect(s.modules[0]).toEqual(new SpaceshipModule(4));
    });

    describe("fuelRequired", () => {
        test("is 0 if spaceship has no modules", () => {
            let s = new Spaceship([]);
            expect(s.fuelRequired()).toEqual(0);
        });

        test("is the sum of the fuel required for its modules", () => {
            const expected = [2, 2, 654, 33583].reduce((a, b) => a + b, 0);
            const mods = ["12", "14", "1969", "100756"];
            const ship = new Spaceship(mods)
            expect(ship.fuelRequired()).toEqual(expected);
        });
    });
});
