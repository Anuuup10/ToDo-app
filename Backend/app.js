require("dotenv").config();

// DNS
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

// Core Module
const path = require("path");

// External Module
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const todoItemsRouter = require("./routes/todoItemsRouter");
const DB_PATH = process.env.MONGO_URI;

//Local Module
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api/todo', todoItemsRouter);

// Localhost
const PORT = 3000;
mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo", err);
  });
