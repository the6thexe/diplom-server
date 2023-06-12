const jwt = require('jsonwebtoken')

module.exports = function (role1, role2) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        if(!role2){
            role2 = null;
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer fjhsdkfjshdkfjshdkfsj
            if (!token) {
                return res.status(401).json({ message: "Пользователь не авторизован" })
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role1 || decoded.role !== role2) {
                return res.status(403).json({ message: "Нет доступа" })
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({ message: "Пользователь не авторизован" })
        }
    }
}
