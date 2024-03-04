var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
var models = require("../models");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;

// POST new user - REGISTER PAGE
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    await models.User.create({ username: username, password: hash });
    res.send({ message: "Register successful" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// LOGIN PROCESS - LOGIN PAGE
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await models.User.findOne({ where: { username: username } });
    if (user) {
      const user_id = user.id;

      const correctPassword = await bcrypt.compare(password, user.password);

      if (!correctPassword) throw new Error("Incorrect password");

      var token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("User does not exist");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

//insert results player
router.post("/game", userShouldBeLoggedIn, async (req, res) => {
  const { userId, scorepoints } = req.body;
  try {
    await models.GameResult.create({ userId, scorepoints, date: new Date() });
    res.status(201).json({ message: "Guess saved successfully" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// get player results

module.exports = router;
