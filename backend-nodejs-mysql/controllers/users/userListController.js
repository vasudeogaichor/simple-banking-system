const { userListFeature } = require("../../features/users")

async function userListController(req, res, next) {
    try {
        const result = await userListFeature(req.query);
        res.status(200).json(result);
        console.log('result - ', result);
    } catch (error) {
        console.error(error);
        res.status(500).json('Error fetching user list');
    }
}

module.exports = {userListController};