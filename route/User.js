const route=require('express').Router()
const userController = require('../controller/User')
const searchController = require('../controller/Search')

route.get('/', userController.getAlluser)
route.post('/', userController.addNewuser)
route.get('/:id_name', userController.getUser)
route.patch('/:username', userController.updateUser)
route.get('/:username', searchController.sortByname)
route.delete('/', userController.deleteUser)


module.exports=route