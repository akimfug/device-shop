import { Cart, CartDevice } from '../models/models.js'
import ApiError from '../errors/apiError.js'
import decodeJWT from './functions/decodeJWT.js'

class cartController {
    async getOne(req, res, next) {
        try {
            const data = decodeJWT(req.headers.authorization.split(' ')[1])
            const userCart = await Cart.findOne({ where: { userId: data.id } })
            if (!userCart) {
                return next(ApiError.badRequest('cart not found'))
            }

            const cartDevices = await CartDevice.findAll({
                where: {
                    cartId: userCart.id
                }
            })
            res.json(cartDevices)
        } catch (e) {
            return next(ApiError.internal('всё плохо', e))
        }
    }
    async addDevice(req, res, next) {
        try {
            const {deviceId} = req.body
            if (!deviceId) {
                return next(ApiError.badRequest('device id is required'))
            }
            const data = decodeJWT(req.headers.authorization.split(' ')[1])
            if (!data) {
                return next(ApiError.badRequest('user not found'))
            }
            const userCart = await Cart.findOne({ where: { userId: data.id } })
            if (!userCart) {
                return next(ApiError.badRequest('cart not found'))
            }

            
            const existingCardDevice = await CartDevice.findOne({
                where: {
                    cartId: userCart.id,
                    deviceId: deviceId
                }
            })

            if (existingCardDevice) {
                return next(ApiError.badRequest('device already added'))
            }

            const cartDevice = await CartDevice.create({ cartId: userCart.id, deviceId: deviceId })
            if (!cartDevice) {
                return next(ApiError.badRequest('device not added'))
            }

            res.json(cartDevice)
        } catch (error) {
            return next(ApiError.internal('всё плохо', error))
        }
        
    }
    async removeDevice(req, res, next) {
        const {deviceId} = req.body
        const data = decodeJWT(req.headers.authorization.split(' ')[1])

        const userCart = await Cart.findOne({ where: { userId: data.id } })
        if (!userCart) {
            return next(ApiError.badRequest('cart not found'))
        }

        const existingCardDevice = await CartDevice.findOne({
            where: {
                cartId: userCart.id,
                deviceId: deviceId
            }
        })

        if (!existingCardDevice) {
            return next(ApiError.badRequest('device not found'))
        }

        await CartDevice.destroy({
            where: {
                cartId: userCart.id,
                deviceId: deviceId
            }
        })
        res.json({message: 'device removed'})
    }
    async deleteAll(req, res, next) {

    }

}

export default new cartController()