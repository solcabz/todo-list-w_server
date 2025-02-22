const express = require('express');
const dotenv =require('dotenv');


const app  = express();
const PORT  = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Server Running");
})

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})

