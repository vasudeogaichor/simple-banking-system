const bcrypt = require("bcrypt");
const { userListFeature } = require("../../features/users")
const {createNewToken} = require('../../middleware/authMiddleware')

async function authController(req, res, next) {
    try {

        if ((!req.body.password?.length) || (!req.body.username?.length)) {
            res.status(400).json('Error: Username and Password required')
            return
        }

        let user = await userListFeature({ username: req.body.username }, false)
        if (!user.length) {
            res.status(400).json('Error: Invalid username')
            return;
        }
        user = user[0].dataValues

        const password = req.body.password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        delete user['password']
        if (isPasswordValid) {
            const token = createNewToken(user);
            res.status(200).json({
                token: token,
                user
            })
        } else {
            res.status(400).json('Error: Username/password mismatch')
        }

    } catch (error) {
        console.log(error)
        res.status(400).json()
    }
}

module.exports = {
    authController
}