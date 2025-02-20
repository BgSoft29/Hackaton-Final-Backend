const Coupon = require("../models/couponModel");

// Obtener todos los cupones
const getCoupons = async (req, res) => {
    const coupons = await Coupon.find({});
    res.json(coupons);
};

// Obtener un cupón por ID
const getCouponById = async (req, res) => {
    const coupon = await Coupon.findById(req.params.id);
    if (coupon) {
        res.json(coupon);
    } else {
        res.status(404).json({ message: "Coupon not found" });
    }
};

// Crear un nuevo cupón
const createCoupon = async (req, res) => {
    const { code, discount, expirationDate } = req.body;
    const coupon = new Coupon({
        code,
        discount,
        expirationDate,
    });
    const createdCoupon = await coupon.save();
    res.status(201).json(createdCoupon);
};

// Actualizar un cupón
const updateCoupon = async (req, res) => {
    const { code, discount, expirationDate, isActive } = req.body;
    const coupon = await Coupon.findById(req.params.id);

    if (coupon) {
        coupon.code = code || coupon.code;
        coupon.discount = discount || coupon.discount;
        coupon.expirationDate = expirationDate || coupon.expirationDate;
        coupon.isActive = isActive !== undefined ? isActive : coupon.isActive;

        const updatedCoupon = await coupon.save();
        res.json(updatedCoupon);
    } else {
        res.status(404).json({ message: "Coupon not found" });
    }
};

// Eliminar un cupón
const deleteCoupon = async (req, res) => {
    const coupon = await Coupon.findById(req.params.id);

    if (coupon) {
        await coupon.remove();
        res.json({ message: "Coupon removed" });
    } else {
        res.status(404).json({ message: "Coupon not found" });
    }
};

module.exports = {
    getCoupons,
    getCouponById,
    createCoupon,
    updateCoupon,
    deleteCoupon,
};