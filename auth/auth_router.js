const router = require('express').Router()
const bcrypt = require('bcryptjs')
const newtoken = require('../auth/token')
const user = require('../users/model')




//register
router.post("/register", (req, res) => {
    const credentials = req.body;

  
    if (user.ValidUser(credentials)) {
      const hash = bcrypt.hashSync(credentials.password, 10);
      credentials.password = hash;
  
      user.add(credentials)
        .then((user) => {
          res.status(201).json({
            data: user,
          });
        })
        .catch((err) => {
          console.log({ err });
          res.status(500).json({
            message: "asdfsdfa",
          });
        });
    } else {
      res.status(400).json({
        message: "need un and pw",
      });
    }
  });

  //login
  router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (user.ValidUser(req.body)) {
      user
        .getting({ username: username })
        .then(([user]) => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = newtoken(user.username)
      
            res.status(200).json({
              message: `Hi, ${user.username}`,
              token
            });
          } else {
            res.status(401).json({
              message: "Invalid credientials",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            message: err.message,
          });
        });
    } else {
      res.status(400).json({
        message: "need un and pw",
      });
    }
  });
  

  //logout
  router.get("/logout", (req, res) => {
    if (req.token) {
      req.token.destroy((err) => {
        if (err) {
          res.send("no log out");
        } else {
          res.send("you logged out");
        }
      });
    } else {
      res.end();
    }
  });
  

  module.exports =  router

  