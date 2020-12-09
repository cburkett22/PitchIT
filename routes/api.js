const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// Load input validation
const validateRegisterInput = require("../models/validation/register");
const validateLoginInput = require("../models/validation/login");
// Load User model
const User = require("../models/User");
const CreateTripModel = require("../models/CreateTrip");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  // COREYS NEW STUFF FOR TRIP CARDS
  router.get('/', (req, res) => {
    CreateTripModel.find({  })
      .then((data) => {
        console.log('Data: ', data);
        res.json(data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  });

  router.post('/create', (req, res) => {
    console.log('Body: ', req.body);
    const data = req.body;

    const newTripPost = new CreateTripModel(data);

      newTripPost.save((error) => {
      if (error) {
        res.status(500).json({ msg: 'Sorry, internal server errors...' });
        return;
      }
      return res.json({
        msg: 'Your data has been saved!!!'
      });
    });
  });

  router.get('/all', function(req, res){
    CreateTripModel.find({ completed: false })
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  });

  router.get('/completed', function(req, res){
    CreateTripModel.find({ completed: true })
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  });
  
  router.put('/update/:id', function(req, res) {
    console.log("req:", req.params.id);
    console.log("review", req.body);
  
    CreateTripModel.updateOne({ _id: req.params.id }, { $set: { completed: true, review: req.body.review, stars: req.body.stars } }, { upsert: false })
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  });
  
  router.put('/updatecard/:id', function(req, res) {
    console.log("req:", req.params.id);
    console.log("review", req.body);
  
    CreateTripModel.updateOne({ _id: req.params.id }, { $set: { 
      title: req.body.title,
      date: req.body.date,
      location: req.body.location,
      campers: req.body.campers,
      items: req.body.items
    } }, { upsert: false })
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  });
  
  router.delete('/delete/:id', function(req, res) {
    console.log("req:", req.params.id);
    console.log("review", req.body.review);
    
    CreateTripModel.deleteOne({ _id: req.params.id })
      .exec()
      .then(doc => {
        res.send(doc)
      })
      .catch()
  });

  module.exports = router;