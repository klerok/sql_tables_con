const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Book = sequelize.define("Book", {
  title: DataTypes.STRING,
  year: DataTypes.INTEGER,
  genre: DataTypes.STRING,
});

module.exports = Book;
