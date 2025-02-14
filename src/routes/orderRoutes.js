const express = require('express');
const {
    createOrder,
    getOrders,
    getOrderById,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/', protect, getOrders);
router.get('/:id', protect, getOrderById);

module.exports = router;