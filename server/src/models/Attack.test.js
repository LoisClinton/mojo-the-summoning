const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require(".");
const {db} = require("../db/config");

afterAll(async () => await db.sync({ force: true }));

describe("Attack",() => {
    beforeAll(async () => {
        console.log('attack');
        await db.sync({ force: true });
        const fight = await Attack.create({ title: "greed pot", mojoCost: 5, staminaCost: 9 });
    });

    test("has an id", async () => {
        expect(fight).toHaveProperty("id");
    });

    test("can update?", async () => {
        const punch = await fight.update({ mojoCost: 7});
        expect(punch.mojoCost).toBe(7);
    })
});