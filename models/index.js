const Author = require("./Author");
const Book = require("./Book");

Author.hasMany(Book, {
  foreignKey: "authorId",
  as: "books",
});

Book.belongsTo(Author, {
  foreignKey: "authorId",
  as: "author",
});

module.exports = { Author, Book };
