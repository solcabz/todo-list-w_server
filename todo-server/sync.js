import sequelize from './config/database.js';
import './models/User.js';
import './models/Task.js';

sequelize.sync({ alter: true }) // Creates or updates tables
  .then(() => console.log('Database synced!'))
  .catch(err => console.error('Error syncing database:', err));