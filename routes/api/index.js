const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoughts = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoughts);

module.exports = router;
