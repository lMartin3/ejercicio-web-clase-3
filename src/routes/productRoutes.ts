
import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController";
import { validateBody } from "../middleware/validation";
import { ProductCreateDto, ProductUpdateDto } from "../dto/product.dto";

const router = express.Router();

router.post("/", validateBody(ProductCreateDto), createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", validateBody(ProductUpdateDto), updateProduct);

export default router;
