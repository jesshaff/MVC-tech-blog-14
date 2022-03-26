const router = require("express").Router();
const { User, Blog, Comment } = require("../models");



router.get("/", async (req, res) => {
  try {

    let allBlogPosts = await Blog.findAll({
      include: [{
        model: User,
        attributes: { exclude: ["password"] },
        },
        {
        model: Comment, 
        }],
      order: [['id', 'DESC']],
    });

    let mappedBlogPosts = await allBlogPosts.map((blog) => {
      return blog.get({ plain: true });
    });



    console.log(JSON.stringify(mappedBlogPosts));



    res.render("homepage", { mappedBlogPosts, logged_in: req.session.logged_in, });
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
