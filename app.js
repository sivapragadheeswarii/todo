const express = require("express");
const cors = require("cors");
const authRoutes = require("./Routers/sampleRouter");
const todoRoutes = require("./Routers/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

module.exports = app;
