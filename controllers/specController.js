const { Spec } = require('../models/models')
const ApiError = require('../error/ApiError')

class SpecController {
    async create(req, res) {
        const { name } = req.body
        const spec = await Spec.create({ name })
        return res.json(spec)
    }

    async getAll(req, res) {
        const specs = await Spec.findAll()
        return res.json(specs)
    }

    async getOne(req, res) {
        const { id } = req.params
        const spec = await Spec.findOne(
            { where: { id: id } },
        )
        return res.json(spec)
    }

    async deleteOne(req, res) {
        const { id } = req.params
        Spec.destroy({
            where: {
                id: id
            }
        }).then(() => {
            console.log("Данные удалены")
        }).catch((error) => {
            console.log("Ошибка удаления данных студентов: ", error)
        })
    }
}

module.exports = new SpecController()