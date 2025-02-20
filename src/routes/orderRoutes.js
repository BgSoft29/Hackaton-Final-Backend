const express = require('express');
const {
    createOrder,
    getOrders,
    getOrderById,
} = require('../controllers/orderController');
const { protect, admin } = require('../middlewares/auth');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, admin, getOrders);
router.get('/:id', protect, admin, getOrderById);

module.exports = router;