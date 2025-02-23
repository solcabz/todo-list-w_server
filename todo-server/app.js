const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
const { sequelize } = require('./models');

const app  = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use('/', indexRouter);
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Sync Database
sequelize.sync()
  .then(() => console.log('Tables created'))
  .catch(err => console.error('Error syncing database:', err));

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});

