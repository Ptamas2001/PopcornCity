const express = require("express");
const router = express.Router();
const { Cart, Foglalasok, Chairs, Musor, Sequelize } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

const Op = Sequelize.Op;

router.post("/hozzaad", validateToken, async (req, res) => {
  console.log(req.body.cart);
  const kosarhozAd = req.body.cart;
  //const musorId = req.body.cart.musorId;
  //const getMusor = await Musor.findByPk(musorId);
  //const getKosar = await Cart.findAll({
   // where: { username: req.body.cart.username },
  //});
  //if (getMusor.ticketsLeft === 0) {
   // res.json({ error: "Nincs több jegy!" });
  //} else if (getKosar.length === 0) {
  //  await Cart.create(kosarhozAd);
  //  res.json(kosarhozAd);
  //} else if (getKosar.length >= 1) {
   // for(i = 0; i < getKosar.length; i++){
   //   if(getKosar[i].musorId === musorId){
     //   const error = "asd";
    // }else {
    //    await Cart.create(kosarhozAd);
    //  res.json(kosarhozAd);
    //  }
   // }
 // } else{
      await Cart.create(kosarhozAd);
      res.json(kosarhozAd);
 // }
  

  //-------------------------------------------
  // OTT JÁROK HoGY A KORSÁRBAN LÉVŐ ELSŐ ELEMMEL MŰKÖDIK,
  // A TÖBBIVEL NEM 
 //--------------------------------------------
});

router.get("/:username", async (req, res) => {
  console.log(req.body);
  const username = req.params.username;
  const kosarTartalma = await Cart.findAll({
    where: {
      username: username,
    },
  });
  res.json(kosarTartalma);
});

router.post("/jegyfoglalas", async (req, res) => {
  const felhasznalonev = req.body.adatok.username;
  const valasztottHelyek = req.body.adatok.valasztottHelyek;
  const musorId = req.body.adatok.musorId;
  for (i = 0; i < valasztottHelyek.length; i++) {
    const muvelet = await Chairs.update(
      { type: "foglalt" },
      { where: { id: valasztottHelyek[i].valasztottSzekId } }
    );
  }
  // HA MÁR VAN EGY FOGLALÁSA, NE HOZZON LÉTRE MÉGEGYET
  // VISZONT HA MÁS  FILMRE FOGLAL JEGYET AKK HOZZON LÉTRE
  const isFoglaltMar = await Foglalasok.findAll({
    where: { username: felhasznalonev, musorId: musorId },
  });
  console.log(isFoglaltMar);
  if (isFoglaltMar.length === 1) {
    let maiDatum = new Date();
    const updateFoglalas = await Foglalasok.update(
      { updatedAt: maiDatum },
      { where: { username: felhasznalonev } }
    );
  } else {
    const createFoglalas = await Foglalasok.create({
      username: felhasznalonev,
      musorId: musorId,
    });
  }
  // ---------------------------------------------------
  const jegyek = await Musor.findByPk(musorId);
  const maradtJegyek = jegyek.ticketsLeft - valasztottHelyek.length;
  const updateMusor = await Musor.update(
    { ticketsLeft: maradtJegyek },
    { where: { id: musorId } }
  );
  res.json({ maradtJegyek: maradtJegyek });
});

module.exports = router;
