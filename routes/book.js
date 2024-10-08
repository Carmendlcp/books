const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  getBookById,
} = require("../controllers/bookController");
const auth = require("../middleware/auth");

router.get("/", getAllBooks);
router.get("/:id", auth, getBookById);
router.post("/", auth, addBook);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

module.exports = router;
