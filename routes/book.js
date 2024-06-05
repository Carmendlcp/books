const express = require("express");
const router = express.Router();
const { getAllBooks, addBook } = require("../controllers/bookController");
const auth = require("../middleware/auth");

router.get("/", getAllBooks);
router.post("/", auth, addBook);

module.exports = router;
