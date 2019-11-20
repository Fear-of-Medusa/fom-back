const { userService } = require('../services/UserService');

const { findUsers } = userService;

const getUsers = async (req, res, next) => {
    const { params } = req.body;
    try {
        await findUsers(params);
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500) && next(error);
    }
}

module.exports = { getUsers };