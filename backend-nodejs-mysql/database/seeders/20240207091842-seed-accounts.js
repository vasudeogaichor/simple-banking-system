'use strict';

const db = require('../');
const accountsData = require('./accounts.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const accounts = accountsData.map(account => ({
      ...account,
      amount: account.amount * 100
    }))

    for (const account of accounts) {
      await db.accounts.create(account);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('accounts', null)
  }
};
