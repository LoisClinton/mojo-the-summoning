// create your User model here
const { db, DataTypes, Model } = require("./db.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
  },
  {
    sequalize: db,
    modelName: "user",
  }
);

module.exports = User;
