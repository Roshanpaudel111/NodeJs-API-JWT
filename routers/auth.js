const router = require("express").Router();
const User = require("../models/User");

// router.route("/").post((req, res) => {
//   res.send("register");
// });
//
router.post("/register", async (req, res) => {
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
