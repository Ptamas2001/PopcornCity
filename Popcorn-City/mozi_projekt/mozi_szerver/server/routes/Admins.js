const express = require("express");
const router = express.Router();
const { Admins } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Admins.create({
      username: username,
      password: hash,
    });
    res.json("SUCCESS");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Admins.findOne({ where: { username: username } });

  if (user)
  bcrypt.compare(password, user.password).then((match) => {
    if (!match)
      res.json({ error: 'Rossz kombináció' });
    else {
      const accessToken = sign(
        { username: user.username, id: user.id },
        "importantsecret"
      );
      res.json({ token: accessToken, username: username, id: user.id });
    }
  });
  else{
      res.json({ error: "A felhasználó nem létezik!"})
  }
});

router.get("/getAllAdmins", validateToken, async (req, res) => {
  const listOfUsers = await Admins.findAll();
  res.json({listOfUsers: listOfUsers});
});
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});


router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await Admins.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Admins.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Password Entered!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Admins.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("SUCCESS");
    });
  });
});

module.exports = router;
