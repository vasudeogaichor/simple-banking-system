const db = require('../../database');

module.exports = async function accountCreateFeature(payload) {
    console.log('payload - ', payload)
    try {
        const validatePayload = await validateAccountPayload(payload);
        const newAccount = await db.accounts.create(validatePayload)
        return newAccount
    } catch (error) {
        throw new Error(error);
    }
}

async function validateAccountPayload({ user_id, type, amount }) {
    if (!(user_id || type || amount)) {
        throw new Error('User id / account type / amount missing')
    }

    if (!await db.users.findByPk(user_id)) {
        throw new Error('User does not exist')
    }

    if (!['withdrawal', 'deposit'].includes(type)) {
        throw new Error('Invalid account type')
    }

    if (!(typeof amount === 'number' && amount > 0)) {
        throw new Error('Amount should be a positive integer')
    }

    return {user_id, type, amount: (amount * 100)}
}