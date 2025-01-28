import { Type } from '../models/models.js'
import ApiError from '../errors/apiError.js'

class TypeController {
    async create (req, res) {
        try {
            const {name} = req.body            
            const type = await Type.create({name})
            return res.json(type)
        } catch (error) {
            res.status(400).json({message: 'Type create error ' + error})
        }
    }

    async getAll (req, res) {
        try {
            const types = await Type.findAll()
            return res.json(types)
        } catch (error) {
            res.status(400).json({message: 'Get all types error'})
        }
    }

}

export default new TypeController()

