const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT,

    migrationStorage: 'sequelize',
    migrationStorageTableName: '__migrations',

    seederStorage: 'sequelize',
    seederStorageTableName: '__seeds',
  },
  // add configs for other envs
  test: {
  },
  production: {
  }
}