const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const { userRouter, accountRouter, authRouter } = require('./routes');
const { verifyToken } = require('./middleware/authMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRouter)
app.use(verifyToken)
app.use('/users', userRouter);
app.use('/accounts', accountRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
