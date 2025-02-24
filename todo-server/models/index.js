const { Sequelize } = require('sequelize');
const Task = require('./Task');
const User = require('./User');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  logging: false,
});

const models = {
  Task: Task(sequelize, Sequelize.DataTypes),
  User: User(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;