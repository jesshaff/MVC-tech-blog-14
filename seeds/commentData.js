const { Comment } = require('../models');

const commentData = [
        {
            comment: "Sample comment to first post by user_id 2",
            user_id: 2,
            blog_id: 1,
        },
        {
            comment: "Sample comment to first post by user_id 3",
            user_id: 3,
            blog_id: 1,
        },
        {
            comment: "Sample comment to second post by user_id 1",
            user_id: 1,
            blog_id: 2,
        },
        {
            comment: "Sample comment to second post by user_id 3",
            user_id: 3,
            blog_id: 2,
        },
        {
            comment: "Sample comment to third post by user_id 2",
            user_id: 2,
            blog_id: 3,
        },
        {
            comment: "Sample comment to third post by user_id 4",
            user_id: 4,
            blog_id: 3,
        },
        {
            comment: "Sample comment to fourth post by user_id 3",
            user_id: 3,
            blog_id: 4,
        },
        {
            comment: "Sample comment to fourth post by user_id 5",
            user_id: 1,
            blog_id: 4,
        },
        {
            comment: "Sample comment to fifth post by user_id 4",
            user_id: 4,
            blog_id: 5,
        },
        {
            comment: "Sample comment to fifth post by user_id 6",
            user_id: 1,
            blog_id: 5
        },
        {
            comment: "Sample comment to sixth post by user_id 1",
            user_id: 1,
            blog_id: 6,
        },
        {
            comment: "Sample comment to sixth post by user_id 5",
            user_id: 4,
            blog_id: 6,
        },
]


const seedComment = () => Comment.bulkCreate(commentData);


module.exports = seedComment;