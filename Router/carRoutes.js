const router = require('express').Router()

const carController = require('../Controller/carController')

router.post('/createCar', carController.create)
router.get('/logs', carController.getLog)
router.get('/CarsDb', carController.getCars)
router.get('/listCars', carController.getAllCars)

module.exports = router