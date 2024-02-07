const db = require('../../database');

module.exports = async function accountListFeature(filters) {
    try {
        return await db.Account.findAll();
    } catch (error) {
        throw new Error('Error fetching accounts');
    }
}