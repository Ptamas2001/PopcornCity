const express = require("express");
const router = express.Router();
const { Chairs, Sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

const Op = Sequelize.Op;

    router.get("/:musorid", validateToken, async (req, res) => {
        const musorId = req.params.musorid;
        const szekekFromMusorId = await Chairs.findAll({where: {
            musorId: musorId,
        }});
        res.json(szekekFromMusorId);
    })

  module.exports = router;