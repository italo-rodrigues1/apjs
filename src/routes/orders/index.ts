import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("OK");
});

router.post("/", (req, res) => {
    res.send("OK");
});

router.patch("/orders/:ordersId", (req, res) => {
    res.send("OK");
});

router.delete("/orders/:ordersId", (req, res) => {
    res.send("OK");
});

export default router;
