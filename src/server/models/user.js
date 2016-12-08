const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

