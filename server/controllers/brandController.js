import { Brand } from '../models/models.js'
class BrandController {
    async create (req, res) {
        try {
            const { name } = req.body
            const brand = await Brand.create({name})
            return res.json(brand)
        } catch (error) {
            res.status(400).json({message: 'Registration error'})
        }
    }

    async getAll (req, res) {
        try {
            const brands = await Brand.findAll()
            return res.json(brands)
        } catch (error) {
            res.status(400).json({message: 'Get brands error'})
        }
    }

}

export default new BrandController()

