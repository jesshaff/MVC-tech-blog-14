const router = require('express').Router();

const userRoutes = require('./user_routes');
const blogRoutes = require('./blog_routes');
const commentRoutes = require('./comment_routes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
