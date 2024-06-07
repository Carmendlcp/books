const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const auth = require("../middleware/auth");

router.get("/", getAllBooks);
router.post("/", auth, addBook);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

module.exports = router;
