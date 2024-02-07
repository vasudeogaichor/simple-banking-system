const db = require('../../database');

module.exports = async function accountListFeature(filters) {
    try {
        return await db.accounts.findAll();
    } catch (error) {
        throw new Error(error);
    }
}