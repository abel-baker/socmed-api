const { User } = require('../models');

const userController = {
  getAllUsers(req, res) {
    User.find({}).select('-__v')
    .then(userData => res.json(userData))
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
  },
};

module.exports = userController;
