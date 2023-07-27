const router = require('express').Router()

const carController = require('../Controller/carController')

router.get('/listCars', carController.getAll)
router.post('/create', carController.create)
router.get('/logs', carController.getLog)

module.exports = router