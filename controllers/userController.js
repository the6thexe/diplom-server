const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJWT = (id, login, role) => {
    return jwt.sign(
        { id, login, role },
        process.env.SECRET_KEY,
        { expiresIn: '12h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { login, password, role } = req.body
        if (!login || !password) {
            return next(ApiError.badRequest('Некорректный login или password'))
        }
        const candidate = await User.findOne({ where: { login } })
        if (candidate) {
            return next(ApiError.badRequest('Данный login уже используется'))
        }
        const hashPassword = await bcrypt.hash(password, 6)
        const user = await User.create({ login, role, password: hashPassword })
        //const basket = await Basket.create({userId: user.id})  ТУТ ДОПИСАТЬ!!!!!
        const token = generateJWT(user.id, user.login, user.role)
        return res.json({ token })
    }

    async logining(req, res, next) {
        const { login, password } = req.body
        const user = await User.findOne({ where: { login } })
        if (!user) {
            return next(ApiError.internal('Пользователь с таким login`ом не найден!'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword || !password) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJWT(user.id, user.login, user.role)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.login, req.user.role)
        return res.json({ token })
    }
}

module.exports = new UserController()
