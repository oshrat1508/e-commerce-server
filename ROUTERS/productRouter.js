const express = require("express");
const productBLL = require("../BLLS/productBLL");

const router = express.Router();

router.get("/product", productBLL.getAllProducts);
router.get("/product/:id", productBLL.getProduct);
router.post("/product", productBLL.createProduct);
router.put("/product/:id", productBLL.updateProduct);
router.delete("/product/:id", productBLL.deleteProduct);

module.exports = router;