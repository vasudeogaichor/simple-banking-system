const { Sequelize, DataTypes } = require("sequelize");
import * as dotenv from "dotenv";

dotenv.config();

const connectionUrl = `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`;

const sequelize = new Sequelize(connectionUrl, {
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	define: {
		freezeTableName: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: "deleted_at",
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Database connected successfully.");
	})
	.catch((err) => {
		console.error(err);
	});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./models/users")(sequelize, DataTypes);
db.accounts = require("./models/accounts")(sequelize, DataTypes);

module.exports = db