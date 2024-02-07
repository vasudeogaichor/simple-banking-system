// authMiddleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

function verifyToken(req, res, next) {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
        return res.status(401).json({ Error: "Unauthorized - Missing token" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ Error: "Unauthorized - Invalid token" });
        }

        req.user = decoded;
        next();
    });
}

function createNewToken(user) {
    return jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET_KEY,
        { expiresIn: '1h' }
    );
}

module.exports = {
    verifyToken,
    createNewToken
};
