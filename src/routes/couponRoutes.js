const express = require("express");
const { protect, admin } = require("../middlewares/auth");
const {
    getCoupons,
    getCouponById,
    createCoupon,
    updateCoupon,
    deleteCoupon,
} = require("../controllers/couponController");

const router = express.Router();

router.get('/', protect, admin, getCoupons);
router.post('/', protect, admin, createCoupon);
router.post('/:id', protect, admin, getCouponById);
router.put('/:id', protect, admin, updateCoupon);
router.delete('/:id', protect, admin, deleteCoupon);

module.exports = router;