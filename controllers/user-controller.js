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

  getUserById({ params }, res) {
    User.findOne({ _id: params.id }).select('-__v')
    .then(userData => res.json(userData))
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
  },

  createUser({ body }, res) {
    User.create(body)
    .then(userData => res.json(userData))
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
  },

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(userData => res.json(userData))
    .catch(error => res.json(error));
  },

  deleteUserById({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(userData => res.json(userData))
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
    });
  },

  // Friends
  addFriend({ params }, res) {
    User.updateOne(
      { _id: params.id },
      { $addToSet: { friends: params.friendId } }
    )
    .then(pushData => res.json(pushData))
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
    });
  },

  removeFriend({ params }, res) {
    User.updateOne(
      { _id: params.id },
      { $pull: { friends: { $in: [params.friendId] } } }
    )
    .then(pullData => res.json(pullData))
    .catch(error => {
      console.error(error);
      res.status(500).json(error);
    });
  }
};

module.exports = userController;
