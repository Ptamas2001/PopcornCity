const express = require("express");
const router = express.Router();
const { Admins } = require("../models");
const { Users, Logs } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, password, teljesNev, email, telefonszam, premium } =
    req.body;
  const user = await Users.findOne({ where: { username: username } });
  const user2 = await Users.findOne({ where: { email: email } });

  if (user) {
    res.json({error: "Felhasználónév foglalt!"});
  } else if (user2) {
    res.json({error: "Emailcím foglalt!"});
  } else if (username.length === 0 || password.length === 0 || teljesNev.length === 0 || email.length === 0 || telefonszam.length === 0 ) {
    res.json({error: "Tölts ki minden mezőt!"})
  } else {
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
        teljesNev: teljesNev,
        email: email,
        telefonszam: telefonszam,
        premium: premium,
      });
      res.json({msg: "Sikeres regisztráció!"});
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });
  const loginCount = await Logs.findOne({where: {id: 1}});
  const body = {
    loginCount: loginCount.loginCount + 1,
  }
  const addToLoginCount = await Logs.update(body, {where: {id: 1}});
  if (user)
    bcrypt.compare(password, user.password).then((match) => {
      if (!match)
        res.json({ error: "Rossz kombináció!" });
      else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "importantsecret"
        );
        res.json({ token: accessToken, username: username, id: user.id });      
      }
    });
  else {
    res.json({ error: "A felhasználó nem létezik!" });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/getLoginCount", async (req, res) => {
  const loginCount = await Logs.findOne({where: {id: 1}});
  res.json(loginCount);
});

router.get("/getAllUser", validateToken, async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json({ listOfUsers: listOfUsers });
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

  res.json(basicInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const user = await Admins.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Hibás jelszó!" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Admins.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("Sikerült!");
    });
  });
});

router.post("/torles", async (req, res) => {
  const felhasznalok = req.body.adatok.felhasznalok;
  for (i = 0; i < felhasznalok.length; i++) {
    console.log(felhasznalok[i]);
    await Users.destroy({ where: { id: felhasznalok[i] } });
  }

  await Users.destroy({ where: { id: felhasznalok[0] } });
  res.send("Sikeres törlés!");
});
module.exports = router;
