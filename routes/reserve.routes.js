const express = require("express");
const reserveRoutes = express.Router();
const { prisma } = require("../config/prisma");



reserveRoutes.post("/", async (req, res) => {
  try {
    const checkInDate = new Date(Date.parse(req.body.check_in));
    const checkOutDate = new Date(Date.parse(req.body.check_out));

    const newReserve = await prisma.reserve.create({
      data: {
        full_name: req.body.full_name,
        email_address: req.body.email_address,
        address: req.body.address,
        check_in: checkInDate.toISOString(),
        check_out: checkOutDate.toISOString(),
        type: req.body.type,
        rooms: req.body.rooms,
        guest: parseInt(req.body.guest),
        name_card: req.body.name_card,
        card_number: req.body.card_number,
        cvv: req.body.cvv,
      },
    });

    res.status(200).json(newReserve);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});




reserveRoutes.get("/", async (req, res) => {
    const reservation = await prisma.reserve.findMany();
    res.status(200).send(reservation);
  });

  module.exports ={reserveRoutes}