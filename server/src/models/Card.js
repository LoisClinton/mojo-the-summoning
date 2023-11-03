const {db, DataTypes, Model } = require("./db.js");

class Card extends Model{}

Card.init({
  name: DataTypes.STRING,
  mojo: DataTypes.INTEGER,
  stamina: DataTypes.INTEGER,
  imgUrl: DataTypes.STRING,
}, {
  sequelize: db,
  modelName: "Product",
})

module.exports = Card;