const express = require('express');
const { crearColaborador, obtenerColaboradores } = require('../controllers/colaboradorController');
const router = express.Router();

router.post('/', crearColaborador);
router.get('/', obtenerColaboradores);

module.exports = router;
