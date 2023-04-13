const express = require("express");
const router = express.Router();
const { Ticket } = require("../models");

router.get("/", async (req, res) => {
  const listOfTickets = await Ticket.findAll();
  res.json(listOfTickets);
});

router.get("/byId/:id",async (req,res)=>{
  const id = req.params.id;
  const ticket = await Ticket.findByPk(id);
  res.json(ticket)
}) ;

router.post("/", async (req, res) => {
  const ticket = req.body;
  await Ticket.create(ticket);
  res.json(ticket);
  console.log(ticket)
});
router.post("/modositas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = req.body;
    console.log("ez itt a ticket")
    console.log(req.body)
    const updateticket = await Ticket.update(ticket,{where:{id:id}});
    res.send(updateticket);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

  
 
});
router.post("/torles/:id", async (req, res,) => {
  const id = req.params.id
  console.log("ez az id",id)
   await Ticket.destroy({ where: { id: id } });
  res.send("sikeres törlés")

  }) ;


module.exports = router;