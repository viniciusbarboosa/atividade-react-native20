const Sequelize = require('sequelize');
const connection = new Sequelize('barber_time','root','',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = connection;