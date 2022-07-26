const express=require('express');
const Sequelize = require ('sequelize');

const app=express();
const port=8844;

const connection = new Sequelize('db', 'user', 'pass', {
    host:'localhost',
    dialect: 'sqlite',
    storage: 'db.sqlite',
    operatorsAliases: false
})

const User=connection.define('User', {
    name: Sequelize.STRING,
    bio: Sequelize.TEXT,
    newField: Sequelize.STRING,
})
connection.sync({
    logging: console.log, //opcional
    force: true //recria a tabela, caso já existe

}).then(() => {
    console.log('Sucesso na conexao!');
    User.create({
        name: 'Thiago',
        bio: 'nova entrada'
    })
}).catch(err => {
    console.log('Erro na conexao');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})