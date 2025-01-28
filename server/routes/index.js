import { Router } from "express";
import deviceRouter from './deviceRouter.js';
import userRouter from './userRouter.js';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';
import rateRouter from './rateRouter.js';
import roleRouter from "./roleRouter.js";
import cartRouter from "./cartRouter.js";
const router = Router();

router.use('/user', userRouter) // http://localhost:5000/api/user - регистрация и авторизация
router.use('/device', deviceRouter) 
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/rating', rateRouter)
router.use('/role', roleRouter) // http://localhost:5000/api/role - создание ролей администратора и пользователя
router.use('/cart', cartRouter) // http://localhost:5000/api/cart - добавление товаров в корзину
export default router