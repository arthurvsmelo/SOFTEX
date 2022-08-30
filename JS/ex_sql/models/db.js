const Sequelize = require('sequelize');
const sequelize = new Sequelize("database", "user", "passw", {host: 'localhost', dialect: 'mysql'});
module.exports = sequelize;

try{
    sequelize.authenticate();
    console.log("Conexão com banco de dados realizada com sucesso! ");
    }
catch(error){
    console.error("Erro na conexão com banco de dados! ", error);
};