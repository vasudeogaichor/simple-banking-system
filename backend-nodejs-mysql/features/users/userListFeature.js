const db = require('../../database');

module.exports = async function userListFeature(filters, excludePassword = true) {
    try {
        const where = {}

        if (filters.id) {
            where.id = filters.id
        }

        if (filters.username) {
            where.username = filters.username
        }

        const attributes = excludePassword ? { exclude: ['password'] } : {};

        let users = await db.users.findAll({ where, attributes })
        return users;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching users');
    }
};
