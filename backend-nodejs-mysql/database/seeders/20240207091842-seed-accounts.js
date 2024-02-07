'use strict';

const accountsData = require('./accounts.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const accounts = accountsData.map(account => ({
      ...account,
      amount: account.amount * 100
    }))
    
    await queryInterface.bulkInsert('accounts', accounts)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null)
  }
};
