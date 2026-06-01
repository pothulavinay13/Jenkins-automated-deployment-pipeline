const express = require("express");

const app = express();

app.use(express.static("src/public"));

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP"
    });
});

app.get("/metrics", (req, res) => {
    res.status(200).json({
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage().rss,
        timestamp: new Date()
    });
});

module.exports = app;
