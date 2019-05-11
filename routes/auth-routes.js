const express       = require("express");
const authRoutes    = express.Router();
const passport      = require("passport");
const ensureLogin   = require("connect-ensure-login");

//User model
const User = require("../models/user");

//bcrypt to encrypt passport
const bcrypt   = require("bcryptjs");
const bcryptSalt = 10;


//Show the form signup 
// authRoutes.get("/signup", (req,res,next) =>{
//     res.render("auth/signup");
// });

authRoutes.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const name = req.body.name;
    const lastName = req.body.lastName;
    //console.log(username,password,email,name,lastName)  
//|| email ==="" || name ==="" || lastName === ""
 // ************* validations  ******************
    if (username === "" || password === "" ) {
      //res.render("auth/signup", { message: "Indicate username and password" });
      res.status(400).json({ message:'Provide all the information'})
      return;
    }
    if (password.length < 7) {
      res.status(400).json({
        message:
          'Please make your password at least 8 characters long for security purposes.',
      });
      return;
    }

    User.findOne({ username }, (err, foundUser) => {
      if(err) {
        res.status(500).json({ message: 'Username Check went bad'})
        return;
      }
      if (foundUser) {
        res.status(400).json({ message: 'Username taken. Chose another one'})
        return;
      }
         const salt = bcrypt.genSaltSync(bcryptSalt);
         const hashPass = bcrypt.hashSync(password, salt);
         console.log(username,password,email,name,lastName) 
          const newUser = new User({
            username,
            password: hashPass,
            email,
            name,
            lastName,
            privi:false
          });
          console.log("====", newUser.name)
          newUser.save(err => {
            if(err){
              res
                .status(500)
                .json({ message: 'Saving user to database went wrong'})
              return;
            }
    
    // Send the user's information to the frontend
    // We can use also: res.status(200).json(req.user)
          res.status(200).json(newUser);
          })
      })
  })
  
  
//=====================LOGIN ================

// // the get has not secret, we have to load the view we will use
// authRoutes.get("/login", (req, res, next) => {
//     res.render("auth/login");
//   });
// the post will containt the passport funcionality  
  // authRoutes.post("/login", 
  // passport.authenticate("local", {failureRedirect: '/login' }), 
  // (req, res) => {
  //       console.log("====",req.user.active);
  //       console.log("====",req.user.privilage);


  //       if (req.user.privilage ==="admin") {
  //         res.redirect('/dashboard');
  //       }
  //       else if (req.user.active === true && req.user.privilage ==="repre") {
  //         res.redirect('/newCallog');
  //       }
        
  //     });

  authRoutes.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
        res
          .status(500)
          .json({ message: 'Something went wrong authenticating user' });
        return;
      }
  
      if (!theUser) {
        // "failureDetails" contains the error messages
        // from our logic in "LocalStrategy" { message: '...' }.
        res.status(401).json(failureDetails);
        return;
      }
  
      // save user in session
      req.login(theUser, err => {
        if (err) {
          res.status(500).json({ message: 'Session save went bad.' });
          return;
        }
  
        // We are now logged in (that's why we can also send req.user)
        res.status(200).json(theUser);
      });
    })(req, res, next);
  });


 
// =====================PRIVATE PAGE =======

authRoutes.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private", { user: req.user });
  });


// ====================LOGOUT===========
// authRoutes.get("/logout" , (req,res) =>{
//   req.session.destroy((err) => {
//     res.redirect("/login");
//   })
// })  

authRoutes.delete('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  console.log("entro");
  req.logOut();
  res.status(200).json({ theUser: null });
});


//GET "/checkuser" allows the client to check to see:
// if we are logged-in
// what are the details of the logged-in user

authRoutes.get("/checkuser" , (req,res) => {
  console.log("user info",req.user)
  // req.user is a method that we can use
  if(req.user) {
    // hide "encryptedPassword" before sending the JSON (it is a securty risk)
    req.user.encryptedPassword = undefined;
    res.json({ theUser: req.user});
  }
  else {
    res.json({ theUser: null});
  }
})


module.exports = authRoutes;