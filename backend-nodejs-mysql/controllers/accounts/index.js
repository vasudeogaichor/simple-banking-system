const { accountListFeature } = require("../../features/accounts");
const { accountCreateFeature } = require("../../features/accounts");

async function accountListController(req, res, next) {
    try {
        if (req.user.userType == 'customer' && req.user.userId != req.query?.user_id) {
            res.status(401).json({ Error: 'Invalid access' })
            return;
        } else {
            const result = await accountListFeature(req.query)
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ Error: error.message });
    }
}

async function accountCreateController(req, res, next) {
    try {
        if (req.user.userId !== req.body.user_id) {
            res.status(401).json({ Error: 'Invalid access' })
            return;
        }
        const result = await accountCreateFeature(req.body)
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(400).json({ Error: error.message });
    }
}

module.exports = { accountListController, accountCreateController };