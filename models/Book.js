const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isBorrowed: { type: Boolean, default: false },
  borrowedBy: { type: String },
  currentPage: { type: Number, default: 0 },
});

router.get("/:id", auth, getBookById); // Asegúrate de que la autenticación esté en su lugar

module.exports = mongoose.model("Book", BookSchema);
