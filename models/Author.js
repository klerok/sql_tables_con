const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Author = sequelize.define("Author", {
  name: DataTypes.STRING,
  country: DataTypes.STRING,
});

module.exports = Author;
