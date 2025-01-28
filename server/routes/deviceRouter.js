import { Router } from "express";
import deviceController from "../controllers/deviceController.js";
const router = Router();

router.get('/', deviceController.getAll)
router.post('/', deviceController.create)
router.get('/:id', deviceController.getOne)


export default router