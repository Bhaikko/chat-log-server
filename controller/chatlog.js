const { response } = require('express');
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
            res.status(400).json({
                err: err[0].message
            });
        });
});

chatlogRouter.get("/:userID", (req, res) => {    
    getMessage(
        req.params['userID'],
        req.query.limit,
        req.query.start
    )
        .then(response => {
            res.status(200).json({
                messages: response
            });
        })
        .catch(err => {
            res.status(400).json({
                err: err[0].message
            });
        });
});

chatlogRouter.delete("/:userID", (req, res) => {
    deleteMessage(req.params['userID'])
        .then(response => {
            res.status(200).json({
                msg: `Message deleted for user ${req.params['userID']}`
            });
        })
        .catch(err => {
            res.status(400).json({
                err: err[0].message
            });
        });
});

chatlogRouter.delete("/:userID/:msgID", (req, res) => {
    deleteOneMessage(req.params['userID'], req.params['msgID'])
    .then(response => {
        res.status(200).json({
            msg: `Message deleted for user ${req.params['userID']}`
        });
    })
    .catch(err => {
        res.status(400).json({
            err: err[0].message
        });
    });
});

module.exports = {
    chatlogRouter
}