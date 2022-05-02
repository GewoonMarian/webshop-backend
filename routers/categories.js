const { Router } = require("express");
const router = new Router();
const Category = require("../models").categorie;
const Product = require("../models").product;
router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.status(200).send(allCategories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET a specific team, including all its players
router.get("/:id", async (req, res, next) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!oneCategory) {
      res.status(404).send(`Category with id ${req.params.id} not found`);
    } else {
      res.send(oneCategory);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
module.exports = router;
