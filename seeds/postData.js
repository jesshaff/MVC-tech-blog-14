const { Post } = require('../models');

const postData = [
    {
        title: "First Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 1,
    },
    {
        title: "Second Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 2,
    },
    {
        title: "Third Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 3,
    },
    {
        title: "Fourth Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 1,
    },
    {
        title: "Fifth Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 4,
    },
    {
        title: "Sixth Blog Post!",
        content: "This is a first post in the blog!",
        user_id: 4,
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;