const express = require('express');

const chatlogRouter = express.Router();

const {
    addMessage,
    getMessage,
    deleteMessage,
    deleteOneMessage
} = require('./../database/chatlog');

chatlogRouter.get("/", (req, res) => {
    res.status(200).json({
        msg: "Chatlog Router Working"
    });
});

chatlogRouter.post("/:userID", (req, res) => {
    // console.log(req.params['userID']);

    addMessage(
        req.params['userID'],
        req.body.message
    )
        .then(repsonse => {
            res.status(201).json({
                msgID: repsonse.id
            });
            
        })
        .catch(err => {
            console.log(err);
            res.status(400).json({
                // err: err[0].message
            });
        });
});

chatlogRouter.get("/:userID", (req, res) => {

});

chatlogRouter.delete("/:userID", (req, res) => {

});

chatlogRouter.delete("/:userID/msgID", (req, res) => {

});



module.exports = {
    chatlogRouter
}