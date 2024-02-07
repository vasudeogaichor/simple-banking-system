const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/models');
const userRoutes = require('./routes/users');
const accountRoutes = require('./routes/accounts');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoutes);
app.use('/accounts', accountRoutes);

// Sync database and start server
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
