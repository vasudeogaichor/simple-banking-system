const db = require('../../database');

module.exports = async function userGetFeature(id) {
    try {
        return await db.users.findByPk(id)
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching user');
    }
};
