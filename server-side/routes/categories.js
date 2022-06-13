const router = require('express').Router();
const Controller = require('../controllers/catController');
const authorize = require('../middlewares/authorize');

router.get('/', Controller.getCategories);
router.get('/:id', Controller.getCategoriesId);
router.post('/add', Controller.addCategories);
router.put('/update/:id', authorize, Controller.updateCategories);
router.delete('/delete/:id', authorize, Controller.deleteCategories);

module.exports = router;