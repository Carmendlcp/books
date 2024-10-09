const Book = require("../models/Book");

//Obtener todos los libros

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

//Añadir un libro nuevo

const addBook = async (req, res) => {
  const {
    title,
    author,
    category,
    coverImage,
    synopsis,
    isBorrowed,
    borrowedBy,
    currentPage,
    publicationDate,
    pageCount,
    review,
  } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      category,
      coverImage,
      synopsis,
      isBorrowed,
      borrowedBy,
      currentPage,
      publicationDate: new Date(publicationDate),
      pageCount: parseInt(pageCount, 10),
      review,
    });
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Actualizar un libro
const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, isBorrowed, borrowedBy, currentPage } = req.body;
  try {
    let book = await Book.findById(id);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    book.title = title || book.title;
    book.author = author || book.author;
    book.isBorrowed = isBorrowed !== undefined ? isBorrowed : book.isBorrowed;
    book.borrowedBy = borrowedBy || book.borrowedBy;
    book.currentPage = currentPage || book.currentPage;

    await book.save();
    res.json(book);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Eliminar un libro
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    let book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ msg: "Book not found" });

    res.json({ msg: "Book removed" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

// Obtener detalles de un libro por ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ msg: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBookById,
};
