import { Sequelize } from "sequelize";
import Database from "./Database.js";

const ClienteTable = Database.define('cliente', {
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    numero:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    agencia:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    saldo:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }
});

export default ClienteTable;