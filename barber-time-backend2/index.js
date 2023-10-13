const express = require('express');
const app = express();
const connection = require('./database/database.js');
const bodyParser = require('body-parser');
const routes = require('./src/router.js');

//Conexao com Banco
connection
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes);


app.listen(3000,(err)=>{
    if(err){
        console.log("Erro No Servidor");
    }else{
        console.log("SERVIDOR RODANDO");
    }
});