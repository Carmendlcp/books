const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const addBook = async (req, res) => {
  const { title, author } = req.body;
  try {
    const newBook = new Book({ title, author });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// more functions for updating, deleting, etc.

module.exports = { getAllBooks, addBook };
