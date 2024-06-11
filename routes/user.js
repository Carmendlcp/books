const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);
router.get("/", auth, getUser);

module.exports = router;
