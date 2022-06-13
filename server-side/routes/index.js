const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const categoryRouter = require('./categories');
const itemRouter = require('./items');
const menuRouter = require('./menus');
const auth = require('../middlewares/authen');

router.use('/user', userRouter);
router.use('/categories', auth, categoryRouter);
router.use('/items', auth, itemRouter);
router.use('/menus', menuRouter)

module.exports = router