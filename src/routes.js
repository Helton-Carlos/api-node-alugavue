const {Router} = require('express')
const routes =new Router()
const controller = require('../src/app/controllers')
routes.get("/novidades",controller.novidades)
module.exports=routes