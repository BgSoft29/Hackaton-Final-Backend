const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

// Obtener el carrito del usuario
const getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.product");
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).json({ message: "Cart not found" });
    }
};

// Agregar un producto al carrito
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
        const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
    } else {
        cart = new Cart({
            user: req.user._id,
            items: [{ product: productId, quantity }],
        });
    }

    const updatedCart = await cart.save();
    res.status(201).json(updatedCart);
};

// Eliminar un producto del carrito
const removeFromCart = async (req, res) => {
    const { productId } = req.body;
    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
        cart.items = cart.items.filter((item) => item.product.toString() !== productId);
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } else {
        res.status(404).json({ message: "Cart not found" });
    }
};

// Vaciar el carrito
const clearCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
        cart.items = [];
        const updatedCart = await cart.save();
        res.json(updatedCart);
    } else {
        res.status(404).json({ message: "Cart not found" });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    clearCart,
};