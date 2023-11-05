const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require(".");
const {db} = require("../db/config");

let card;

afterAll(async () => await db.sync({ force: true }));

describe("Card",() => {
    beforeAll(async () => {
        console.log('cat');
        await db.sync({ force: true });
        card = await Card.create({ name: "greed pot" });
    });

    test("has an id", async () => {
        expect(card).toHaveProperty("id");
    });

    test("Create Card", async () => {
        const newCard = await Card.create({name: 'Cat', mojo: 3,stamina: 2,imgUrl: 'https://th.bing.com/th/id/R.4be8a04fed0ec1f5d148598d107ad647?rik=SWIGHOff%2ftjfKA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f68%2fOrange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg&ehk=0Q3OweHLh0H%2bNUvty2TEIaCTXgMt1Th98C%2fSbzoBTlQ%3d&risl=1&pid=ImgRaw&r=0'});
        expect(newCard.name).toBe('Cat');
    });

    test("Create Card part 2", async () => {
        const card2 = await Card.create({name: 'Dog', mojo: 2,stamina: 3,imgUrl: 'https://th.bing.com/th/id/R.4be8a04fed0ec1f5d148598d107ad647?rik=SWIGHOff%2ftjfKA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f68%2fOrange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg&ehk=0Q3OweHLh0H%2bNUvty2TEIaCTXgMt1Th98C%2fSbzoBTlQ%3d&risl=1&pid=ImgRaw&r=0'});
        expect(card2.mojo).toBe(2);
    })
    
    test("Can delete Card", async () => {
        const cardPotato = await Card.create({name: 'Dino', mojo: 6,stamina: 1,imgUrl: 'https://th.bing.com/th/id/R.4be8a04fed0ec1f5d148598d107ad647?rik=SWIGHOff%2ftjfKA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f6%2f68%2fOrange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg&ehk=0Q3OweHLh0H%2bNUvty2TEIaCTXgMt1Th98C%2fSbzoBTlQ%3d&risl=1&pid=ImgRaw&r=0'});
        await cardPotato.update({name: 'dinosaur'});
        expect(cardPotato.name).toBe('dinosaur');
    })
});

