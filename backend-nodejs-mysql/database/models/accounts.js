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

	Accounts.associate = models => {
        Accounts.belongsTo(models.users, { foreignKey: 'user_id' });
    };

	// TODO - figure out why it is not working
	// Accounts.afterCreate(async (account, options) => {
    //     // Update user's current_balance based on the amount and type
    //     const user = await account.getUser();
    //     const amount = account.amount;
    //     if (account.type === 'deposit') {
    //         user.current_balance += amount;
    //     } else if (account.type === 'withdrawal') {
    //         user.current_balance -= amount;
    //     }
    //     await user.save();
    // });

	return Accounts
};
