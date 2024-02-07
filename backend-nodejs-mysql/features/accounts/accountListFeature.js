const db = require('../../database');

module.exports = async function accountListFeature(filters) {
    try {
        const where = {}

        if (filters.user_id) {
            where.user_id = filters.user_id
        }
        
        return await db.accounts.findAll({ where });
    } catch (error) {
        throw new Error(error);
    }
}