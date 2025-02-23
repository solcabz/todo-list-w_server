const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js'); // Import Sequelize instance
const User = require('./User')(sequelize, DataTypes); // Import User model

module.exports = (sequelize ,DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, 
        key: 'id'
      }
    }
  }, {
    timestamps: true
  });

  Task.associate = (models) => {
    // Define associations here
    Task.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Task;
};


