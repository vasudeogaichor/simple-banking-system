'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.ENUM(['deposit', 'withdrawal']),
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('accounts')
  }
};
