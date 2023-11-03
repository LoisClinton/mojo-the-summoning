const {db, DataTypes, Model } = require("./db.js");

class Attack extends Model{}

Attack.init({
  title: DataTypes.STRING,
  mojoCost: DataTypes.INTEGER,
  staminaCost: DataTypes.INTEGER,
}, {
  sequelize: db,
  modelName: "Product",
})

module.exports = Attack;