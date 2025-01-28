import ApiError from '../errors/apiError.js'
import { Device, DeviceInfo } from '../models/models.js'
import { v4 as uuidv4 } from 'uuid';
import path from 'path' 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class DeviceController {
    async create (req, res, next) {
        try {
            const {name, price, brandId, typeId, rating, info} = req.body
            const img = req.files.img
            let fileName = uuidv4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, brandId, typeId, rating, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }

            return res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll (req, res, next) {
        try {
            let {brandId, typeId, limit, page} = req.query

            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit

            let devices
            if (!brandId && !typeId) {
                console.log('no brandId and no typeId')
                devices = await Device.findAll({limit, offset})
            }
            if (brandId && !typeId) {
                devices = await Device.findAll({where: {brandId}, limit, offset})
            } else if (!brandId && typeId) {
                devices = await Device.findAll({where: {typeId}, limit, offset})
            } else if (brandId && typeId) {
                devices = await Device.findAll({where: {brandId, typeId}, limit, offset})
            } else {
                devices = await Device.findAll({limit, offset})
                console.log(devices)
            }

            return res.json(devices)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOne (req, res, next) {
        try {
            const {id} = req.params
            const device = await Device.findOne({
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            })
            res.json(device)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

}

export default new DeviceController()

