const Coupon = require('../models/couponModel');

exports.createCoupon = async (req, res) => {
    const { code, discount, expirationDate } = req.body;

    try {
        const couponExists = await Coupon.findOne({ code });

        if (couponExists) {
            return res.status(400).json({ message: 'Coupon code already exists' });
        }

        const coupon = new Coupon({
            code,
            discount,
            expirationDate,
        });

        const createdCoupon = await coupon.save();
        res.status(201).json(createdCoupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json(coupons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCouponById = async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);

        if (!coupon) {
            return res.status(404).json({ message: 'Coupon not found' });
        }

        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCoupon = async (req, res) => {
    const { code, discount, expirationDate, isActive } = req.body;

    try {
        const coupon = await Coupon.findById(req.params.id);

        if (!coupon) {
            return res.status(404).json({ message: 'Coupon not found' });
        }

        coupon.code = code || coupon.code;
        coupon.discount = discount || coupon.discount;
        coupon.expirationDate = expirationDate || coupon.expirationDate;
        coupon.isActive = isActive !== undefined ? isActive : coupon.isActive;

        const updatedCoupon = await coupon.save();
        res.json(updatedCoupon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCoupon = async (req, res) => {
    try {
        const coupon = await Coupon.findById(req.params.id);

        if (!coupon) {
            return res.status(404).json({ message: 'Coupon not found' });
        }

        await Coupon.deleteOne({ _id: req.params.id });
        res.json({ message: 'Coupon removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};