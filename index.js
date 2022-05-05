const express = require("express");
const PORT = 4000;
const app = express();
const cors = require("cors");
const categoriesRouter = require("./routers/categories");
const productRouter = require("./routers/products");
app.use(cors());
app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
