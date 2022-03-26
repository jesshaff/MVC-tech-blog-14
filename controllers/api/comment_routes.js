const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/addcomment', (req, res) => {
try {
    const { blogId, blogInput} = req.body;

    console.log(blogId)
    console.log(blogInput)

     const addComment = Comment.create({ comment: blogInput, blog_id: blogId });
    if (!addComment) {
        res.status(500).json('Couldn\'t add comment');
    } else {
        res.redirect('/');
    }

} catch (error) {
    res.status(500).json(error);
}
    
})


module.exports = router;