const express = require("express");

const { database } = require("./database/database");
const { chatlogRouter } = require('./controller/chatlog')

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/chatlogs", chatlogRouter);

database.sync()
    .then(() => {
        console.log("Database Connected");

        app.listen(4000, () => {
            console.log("Server Up and Running");
        });
    })