import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'AuthMiddleware: No token' })
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({ message: 'AuthMiddleware: Not authorized' })
    }
}