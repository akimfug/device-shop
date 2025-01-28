import { Router } from "express";
import rateController from "../controllers/rateController.js";
const router = Router();

router.get('/', rateController.getRates)
router.post('/', rateController.rate)

export default router