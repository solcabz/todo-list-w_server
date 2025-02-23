require('dotenv').config(); // Add this line to load environment variables

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

// Test Connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error connecting to database:', err));

module.exports = sequelize;