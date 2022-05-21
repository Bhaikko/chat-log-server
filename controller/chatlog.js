const express = require('express');

const chatlogRouter = express.Router();

chatlogRouter.get("/", (req, res) => {
    res.status(200).json({
        msg: "Chatlog Router Working"
    });
});

module.exports = {
    chatlogRouter
}