const router = require('express').Router();
const Controller = require('../controllers/itemController');
const authorize = require('../middlewares/authorize');

router.get('/', Controller.getItems);
router.get('/:id', Controller.getItemsId);
router.post('/add', authorize, Controller.addItems);
router.put('/update/:id', authorize, Controller.updateItems);
router.delete('/delete/:id', authorize, Controller.deleteItems);

module.exports = router