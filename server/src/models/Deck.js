const { db, DataTypes, Model } = require("../db/config.js");

class Deck extends Model {}

Deck.init(
  {
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "deck",
  }
);

console.log(new Deck());
module.exports = Deck;
