const router = require('express').Router()

const carController = require('../Controller/carController')

router.get('/listCars', carController.getAll)
router.post('/create', carController.create)

module.exports = router