'use strict';

const bcrypt = require('bcrypt');
const userData = require('./users.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = userData.map(user => ({
      ...user,
      password: bcrypt.hashSync(user.password, 10)
    }));

    await queryInterface.bulkInsert('users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null);
  }
};
