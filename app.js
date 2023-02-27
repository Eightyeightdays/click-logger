require('dotenv').config()

const path = require("path");           // WHY?
const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(()=> console.log("Failed to connect to MongoDB"));

const cors = require("cors");
app.use(cors({origin: true, credentials: true}));

const clickRoutes = require("./routes/clickRoutes");

app.use(express.json());

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });
// app.use("/", clickRoutes);

module.exports = app;