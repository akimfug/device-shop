import decodeJWT from './functions/decodeJWT.js'
import { DeviceRating, User, Rating } from '../models/models.js'
class RateController {
    async rate (req, res) {
        try {
            const {rate, deviceId} = req.body
            if (rate < 1 || rate > 5) {
                return res.status(400).json({message: 'rate must be between 1 and 5'})
            }
            const data = decodeJWT(req.headers.authorization.split(' ')[1])
            const {id: userId} = data

            const existingRate = await Rating.findOne({where: {userId, deviceId}})
            if (existingRate) {
                return res.status(400).json({message: 'rate already exists'})
            }
            
            if (!data) {
                return next(ApiError.badRequest('user not found'))
            }
            const user = await User.findOne({where: {id: userId}})
            const createdRate = await Rating.create({rate})
            await createdRate.setUser(user)
            await createdRate.setDevice(deviceId)
            return res.json(createdRate)

        } catch (error) {
            res.status(400).json({message: 'rate error' + error})
        }
    }

    async getRates (req, res) {
        try {
            
        } catch (error) {
            res.status(400).json({message: 'get rates error'})
        }
    }

}

export default new RateController()

