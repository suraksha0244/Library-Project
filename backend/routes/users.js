var express = require("express");
const { User } = require("../models/User");
var router = express.Router();
const bcrypt = require("bcrypt");
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", (req, res) => {
  let { name, email, password, dob } = req.body;
  if (!name || !email || !password || !dob) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  User.find({ email: email })
    .then((savedUser) => {
      if (savedUser.length > 0) {
        return res
          .status(422)
          .json({ error: "User already exists with that email" });
      }
      password = bcrypt.hashSync(password, 10);
      const user = new User({
        name,
        email,
        password,
        dob,
      });
      user
        .save()
        .then((user) => {
          res.json({
            message: "saved successfully",
            data: {
              name: user.name,
              email: user.email,
              dob: user.dob,
              id: user._id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  User.find({ email: email })
    .then((savedUser) => {
      if (savedUser.length == 0) {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
      const isMatch = bcrypt.compareSync(password, savedUser[0].password);
      if (isMatch) {
        res.json({
          message: "Successfully signed in",
          data: {
            name: savedUser[0].name,
            email: savedUser[0].email,
            dob: savedUser[0].dob,
            id: savedUser[0]._id,
          },
        });
      } else {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
