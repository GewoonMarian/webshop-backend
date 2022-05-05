const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Product = require("../models").product;

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res
        .status(400)
        .send({ message: "Please provide name, email and password" });
    } else {
      const newUser = await User.create({ name, email, password });
      res.send(newUser);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
