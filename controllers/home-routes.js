const router = require("express").Router();
const { User, Post, Comment } = require("../models");



router.get("/", async (req, res) => {
  try {

    let allPostPosts = await Post.findAll({
      include: [{
        model: User,
        attributes: { exclude: ["password"] },
        },
        {
        model: Comment, 
        }],
      order: [['id', 'DESC']],
    });

    let mappedPostPosts = await allPostPosts.map((post) => {
      return post.get({ plain: true });
    });



    console.log(JSON.stringify(mappedPostPosts));



    res.render("homepage", { mappedPostPosts, logged_in: req.session.logged_in, });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.status(404).end();
  }
});

router.get("/createUser", (req, res) => {
  try {
    res.render("createUser");
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;