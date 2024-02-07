module.exports = (sequelize, DataTypes) => {
	const Accounts = sequelize.define('accounts', {
		user_id: DataTypes.INTEGER,
		type: DataTypes.ENUM('deposit', 'withdrawal'),
		amount: DataTypes.INTEGER,
		date: DataTypes.DATE,
	}, {
		timestamps: true,
		paranoid: true,
		underscored: true,
	});

	return Accounts
};
