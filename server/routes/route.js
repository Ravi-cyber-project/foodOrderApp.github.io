import express from "express";
import { getMeals, postOrder } from "../controller/Controller.js";


const router = express.Router();


router.get('/meals',getMeals);
router.post('/cart', postOrder);

export default router;
