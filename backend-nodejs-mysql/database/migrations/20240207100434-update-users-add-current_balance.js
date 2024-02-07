'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'current_balance', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      after: 'user_type'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','current_balance')
  }
};
