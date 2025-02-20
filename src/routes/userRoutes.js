const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getUsers);
router.put('/profile', protect, updateUser);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;