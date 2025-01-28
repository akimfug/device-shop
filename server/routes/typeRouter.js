import { Router } from "express";
import typeController from "../controllers/typeController.js";
import checkRole from "../middleware/CheckRolesMiddleware.js";
const router = Router();

router.get('/', typeController.getAll)
router.post('/', checkRole(['ADMIN']), typeController.create)

export default router