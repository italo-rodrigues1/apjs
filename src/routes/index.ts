import { Router } from "express";
import category from "./categories";
import orders from "./orders";
import products from "./products";

const router = Router();

router.use("/categories", category);
router.use("/products", products);
router.use("/orders", orders);

export { router };
