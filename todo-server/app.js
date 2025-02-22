const express = require('express');
const dotenv =require('dotenv');
const path = require("path");
const indexRouter = require("./routes/indexRouter");

dotenv.config();

const app  = express();
const PORT  = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})

