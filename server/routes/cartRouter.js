import { Router } from "express";
import cartController from "../controllers/cartController.js";
const router = Router();

router.get('/getCart', cartController.getOne);
router.post('/addDevice', cartController.addDevice);
router.delete('/removeDevice', cartController.removeDevice);
router.delete('/removeAllDevices', cartController.deleteAll);


export default router;