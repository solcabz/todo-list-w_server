require('dotenv').config(); // Add this line to load environment variables
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

const Task = require('./Task')(sequelize, Sequelize.DataTypes);
const User = require('./User')(sequelize, Sequelize.DataTypes);

const models = {
  Task,
  User,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;