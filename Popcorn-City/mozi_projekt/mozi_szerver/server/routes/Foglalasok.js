const express = require("express");
const router = express.Router();
const moment = require("moment");
const { Musor, Foglalasok, Sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/getAllBookingsWithDate", async (req, res) => {
  const element = {};
  const bookingsWithShowDate = [];
  const bookings = await Foglalasok.findAll();
  for(let i = 0; i < bookings.length; i++){
    const show = await Musor.findByPk(bookings[i].musorId);
    element.booking = bookings[i];
    element.show = show;
    bookingsWithShowDate.push({booking: element.booking, show: element.show});
  }
  res.json(bookingsWithShowDate)
})

module.exports = router;