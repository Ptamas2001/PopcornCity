const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Musor, Chairs, Sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

const Op = Sequelize.Op;

router.get("/getAllMusor", async (req, res) => {
  const musors = await Musor.findAll()
  res.json(musors)
})

router.get("/getById/:id", async (req, res) => {
  const filmId = req.params.id;
  const musor = await Musor.findAll({ where: { movieId: filmId } });
  res.json(musor);
})

router.get("/getByMusorId/:id", async (req, res) => {
  const musorId = req.params.id;
  const musor = await Musor.findByPk(musorId);
  res.json(musor);
})
router.delete("/deleteById/:id", async (req, res) => {
  const musorId = req.params.id;
  const musor = await Musor.destroy({where: {id:musorId}});
  res.json(musor);
})

router.get("/getByDate/:date", async (req, res) => {
  const date = req.params.date;
  const formalt = date.split('T')[0];
  const musor = await Musor.findAll({
    where: {
      startAt: {
        [Op.like]: `${formalt}%`
      }
    }
  });
  res.json(musor);
})

router.post("/hozzaad", validateToken, async (req, res) => {
  console.log(req.body.musor)
  const ujMusor = req.body.musor;
  const musor = await Musor.create(ujMusor);
  for (i = 1; i < 141; i++) {
    Chairs.create({
      musorId: musor.id,
      location: i,
      type: "empty",
    })
  }
  res.json(ujMusor);
});

module.exports = router;