module.exports = (sequelize, DataTypes) => {
	return sequelize.define('accounts', {
		user_id: DataTypes.INTEGER,
		type: DataTypes.ENUM('deposit', 'withdrawal'),
		amount: DataTypes.FLOAT,
		date: DataTypes.DATE,
	}, {
		timestamps: true,
		paranoid: true,
		underscored: true,
	});
};
