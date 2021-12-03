import ContaTable from "./ContaTable.js";
import Database from "./Database.js";
//para atualizar o banco de dados - atualização assíncrona

Database
    .sync()
    .then( () => console.log('Database sincronizado'))
    .catch(() => console.log('Erro'));
