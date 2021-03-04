const route=require('express').Router()
const searchController = require('../controller/Search')

route.get('/:name', searchController.sortByname)

module.exports=route