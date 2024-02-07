const { accountListFeature } = require("../../features/accounts");

async function accountListController(req, res, next) {
    try {
        const result = await accountListFeature(req.query)
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json('Error fetching accounts');
    }
}

module.exports = { accountListController };