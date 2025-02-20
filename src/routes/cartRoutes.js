const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
    getCart,
    addToCart,
    removeFromCart,
    clearCart,
} = require("../controllers/cartController");

const router = express.Router();

router.route("/")
    .get(protect, getCart) // Obtener el carrito del usuario autenticado
    .post(protect, addToCart) // Agregar un producto al carrito del usuario autenticado
    .delete(protect, clearCart); // Vaciar el carrito del usuario autenticado

router.route("/remove")
    .post(protect, removeFromCart); // Eliminar un producto del carrito del usuario autenticado

module.exports = router;