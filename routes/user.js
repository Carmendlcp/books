const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

//Registro usuario
router.post(
  "/register",
  [
    check("email", "Por favor, escribe un email válido").isEmail(),
    check(
      "password",
      "Por favor, escribe una contraseña de 6 o más caracteres"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

//inicio sesión usuario
router.post(
  "/login",
  [
    check("email", "Por favor, selecciona un email válido").isEmail(),
    check("password", "Contraseña requerida").exists(),
  ],
  loginUser
);

//Obtener info usuario autenticado
router.get("/", auth, getUser);

module.exports = router;
