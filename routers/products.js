const { Router } = require("express");
const router = new Router();
const Product = require("../models").product;
const Category = require("../models").categorie;

router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 5;
  const offset = req.query.offset || 0;

  console.log("limit", limit);
  console.log("offset", offset);
  try {
    const allProduct = await Product.findAndCountAll({
      limit,
      offset,
      include: [{ model: Category }],
    });
    res.status(200).send({ rows: allProduct.rows, total: allProduct.count });
  } catch (error) {
    console.log(error);
    next(error);
  }
});
//

router.get("/:id", async (req, res, next) => {
  try {
    const oneProduct = await Product.findByPk(req.params.id, {
      include: [{ model: Category }],
    });
    if (!oneProduct) {
      res.status(404).send(`Category with id ${req.params.id} not found`);
    } else {
      res.send(oneProduct);
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});
module.exports = router;
