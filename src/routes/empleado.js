const express =require('express');
const router = express.Router();

const empleadoController = require('../controllers/EmpleadoController');

router.get('/', empleadoController.list) ;
router.post('/add', empleadoController.save);
router.get('/delete/:id', empleadoController.delete);

module.exports = router;

