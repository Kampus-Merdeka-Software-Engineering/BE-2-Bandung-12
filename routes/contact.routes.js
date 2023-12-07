const express = require("express");
const contactRoutes = express.Router(); //definisi variabel yang bernama message routes --> if change harus ganti kebawahnya 
const { prisma } = require("../config/prisma");

// get all message
contactRoutes.get("/", async (req, res) => {
	const messages = await prisma.contactus.findMany();
	res.status(200).send(messages);
});

// create new message
contactRoutes.post("/", async (req, res) => {
	const { name, email, message, number} = req.body;
	const newMessage = await prisma.contactus.create({
		data: {
			name: name,
			email: email,
			message: message,
            number:number,
		},
	});
	res.status(201).json({
		message: "Message created",
		data: newMessage,
	});
});

module.exports = { contactRoutes };
