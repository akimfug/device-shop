import { Router } from "express";
import roleController from "../controllers/roleController.js";
import checkRole from "../middleware/CheckRolesMiddleware.js";
const router = Router();

router.get('/', roleController.getAll)
router.post('/', checkRole(['ADMIN']), roleController.create)

export default router