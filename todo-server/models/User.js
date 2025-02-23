const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js'); // Import Sequelize instance

module.exports = (sequelize ,DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true // Adds createdAt & updatedAt
  });

  User.associate = (models) => {
    // Define associations here
    // Remove incorrect association
  };

  return User;
}