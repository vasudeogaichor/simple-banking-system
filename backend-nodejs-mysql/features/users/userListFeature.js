const db = require('../../database');

module.exports = async function userListFeature(filters) {
    try {
        let users = await db.users.findAll({ attributes: { exclude: ['password'] } })
        return users;
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching users');
    }
};
