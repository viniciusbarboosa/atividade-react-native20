const express = require('express');
const route = express.Router();
const usersController = require('./controllers/UserController');

//LOGIN
route.post("/logar",usersController.singIn);

module.exports = route;