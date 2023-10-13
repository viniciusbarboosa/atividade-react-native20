const Sequelize = require('sequelize');
const connection = require('../../database/database')

const User = connection.define('User', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo_user: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  User.sync({ force: false })
  .then(() => {
      console.log("Tabela Criada");
  })

module.exports = User