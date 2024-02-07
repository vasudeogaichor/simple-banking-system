const db = require('../../database');

module.exports = async function userListFeature(filters) {
    try {
        return await db.users.findAll();
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching users');
    }
}
