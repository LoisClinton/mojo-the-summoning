const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./index");
const { db } = require("../db/config");

let deck;

beforeAll(async () => {
  //await db.sync({ force: true });
  deck = await Deck.Create({ name: "gandalf", xp: 10 });
});

afterAll(async () => await db.sync({ force: true }));

describe("Deck", () => {
  it("has an id", async () => {
    expect(deck.name).toEqual("gandalf");
  });
});
