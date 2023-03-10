const router = require("express").Router();
const User = require("../models/User");
const { registrationValidation } = require("../validations");

// Validations

router.post("/register", async (req, res) => {
  // Lets validate the data using JOI
  const { error } = registrationValidation(req.body);
  if (error) {
    return res.json(error.details[0].message);
  }

  // Creates new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await user.save();
    res.json(user).status(200);
  } catch (e) {
    res.json(e).status(400);
  }
});

module.exports = router;
