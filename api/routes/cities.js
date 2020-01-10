const express = require('express');
const router = express.Router();
const citiesController = require('../controller/cities')

router.get('/cities', citiesController.get_all);
router.get('/cities/weather', citiesController.get_all_weather);
router.get('/cities/:id', citiesController.get_by_id);

module.exports = router;