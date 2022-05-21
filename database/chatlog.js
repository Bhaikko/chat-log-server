const { Messages } = require('./database');

module.exports.addMessage = (
    userID,
    message
) => {
    return Messages.create({
        userID,
        message,
        isSent: false
    });
}

module.exports.getMessage = (
    userID,
    limit = 10,
    start = 'Recent'
) => {

}

module.exports.deleteMessage = (userID) => {

}

module.exports.deleteOneMessage = (
    userID,
    msgId
) => {

}