const express = require('express');
const { protect, admin } = require('../middlewares/auth');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', protect, getUsers);

module.exports = router;