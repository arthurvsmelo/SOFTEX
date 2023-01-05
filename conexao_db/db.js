const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbproduto', 'root', '12345',
{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = componenteSequelize;