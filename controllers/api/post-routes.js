const router = require('express').Router();
const { Post } = require('../../models');

router.get('/createpost', (req, res) => {
    try {
        res.render("createPost");
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/updatepost', (req, res) => {
    try {
        res.render("updatePost");
    } catch (error) {
        res.status(500).json(error);
    }
})


router.post('/updatepost', async (req, res) => {
    try {
        const { id, content } = req.body
        console.log(`Updating Post number ${id}`);


        const checkUser = await Post.findByPk(id);

        console.log(checkUser.user_id)
        console.log(req.session.user_id)

        let checkOwner = (checkUser.user_id === req.session.user_id)

        console.log(checkOwner)
        if(!checkOwner) {
            res.status(500).json('Only the post creator may delete.')
            return;
        } else {
           Post.update({ content }, {where: { id }})
           res.redirect('/');
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post('/addpost', async (req, res) => {
    try {
        console.log('inside addPost POST request');
            const { title, content } = req.body;
            console.log(title);
            console.log(content);
             const addPost = await Post.create({ title: title, content: content, user_id: req.session.user_id })
             if(!addPost) {
                 res.status(500).json('Couldn\'t add new post!');
             }
            res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

router.get('/deletepost', (req, res) => {
    try {
        res.render("deletePost");
    } catch (error) {
        res.status(500).json(error)
    }
})



router.post('/deletepost', async (req, res) => {
    try {
        const { id } = req.body
        console.log(`Deleting Post number ${id}`);


        const checkUser = await Post.findByPk(id);

        console.log(checkUser.user_id)
        console.log(req.session.user_id)

        let checkOwner = (checkUser.user_id === req.session.user_id)

        console.log(checkOwner)
        if(!checkOwner) {
            res.status(500).json('Only the post creator may delete.')
            return;
        } else {
            console.log('trying to destroy Post ${id} ')
                const destroyPost = await Post.destroy({ where: { id: id } })
                        if(!destroyPost) {
                            res.status(500).json('Post could not be deleted.')
                            return;
                        }
        }
        
        res.status(200).json('Successfully deleted.')

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;