// Contain Database entity related to Messages

const Sequelize = require('sequelize');

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: false
});

const Messages = database.define("messages", {
    userID: {
        type: Sequelize.STRING,
        allowNull: false
    },

    message: {
        type: Sequelize.STRING,
        allowNull: false
    },

    isSent: {
        type: Sequelize.BOOLEAN,
        default: false
    }
    // Timestamp will be handled by createdAt field
});

module.exports = {
    database,
    Messages
};