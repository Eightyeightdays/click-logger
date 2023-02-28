require('dotenv').config()
const path = require("path");           // WHY?
const express = require("express");
const app = express();
const clickRoutes = require("./routes/clickRoutes.js");
const statsRoutes = require("./routes/statsRoutes.js");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Connected to MongoDB"))
    .catch(()=> console.log("Failed to connect to MongoDB"));

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use("/", clickRoutes);
app.use("/", statsRoutes);

module.exports = app;