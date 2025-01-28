import { Router } from "express";
import userController from "../controllers/userController.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";
import checkRole from "../middleware/CheckRolesMiddleware.js";
const router = Router();

router.post('/login', userController.login)
router.post('/registration', userController.registration)
router.get('/auth', AuthMiddleware, userController.check)
router.get('/', checkRole(['ADMIN']), userController.getAll)
export default router