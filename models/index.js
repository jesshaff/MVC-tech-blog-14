const User = require('./User');
const Blog = require('./Post');
const Comment = require('./Comment');

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE',
})

module.exports = { User, Blog, Comment };