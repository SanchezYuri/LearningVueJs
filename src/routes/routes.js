const express = require('express');
const mysql = require('mysql');

const router = express.Router();

router.get('/', async (req, res)=>{
    res.send('hello');
})


//Carros
const CarroController = require('../controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo/update', CarroController.update);
router.post('/carro/:codigo/delete', CarroController.delete);


//modulo de exportação
module.exports = router;