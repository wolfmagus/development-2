const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// Signup
// authRouter.post("/signup", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(user){
//       res.status(403)
//       return next(new Error("That username is already taken"))
//     }
//     const newUser = new User(req.body)
//     newUser.save((err, savedUser) => {
//       if(err){
//         res.status(500)
//         return next(err)
//       }
//                             // payload,            // secret
//       const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
//       return res.status(201).send({ token, user: savedUser.withoutPassword() })
//     })
//   })
// })

//Login

// authRouter.post("/login", (req, res, next) => {
//   console.log("Attempting login...");
//   return res.status(200).send("You're logged in!")
 
  // User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
  //   if (err) {
  //     console.error("Error finding user:", err);
  //     return next(err);
  //   }
  //   if (!user) {
  //     console.log("User not found.");
  //     const error = new Error("Username or Password are incorrect");
  //     error.status = 403;
  //     return next(error);
  //   }

  //   user.checkPassword(req.body.password, (err, isMatch) => {
  //     if (err) {
  //       console.error("Error checking password:", err);
  //       return next(err);
  //     }
  //     if (!isMatch) {
  //       console.log("Password incorrect.");
  //       const error = new Error("Username or Password are incorrect");
  //       error.status = 403;
  //       return next(error);
  //     }
  //     console.log("Login successful.");
  //     const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
  //     return res.status(200).send({ token, user: user.withoutPassword() });
  //   });
  // });
//});

authRouter.post("/login", async (req, res, next) => {
  try {
      const user = await User.findOne({username: req.body.username})
      if (!user) {
          res.status(403)
          return next(new Error("Incorrect Gamer Tag!"))
      }
      user.checkPassword(req.body.password, (err, isMatch) => {
          if (err){
              res.status(403)
              return next(err)
          }
          if (!isMatch) {
              res.status(403)
              return next(new Error("Incorrect Gamer Tag or Password!"))
          }
          const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
          return res.status(200).send({user: user.withoutPassword(), token})
      })
  } catch(err) {
      res.status(500)
      return next(err)
  }
})



// authRouter.post("/login", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if (err) {
//       return next(err);
//     }
//     if (!user) {
//       const error = new Error("Username or Password are incorrect");
//       error.status = 403;
//       return next(error);
//     }

//     user.checkPassword(req.body.password, (err, isMatch) => {
//       if (err) {
//         return next(err);
//       }
//       if (!isMatch) {
//         const error = new Error("Username or Password are incorrect");
//         error.status = 403;
//         return next(error);
//       }
//       const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
//       return res.status(200).send({ token, user: user.withoutPassword() });
//     });
//   });
// });

// authRouter.post("/login", (req, res, next) => {
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     if(!user){
//       res.status(403)
//       return next(new Error("Username or Password are incorrect"))
//     }

//     user.checkPassword(req.body.password, (err, isMatch) => {
//       if(err) {
//         res.status(403)
//         return next(new Error("Username or Password are incorrect"))
//       }
//       if(!isMatch){
//         res.status(403)
//         return next(new Error(`Username or Password are incorrect`))
//       }
//       const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//       return res.status(200).send({ token, user: user.withoutPassword() })
//     })
//   })
// })


module.exports = authRouter