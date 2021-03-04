const route=require('express').Router()
const chatController = require('../controller/Chat')

route.get('/chat', chatController.getAlluser)

module.exports=route