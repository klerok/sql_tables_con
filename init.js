const sequelize = require("./database");
const { Author, Book } = require("./models");

async function init() {
  try {
    await sequelize.sync({ force: true });
    console.log("Таблицы синхронизированы.");

    const tolstoy = await Author.create({
      name: "Lev Tolstoy",
      country: "Russia",
    });

    const orwell = await Author.create({
      name: "George Orwell",
      country: "United Kingdom",
    });

    await tolstoy.createBook({
      title: "War and Peace",
      year: 1869,
      genre: "Novel",
    });

    await orwell.createBook({
      title: "1984",
      year: 1949,
      genre: "Dystopia",
    });

    const animalFarm = await Book.create({
      title: "Animal Farm",
      year: 1945,
      genre: "Satire",
    });

    await orwell.addBook(animalFarm);

    const authorsWithBooks = await Author.findAll({
      include: [
        {
          model: Book,
          as: "books",
        },
      ],
    });

    console.log(JSON.stringify(authorsWithBooks, null, 2));
  } catch (error) {
    console.error("Ошибка:", error);
  } finally {
    await sequelize.close();
  }
}

init();
