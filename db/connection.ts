import {Sequelize} from 'sequelize';

const db = new Sequelize('nodejsts', 'mysqluser', 'UM2N4ko4.', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,
});

export default db;