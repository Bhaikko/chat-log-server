const { Messages } = require('./database');
const { Op } = require('sequelize');

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
    start = null
) => {
    if (start) {
        return Messages.findAll({
            where: {
                userID,
                id: {
                    [Op.gt]: start
                }
            },
            order: [
                ['createdAt', 'DESC']
            ],
            limit
        });
    } else {
        return Messages.findAll({
            where: {
                userID
            },
            order: [
                ['createdAt', 'DESC']
            ],
            limit
        });

    }
}

module.exports.deleteMessage = (userID) => {
    return Messages.destroy({
        where: {
            userID
        }
    });
}

module.exports.deleteOneMessage = (
    userID,
    msgId
) => {
    return Messages.destroy({
        where: {
            userID,
            id: msgId
        }
    });
}