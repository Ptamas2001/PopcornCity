const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers

const AdminsRouter = require("./routes/Admins");
app.use("/admin", AdminsRouter);
const UsersRouter = require("./routes/Users");
app.use("/user", UsersRouter);
const MusorRouter = require("./routes/Musor");
app.use("/musor", MusorRouter);
const CartRouter = require("./routes/Cart");
app.use("/kosar", CartRouter);
const ChairsRouter = require("./routes/Chairs");
app.use("/szekek", ChairsRouter);
const TicketRouter = require("./routes/Ticket");
app.use("/jegyarak", TicketRouter);
const BookingsRouter = require("./routes/Foglalasok");
app.use("/foglalasok", BookingsRouter);
db.sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Server running on port 3002");
  });
});
