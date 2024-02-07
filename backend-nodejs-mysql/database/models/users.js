module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    user_type: DataTypes.ENUM('customer', 'banker'),
    account_opened_date: DataTypes.DATEONLY,
  }, {
    timestamps: true,
    paranoid: true,
    underscored: true,
  });
};