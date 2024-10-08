const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String },
  coverImage: { type: String },
  synopsis: { type: String },
  rating: { type: Number },
  isBorrowed: { type: Boolean, default: false },
  borrowedBy: { type: String },
  currentPage: { type: Number },
  publicationDate: { type: Date },
  pageCount: { type: Number },
  review: { type: String },
});

module.exports = mongoose.model("Book", BookSchema);
