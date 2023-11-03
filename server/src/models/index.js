const { User } = require("./User.js");
const { Attack } = require("./Attack.js");
const { Deck } = require("./Deck.js");
const { Card } = require("./Card.js");
// import the rest of your models above

//set up the associations here

// and then export them all below
module.exports = { User, Attack, Deck, Card };
