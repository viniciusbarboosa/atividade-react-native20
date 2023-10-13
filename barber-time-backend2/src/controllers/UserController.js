const User = require('../models/UsuarioModel');

exports.singIn = (req,res) =>{
    console.log('funciona');
    res.status(200).json({ message: 'OK' });
}