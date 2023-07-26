const router = require('express').Router()

const carController = require('../Controller/carController')

router.get('/', carController.getAll)
router.post('/create', carController.create)

module.exports = router