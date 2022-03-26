const router = require('express').Router();
const { User } = require('../../models');



router.post('/login', async (req, res) => {
    try {

        console.log(' Login attempted by ')
        console.log(req.body.email);
        console.log(req.body.password);
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
        console.log(
        )
      });

    
  
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/adduser', async (req, res) => {
  try {
        const { name, email, password } = req.body;

        console.log(name)
        console.log(email)
        console.log(password)
        console.log("trying to add user")

        const addUser = await User.create({ name: name, email: email, password: password })
         if(!addUser) {
             res.status(500).json('Couldn\'t add new user!');
         }
        res.redirect('/')
} catch (error) {
    res.status(500).json(error)
    
}
})

module.exports = router;