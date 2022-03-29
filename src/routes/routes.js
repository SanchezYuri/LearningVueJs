const express = require('express');

const router = express.Router();

//Carros
const CarroController = require('../controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo/update', CarroController.update);
router.delete('/carro/:codigo/delete', CarroController.delete);


//modulo de exportação
module.exports = router;