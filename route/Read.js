const route=require('express').Router()
const readController = require('../controller/Read')

route.get('/read', readController.getAlluser)

module.exports=route