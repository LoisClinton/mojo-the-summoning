const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./index.js");
const { db } = require("../db/config");

let deck;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({
    name: "gandalf",
    xp: 10,
  });
});

afterAll(async () => await db.sync({ force: true }));

describe("Deck", () => {
  test("has an a name", async () => {
    expect(deck["name"]).toEqual("gandalf");
  });
});
