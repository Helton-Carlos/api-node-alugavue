const {Router} = require('express')
const routes =new Router()
const controller = require('../src/app/controllers')
routes.get("/novidades",controller.novidades)
routes.get("/bairros",controller.bairros)
module.exports=routes