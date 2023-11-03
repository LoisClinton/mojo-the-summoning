// create your User model here
const { db, DataTypes, Model } = require("../db/config.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  },
  { freezeTableName: true }
);

console.log(User);
module.exports = {User};
