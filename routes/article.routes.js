const express = require("express");
const articleRoutes = express.Router();
const { prisma } = require("../config/prisma");

articleRoutes.get("/", async (req, res) => {
    try {
      const newArticle = await prisma.article.findMany({
        where: {
          title: req.query.title ? req.query.title : undefined,
          description: req.query.description ? req.query.description : undefined,
          type: req.query.type ? req.query.type : undefined,
        },
      });
  
      res.status(200).json({
        message: "Articles retrieved",
        data: newArticle,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  module.exports = {articleRoutes}