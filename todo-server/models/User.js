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
  },
  number: {
    type: DataTypes.STRING, // Correct datatype for phone_number
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  profileImage: {
    type: DataTypes.BLOB,
    allowNull: true
  }
}, {
  timestamps: true // Adds createdAt & updatedAt
});

return User;
};

