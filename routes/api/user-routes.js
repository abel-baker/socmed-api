const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUserById } = require('../../controllers/user-controller');
// GET /api/users get all users
// GET /api/users/:id get a single user
// POST /api/users create a new user
// PUT /api/users/:id update a user
// DELETE /api/users/:id delete a user

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUserById);

// POST /api/users/:id/friends/:friendId add a new friend
// DELETE /api/users/:id/friends/:friendId delete a friend
module.exports = router;
