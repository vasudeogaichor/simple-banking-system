const { userListFeature } = require("../../features/users")

async function userListController(req, res, next) {
    try {
        if (!(req.user.userType === 'banker')) {
            res.status(401).json(`Error: Invalid access`)
            return;
        }
        const result = await userListFeature(req.query);
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json('Error fetching user list');
    }
}

module.exports = { userListController };