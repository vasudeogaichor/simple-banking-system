const { accountListFeature } = require("../../features/accounts");
const { accountCreateFeature } = require("../../features/accounts");

async function accountListController(req, res, next) {
    try {
        const result = await accountListFeature(req.query)
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

async function accountCreateController(req, res, next) {
    try {
        const result = await accountCreateFeature(req.body)
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }
}

module.exports = { accountListController, accountCreateController };