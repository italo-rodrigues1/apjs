import { Router } from "express";
import { createCategories } from "../../useCases/categories/createCategory";
import { listCategories } from "../../useCases/categories/listCategory";

const router = Router();

router.get("/", listCategories);

router.post("/", createCategories);

export default router;
