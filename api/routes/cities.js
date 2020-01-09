const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const citiesController = require('../controller/cities')
/*

Lista de cidades
Lista de cidades que possuem um clima disponível com a informação do clima
Visualizar uma cidade X com o seu clima
Visualizar uma cidade X com o seu clima e filtrar o clima em um range de tempo Ex. (2017-03-12 até 2017-03-21)
*/

router.get('/cities', citiesController.get_all);
router.get('/cities/weather', citiesController.buscar_id);
router.post('/cities', citiesController.salvar);
router.put('/cities/:id', citiesController.atualizar);
router.delete('/cities/:id', citiesController.remover);




module.exports = router;