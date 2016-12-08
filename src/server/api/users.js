const router = require('express').Router();
const User = require('../models/user');
const cookieParser = require ('cookie-parser');

module.exports = router;

router.use((req, res, next) => {
  console.log('got to /api/users routes');
  // you can use this for custom middleware
  next();
});

// Your code goes here

router.post('/login', (req, res, next) => {
    return User.find({where: {email: req.body.email}})
        .then((user) => {
            if (!user) {
                res.send("Sorry, that didn't work")
            }
            else{
                res.cookie('email', req.body.email);
                res.send("We were successful");
            }
        })
})

router.post('/signup', (req, res, next) => {
    return User.find({where: {email: req.body.email}})
        .then((user) => {
            if (!user) {
                User.create({email: req.body.email});
                res.cookie('email', req.body.email);
                res.send();
            }
            else{
                res.send("User already signed up");
            }
        })
})


router.get('/', (req, res, next) => {
  return User.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});


